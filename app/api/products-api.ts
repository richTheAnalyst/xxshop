import { notFound } from "next/navigation";

export async function getProducts(): Promise<any[]> {
  const res = await fetch("http://localhost:3000/api/products", 
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

//getting products by name
export async function getProduct(id: number): Promise<any> {
  if (!id) {
    return null;
  }

  const res = await fetch(`http://localhost:3000/api/products/${id}`);

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