import AddToCartButton from "../../components/add-to-cart-btn";
import { getProduct, getProducts } from "../../api/products-api";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  image: string;
};

export default async function View({ params }: { params: Promise<{ productid: string }> }) {
  // 🔒 YOUR EXACT AUTH LOGIC – UNCHANGED
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  const isAuthenticated = !!token;

  // 🔒 YOUR EXACT FETCH LOGIC – UNCHANGED
  const { productid } = await params;
  const product: Product = await getProduct(Number(productid));

  if (!product) {
    notFound();
  }
  const allProducts: Product[] = await getProducts();
  const relatedProducts = allProducts.filter((p) => p.category === product.category && p.id !== product.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 font-sans">
      {/* Back Navigation - improved */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to products
        </Link>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery - professional zoom effect */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg group">
            <div className="aspect-square flex items-center justify-center p-8 md:p-12">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            {/* Category Badge - amber accent */}
            <span className="absolute top-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-700 dark:text-gray-200 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md border border-gray-100 dark:border-gray-700">
              {product.category}
            </span>
          </div>

          {/* Product Info - redesigned with amber accents */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {product.title}
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-4"></div>
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

            {/* Action Buttons - brand consistent */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                Buy Now
              </button>
              {isAuthenticated ? (
                <div className="flex-1">
                  <AddToCartButton product={product} />
                </div>
              ) : (
                <Link
                  href={`/auth/login?from=/products/${product.id}`}
                  className="flex-1 block text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Login to Add to Cart
                </Link>
              )}
            </div>

            {/* Trust Signals - enhanced */}
            <div className="grid grid-cols-3 gap-4 pt-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
              <div className="flex flex-col items-center gap-1 text-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs">In Stock</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs">Fast Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section - redesigned cards */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  You May Also Like
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2"></div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                {relatedProducts.length} items
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/products/${related.id}`}
                  className="group bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50 hover:border-amber-200 dark:hover:border-amber-800/50 overflow-hidden flex flex-col hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 h-48 flex items-center justify-center p-4 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      width={200}
                      height={200}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                      {related.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-50 dark:border-gray-800">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        ${related.price}
                      </span>
                      <span className="text-xs text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}