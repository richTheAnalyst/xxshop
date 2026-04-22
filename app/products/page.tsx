import { getProducts } from "../lib/api";
import ViewButton from "../components/button";

type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function Users() {
  const product: product[] = await getProducts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 font-san mt-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="text-center md:text-left md:flex md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Our Collection
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg max-w-2xl">
              Discover quality products curated just for you
            </p>
          </div>
          
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mt-6"></div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {product.map((prod) => (
            <div
              key={prod.id}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-out border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 flex flex-col overflow-hidden"
            >

              <div className="relative bg-gray-50 dark:bg-gray-800 flex items-center justify-center h-64 p-4 overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="h-full w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
                  {prod.category}
                </span>
              </div>

             
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {prod.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                  {prod.description}
                </p>

                <div className="mt-5 flex items-center justify-between pt-2 border-t border-gray-50 dark:border-gray-800">
                  <div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      ${prod.price}
                    </span>
                    <span className="text-xs text-gray-400 ml-1">USD</span>
                  </div>
                  <ViewButton key={prod.id} id={prod.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {product.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}