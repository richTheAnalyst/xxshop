import prisma from '../../lib/prisma'
import { NextResponse } from 'next/server'


//get all products

export async function GET() {

    try {
    const products = await prisma.product.findMany();

    return NextResponse.json(products)
    }
    catch(error) {
        console.log("PRODUCTS API ERROR:", error)

    }
}

//create products

export async function POST(req: Request) {
    const body = await req.json();

    const product = await prisma.product.create({
        data: {
            title: body.title,
            description: body.description,
            price: body.price,
            image: body.image,
            category: body.category,
        },
    })

    return NextResponse.json(product);

}