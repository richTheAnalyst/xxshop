import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ error: "Valid User ID is required" }, { status: 400 });
    }

    const userData = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Omit sensitive data like password
    const { password, ...safeUserData } = userData;

    return NextResponse.json(safeUserData);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
