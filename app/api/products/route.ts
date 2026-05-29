import prisma from '@prisma/client'
import { NextResponse } from 'next/server'


//get all products

export async function GET() {

    try {
    const products = await prisma.product.findMany();
    }
    catch(error) {
        console.log("PRODUCTS API ERROR:", error)

    }

    return NextResponse.json(products);
}

//create products

export async function POST(req: Request, res: Response) {
    const body = req.json();

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