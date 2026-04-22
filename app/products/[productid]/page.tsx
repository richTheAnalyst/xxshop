import { getProduct } from "../../lib/api";
import { notFound } from "next/navigation";

type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function View({ params }: { params: Promise<{ productid: string }> }) {
  const { productid } = await params;
  const product: product = await getProduct(Number(productid));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 font-sans mt-12">
      {/* Simple top bar with back link (optional, no navbar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <a
          href="/products"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to products
        </a>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery - Enhanced */}
          <div className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group">
            <div className="aspect-square flex items-center justify-center p-8 md:p-12">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative badge */}
            <span className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-200 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
              {product.category}
            </span>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"></div>
            </div>

            <div className="flex items-baseline space-x-2">
              <span className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">USD</span>
            </div>

            <div className="prose prose-sm sm:prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                Add to Cart
              </button>
              <button className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-xl shadow-sm hover:shadow transition-all duration-200">
                Buy Now
              </button>
            </div>

            {/* Extra info - trust signals */}
            <div className="flex items-center gap-6 pt-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>In Stock</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Fast Shipping</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}