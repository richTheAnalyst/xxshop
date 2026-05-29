import { Search } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import CartIconWrapper from "./cart-icon-wrapper";
import MobileMenu from "./mobile-menu";
import LogoutButton from "./logout-btn";

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  const isAuthenticated = !!token;

  return (
    <>
      <nav className="bg-white-100 dark:bg-yellow-900/80 backdrop-blur-md fixed w-full z-50 top-0 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-20 h-8 bg-gradient-to-br from-gray-600 to-white-600 rounded-lg flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <span className="text-amber-600 font-bold text-lg">SUNNY</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                LinkRentals
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                <li>
                  <Link 
                    href="/" 
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products" 
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Products
                  </Link>
                </li>
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
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/auth/login" 
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                ) : (
                   <>
                    <li>
                      <Link 
                        href="/profile" 
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <LogoutButton />
                    </li>
                   </>
                )}
              </ul>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Search products..."
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            {/* Mobile menu button */}
            <MobileMenu isAuthenticated={isAuthenticated} />

          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}