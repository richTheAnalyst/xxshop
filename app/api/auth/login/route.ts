import { prisma } from "../../../lib/prisma";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {
    
   const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Invalid email or password" },
            { status: 400});
        }

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if(!user) {
        return NextResponse.json(
          { error: "Invalid email or password" },
          { status: 400 })
      }

        const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

     const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error("JWT_SECRET is not defined");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const token = jwt.sign({ userId: user.id }, jwtSecret, {
      expiresIn: "7d",
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.log("Login erro", error)

    return NextResponse.json(
        {error: "internal server error"},
        {status: 500}
    )
  }
}