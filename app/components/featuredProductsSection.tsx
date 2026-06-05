'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function FeaturedProductsSection({ products }: { products: Product[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
        <div>
          <span className="text-sm font-semibold text-amber-600 tracking-wide uppercase">
            Curated Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Featured Products
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-4" />
        </div>
        <Link
          href="/products"
          className="text-sm text-gray-500 hover:text-amber-600 transition-colors cursor-pointer mt-4 md:mt-0 flex items-center gap-1"
        >
          View all products <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col"
          >
            {/* Image container with click-to-zoom */}
            <div
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center p-6 cursor-zoom-in overflow-hidden"
              onClick={() => setSelectedImage(product.image)}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                priority={false}
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm border border-gray-100 z-10">
                {product.category}
              </span>
            </div>

            {/* Product details */}
            <div className="p-6 flex flex-col flex-grow">
              <Link href={`/products/${product.id}`} className="block group-hover:text-amber-600 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                  {product.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed flex-grow">
                {product.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-400 ml-1">USD</span>
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1"
                >
                  Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal (fixed & accessible) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Product preview"
              className="w-full h-auto max-h-[85vh] object-contain bg-gray-100"
            />
          </div>
        </div>
      )}
    </section>
  );
}