'use client';

import { useCart } from "../context/CartContext";


type Product = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    description: string;
    category: string;
    image: string;
}





export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCart } = useCart();
    
    return (
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium" onClick={() => addToCart(product)}>
            Add to Cart
        </button>
    );
}