import Link from "next/link";

async function getProducts() {
  const res = await fetch(
    "http://localhost:3000/api/products",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function ProductsDashboard() {
  const products = await getProducts();

  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <Link
          href="/dashboard/products/create"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Add Product
        </Link>

      </div>

      <div className="grid gap-4">

        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >

            <div>
              <h2 className="font-bold text-xl">
                {product.title}
              </h2>

              <p>${product.price}</p>
            </div>

            <Link
              href={`/dashboard/products/${product.id}`}
              className="text-blue-500"
            >
              Edit
            </Link>

          </div>
        ))}

      </div>
    </div>
  );
}