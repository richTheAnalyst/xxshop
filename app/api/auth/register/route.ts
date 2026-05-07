import  { prisma } from "../../../lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST(request: Request) {

    try {

         const { name, phone ,email, password } = await request.json();


    if (!name || !phone || !email || !password) {
        return NextResponse.json(
            { error: "email and password required" },
            { status: 400 })
    }
    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {

        return NextResponse.json(
            { error: "User already exists" },
            { status: 400 })
    }


    const hashed = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {name, phone, email, password: hashed}
    });

    return NextResponse.json(
        { message: "created successfully" },
        { status: 201 })
    

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {error: "internal server error"},
            {status: 500})
    }
   
}
