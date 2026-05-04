import Link from "next/link";
import { useCart } from "../context/CartContext";

//product type
type product = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
};

export default function AddToCartButton({ product }: { product: product }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Link href="../products/add-to-cart" className="relative">
      🛒 Cart
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
