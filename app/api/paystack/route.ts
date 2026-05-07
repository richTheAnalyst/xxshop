import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "../../lib/prisma";

export async function POST(request: Request) {
  const { cart } = await request.json();
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let userEmail: string;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    userEmail = user.email;
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const amount = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0,
  );

  try {
    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          amount: Math.round(amount * 100),
          callback_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success`,

          metadata: {
            cart,
          },
        }),
      },
    );

    const data = await response.json();

    return NextResponse.json({ url: data.data.authorization_url });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
