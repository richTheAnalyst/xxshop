'use client';

import { useCart } from "../context/CartContext";
import { toast } from "sonner";


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
        <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all text-sm font-medium shadow-md hover:shadow-lg" onClick={() => {
          addToCart(product);
          toast.success("Added to cart!");
        }}>
            Add to Cart
        </button>
    );
}
