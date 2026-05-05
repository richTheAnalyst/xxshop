import { metadata } from "@/app/layout";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { cart } = await request.json();

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
          email: "richardkodah2003@gmail.com",
          amount: Math.round(amount * 100),
          callback_url: "http://localhost:3000/success",

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
