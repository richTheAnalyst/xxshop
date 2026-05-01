'use client'

import { createContext, useContext, useState, ReactNode } from "react";


//product type
type product = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
};
//context type
type CartContextType = {
  cart: product[];
  addToCart: (product: product) => void;
  removeFromCart: (id: number) => void;
};


const CartContext = createContext<CartContextType | null>(null);


export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<product[]>([]);


  //add product to cart
  const addToCart = (product: product) => {
    setCart((prev) => {
        const exists = prev.find((item) => item.id === product.id);
        if (exists) {
            return prev.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }
        return [...prev, { ...product, quantity: 1 }];
    
    });

  };

  //remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((product: product) => product.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};































