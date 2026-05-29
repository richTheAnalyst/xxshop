import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          href="/dashboard/products"
          className="bg-white p-6 rounded-xl shadow"
        >
          <h2 className="text-2xl font-semibold">
            Products
          </h2>

          <p className="text-gray-500 mt-2">
            Manage products
          </p>
        </Link>

      </div>
    </div>
  );
}