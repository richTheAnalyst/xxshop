import { getProducts } from "../api/products-api";
import FeaturedProductsSection from "../components/featuredProductsSection";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function Users() {
  // 🔒 YOUR EXACT FETCH LOGIC – UNCHANGED
  const products: Product[] = await getProducts();
  const featuredProducts = products;

  if (!products) {
    throw new Error("failed to fetch products");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 font-sans">
      {/* Hero Section with animated gradient */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-50/50 via-white to-orange-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-1.5 border border-amber-200 dark:border-gray-700 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {products.length} products available
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Our Collection
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg max-w-2xl leading-relaxed">
              Discover quality products curated just for you – each piece chosen
              for craftsmanship and value.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <FeaturedProductsSection products={featuredProducts} />
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-20 px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6">
            <svg
              className="w-10 h-10 text-amber-600 dark:text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0H4"
              />
            </svg>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No products found.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
            Check back later for new arrivals.
          </p>
        </div>
      )}
    </div>
  );
}
