// app/components/mobile-menu.tsx
'use client';

import { useState } from 'react';
import { Menu, X, ShoppingCart, User, LogOut, Home, Info, Package } from 'lucide-react';
import Link from 'next/link';
import LogoutButton from './logout-btn';

export default function MobileMenu({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Toggle Button - enhanced with animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="h-5 w-5 text-gray-700 dark:text-gray-200 transition-transform duration-200 rotate-0" />
        ) : (
          <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200 transition-transform duration-200" />
        )}
      </button>

      {/* Mobile Menu Panel - animated slide down */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-xl z-50 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-6 space-y-1">
            {/* Home Link */}
            <MobileNavLink
              href="/"
              icon={<Home className="h-5 w-5" />}
              onClick={() => setIsOpen(false)}
            >
              Home
            </MobileNavLink>

            {/* About Link */}
            <MobileNavLink
              href="/about"
              icon={<Info className="h-5 w-5" />}
              onClick={() => setIsOpen(false)}
            >
              About
            </MobileNavLink>

            {/* Products Link */}
            <MobileNavLink
              href="/products"
              icon={<Package className="h-5 w-5" />}
              onClick={() => setIsOpen(false)}
            >
              Products
            </MobileNavLink>

            {/* Conditional content based on auth status */}
            {isAuthenticated ? (
              <>
                {/* Cart Link - fixed incorrect href */}
                <MobileNavLink
                  href="/cart"
                  icon={<ShoppingCart className="h-5 w-5" />}
                  onClick={() => setIsOpen(false)}
                >
                  Cart
                </MobileNavLink>

                {/* Profile Link */}
                <MobileNavLink
                  href="/profile"
                  icon={<User className="h-5 w-5" />}
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </MobileNavLink>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 my-3 pt-3">
                  <div className="pl-3">
                    <LogoutButton />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Register Link */}
                <MobileNavLink
                  href="/auth/register"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </MobileNavLink>

                {/* Login Link */}
                <MobileNavLink
                  href="/auth/login"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </MobileNavLink>
              </>
            )}
          </nav>
        </div>
      )}
    </>
  );
}

// Reusable mobile navigation link component (clean, professional)
function MobileNavLink({
  href,
  children,
  icon,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-amber-50 dark:hover:bg-amber-900/30 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200 group"
    >
      {icon && <span className="text-gray-500 group-hover:text-amber-600 transition-colors">{icon}</span>}
      <span className="font-medium">{children}</span>
    </Link>
  );
}