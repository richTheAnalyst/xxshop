// app/components/mobile-menu.tsx
'use client';

import { useState } from 'react';
import { Menu, X, ShoppingCart, LogOut } from 'lucide-react';
import Link from 'next/link';
import LogoutButton from './logout-btn';

export default function MobileMenu({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">About</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">Products</Link>
            
            {isAuthenticated ? (
              <>
                <Link href="../products/add-to-cart" onClick={() => setIsOpen(false)} className="py-2 flex items-center gap-2 hover:text-blue-600">
                  <ShoppingCart className="h-4 w-4" /> Cart
                </Link>
                <Link href="/profile" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">Profile</Link>
                <div className="py-2 border-t mt-2">
                  <LogoutButton />
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/register" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">Register</Link>
                <Link href="/auth/login" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">Login</Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}