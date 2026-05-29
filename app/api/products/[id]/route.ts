import prisma from '@prisma/client'
import { NextResponse }from 'next/server'

//get product by id
export async function GET(req: Request, { params }:{ params: Promise<{id: string }> }) {
    const { id } = await params;

    const product = await prisma.product.findUnique({
        where: {
            id: Number(id),
        },
    });

    return NextResponse.json(product)
    
}

//update product

export async function PUT( req: Request, { params }:{ params: Promise<{ id: string }>}) {

    const body = req.json
    const { id } = await params

    const updated = await prisma.product.update({
        where: {
            id: Number(id),

        },

        data: body
    })

    return NextResponse.json(updated)
}
