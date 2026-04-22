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


export default function ViewButton({ id }: { id: number }) {
    if (!id) {
        return null;
    }
    return (
            <Link href={`/products/${id}`} className="text-sm px-3 py-1.5 bg-black text-white rounded-md hover:bg-gray-800 transition">
            View Product
            </Link>
          
    )
}