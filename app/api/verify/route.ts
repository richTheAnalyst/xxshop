import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { reference } = await request.json();
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let userId: number;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
    userId = decoded.userId;
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      },
    );

    const data = await res.json();

    if (data.status && data.data.status === "success") {
      // Save order to database
      const amount = data.data.amount / 100; // Convert kobo/cents back to main unit
      
      const order = await prisma.order.create({
        data: {
          reference: reference,
          amount: amount,
          status: "paid",
          userId: userId,
        },
      });

      return NextResponse.json({ success: true, order });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
