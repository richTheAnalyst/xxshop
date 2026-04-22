import next from "next";
import { notFound } from "next/navigation";

export async function getProducts(): Promise<any[]> {
  const res = await fetch("https://fakestoreapi.com/products", 
    {next: {revalidate: 3600}}
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const text = await res.text();

  if (!text || text.trim() === "") {
    console.error("Received empty response from products API");
    return [];
  } 
 try {   const data = JSON.parse(text);
     return  Array.isArray(data) ? data : [];
   } catch (error) {
     console.error("Error parsing products API response:", error);
     return [];
   }

}

export async function getProduct(id: number): Promise<any> {
  if (!id) {
    return null;
  }

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch product ${id}: ${res.status}`);
  }

  const text = await res.text();
  if (!text || text.trim() === "") {
    return null;
  }

  try {
    const data = JSON.parse(text);
    if (!data?.id) {
      notFound();
    }
    return data;
  } catch (error) {
    console.error(`Error parsing product ${id} API response:`, error);
    return null;
  }
}