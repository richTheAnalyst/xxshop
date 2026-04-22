import { notFound } from "next/navigation";

export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();
  return products;
}

export async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  

  if (!res.ok)
  {
    notFound();
  }

  const product = await res.json();
  return product;
}