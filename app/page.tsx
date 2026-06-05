import { getProducts } from "./api/products-api";
import Link from "next/link";
import FeaturedProductsSection from "./components/featuredProductsSection";


type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function Home() {
  // 🔒 YOUR EXACT FETCH LOGIC – UNCHANGED
  const products = await getProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section – redesigned with better contrast & motion */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-gray-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 border border-amber-200 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-gray-700">✨ Free shipping worldwide</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Welcome to
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                SunnyLinkRentals
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Your one-stop destination for quality products at unbeatable prices.
              Discover curated collections designed to elevate your everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/products"
                className="px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Shop Now
              </Link>
              <Link
                href="/products"
                className="px-8 py-3 bg-white text-gray-800 hover:bg-gray-100 rounded-xl font-medium border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products – with working image modal & improved cards */}
      <FeaturedProductsSection products={featuredProducts} />
    </div>
  );
}

// Client component for interactivity (modal, hover states)
