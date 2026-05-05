"use client";

import { useCart } from "../context/CartContext";

export default function CheckoutButton() {
  const { cart } = useCart(); 

  const handleCheckout = async () => {
    const res = await fetch("/api/paystack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <button onClick={handleCheckout} className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
      Proceed to Checkout
    </button>
    
  );
}