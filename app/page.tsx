import { getProducts } from "./lib/api";
import ViewButton from "./components/button";
import Link from "next/link";

type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero  */}
           <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-1.5 border border-gray-200 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-700">Free shipping worldwide</span>
            </div>
            <span className="text-xs text-gray-500"> abeg na lie oo...if u buy ur money wont come again</span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Welcome to</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">XX Shop</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Your one-stop destination for quality products at unbeatable prices. 
              Discover curated collections designed to elevate your everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
             <Link href= "/products" className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-600 rounded-xl font-medium border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200">
                Shop Now
              </Link>
              <Link href= "/products" className="px-8 py-3 bg-white text-gray-800 hover:bg-gray-100 rounded-xl font-medium border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* Featured slice */}
     <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div>
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Curated Selection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Featured Products</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"></div>
          </div>
          <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer mt-4 md:mt-0">
            View all products →
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center p-6">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm border border-gray-100">
                  {prod.category}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {prod.title}
                </h3>
                
                <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                  {prod.description}
                </p>

                {/* Price and Action */}
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${prod.price}</span>
                    <span className="text-sm text-gray-400 ml-1">USD</span>
                  </div>
                  <ViewButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}