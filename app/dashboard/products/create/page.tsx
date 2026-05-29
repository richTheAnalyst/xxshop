"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProductPage() {

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = async () => {

    await fetch("/api/products", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title,
        price: Number(price),
        image,
        category,
        description,
      }),
    });

    router.push("/dashboard/products");
  };

  return (
    <div className="min-h-screen p-10">

      <h1 className="text-3xl font-bold mb-8">
        Create Product
      </h1>

      <div className="max-w-xl space-y-4">

        <input
          type="text"
          placeholder="Title"
          className="w-full border p-3 rounded"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Price"
          className="w-full border p-3 rounded"
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border p-3 rounded"
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full border p-3 rounded"
          onChange={(e) => setCategory(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full border p-3 rounded"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleCreate}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Create Product
        </button>

      </div>
    </div>
  );
}