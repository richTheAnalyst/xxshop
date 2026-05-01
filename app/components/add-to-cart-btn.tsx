'use client';

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}





export default function AddToCartButton({ id }: { id: number }) {
     const product: Product = {
        id,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        
    };
    if (!id) {
        return notFound();

    }
    const [cart, setCart] = useState<Product[]>([]);

   

    const handleAddToCart = (product: Product) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const newCart = [...cart, product];
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(newCart);
    }
    return (
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium" onClick={() => handleAddToCart(product)}>
            Add to Cart
        </button>
    );
}