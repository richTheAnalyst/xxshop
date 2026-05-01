'use client';


import Link from "next/link";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}


export default function ViewButton({ id }: { id: number}) {
    if (!id) {
        return null;
    }
    return (
            <Link href={`/products/${id}`}  className="text-sm text-blue-600 font-medium">
            view details
            </Link>
          
    )
}

