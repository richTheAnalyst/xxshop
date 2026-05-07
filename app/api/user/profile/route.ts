import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error("JWT_SECRET is not defined");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const decoded = jwt.verify(token, jwtSecret) as { userId: number };
    const userId = decoded.userId;

    const userData = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { password, ...safeUserData } = userData;
    return NextResponse.json(safeUserData);
  } catch (error) {
    console.error("Error fetching current user profile:", error);
    return NextResponse.json({ error: "Unauthorized or session expired" }, { status: 401 });
  }
}

export async function PATCH(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

    const decoded = jwt.verify(token, jwtSecret) as { userId: number };
    const userId = decoded.userId;

    const { name, email, phone } = await request.json();

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Check if email or phone is already taken by another user
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { phone: phone }
        ],
        NOT: { id: userId }
      }
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email or Phone already in use" }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name, email, phone },
    });

    const { password, ...safeUserData } = updatedUser;
    return NextResponse.json(safeUserData);
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
