import { Search, ShoppingBag, User, Menu } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import CartIconWrapper from "./cart-icon-wrapper";
import MobileMenu from "./mobile-menu";
import LogoutButton from "./logout-btn";

export default async function Navbar() {
  // 🔒 YOUR EXACT AUTH LOGIC – UNCHANGED
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  const isAuthenticated = !!token;

  return (
    <>
      <nav className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md fixed w-full z-50 top-0 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo – enhanced with hover animation */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <span className="text-white font-bold text-lg">SL</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                SunnyLinkRentals
              </span>
            </Link>

            {/* Desktop Navigation – with animated underline */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/products", label: "Products" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
                {isAuthenticated && (
                  <li>
                    <CartIconWrapper />
                  </li>
                )}
                {!isAuthenticated ? (
                  <>
                    <li>
                      <Link
                        href="/auth/register"
                        className="relative text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium group"
                      >
                        Register
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/auth/login"
                        className="relative text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium group"
                      >
                        Login
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        href="/profile"
                        className="relative text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium group"
                      >
                        Profile
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                    <li>
                      <LogoutButton />
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Desktop Search – redesigned with focus glow */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                className="w-72 pl-10 pr-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-transparent transition-all duration-200"
                placeholder="Search products..."
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </div>

            {/* Mobile menu button – passes auth state unchanged */}
            <MobileMenu isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </nav>

      {/* Spacer – adjusted to match taller navbar on desktop */}
      <div className="h-16 md:h-20" />
    </>
  );
}