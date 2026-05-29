import { notFound } from "next/navigation";
import prisma from "../lib/prisma";

export async function getProducts(): Promise<any[]> {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export async function getProduct(id: number): Promise<any> {
  if (!id) return null;

  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) notFound();

    return product;
  } catch (error) {
    console.error(`Failed to fetch product ${id}:`, error);
    notFound();
  }
}