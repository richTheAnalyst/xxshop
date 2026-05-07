'use client';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartIconClient({ isAuthenticated }: { isAuthenticated: boolean }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!isAuthenticated) return null;

  return (
    <Link href="../products/add-to-cart" className="relative">
      🛒 Cart
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  );
}