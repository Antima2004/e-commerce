"use client";

import { use } from "react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

// Dummy product data
const products = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    image:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "High-performance running shoes with excellent grip.",
    category: "Footwear",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 129,
    image:
      "https://images.pexels.com/photos/3394661/pexels-photo-3394661.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Noise-canceling wireless headphones with long battery life.",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Backpack",
    price: 79,
    image:
      "https://images.pexels.com/photos/374574/pexels-photo-374574.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Durable and spacious backpack for everyday use.",
    category: "Accessories",
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    image:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Smartwatch with fitness tracking and notifications.",
    category: "Electronics",
  },
  {
    id: 5,
    title: "T-Shirt",
    price: 29,
    image:
      "https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Comfortable cotton t-shirt in various sizes.",
    category: "Clothing",
  },
  {
    id: 6,
    title: "Coffee Maker",
    price: 89,
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Brew fresh coffee with this easy-to-use coffee maker.",
    category: "Home",
  },
  {
    id: 7,
    title: "LED Desk Lamp",
    price: 45,
    image:
      "data:image/jpeg;base64,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",
    description: "Stylish and energy-efficient LED lamp.",
    category: "Home",
  },
  {
    id: 8,
    title: "Jeans",
    price: 59,
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Denim jeans with a comfortable fit.",
    category: "Clothing",
  },
];

export default function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter(); // ✅ use router
  const { id } = use(params);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* ✅ Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl text-blue-700 font-semibold mb-2">
            ${product.price}
          </p>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <p className="mb-4 text-sm text-gray-500">
            Category: <span className="capitalize">{product.category}</span>
          </p>

          <div className="flex items-center gap-4">
            <label htmlFor="qty" className="text-sm font-medium">
              Qty:
            </label>
            <input
              type="number"
              min={1}
              defaultValue={1}
              id="qty"
              className="w-20 px-3 py-1 border rounded"
            />
          </div>

          <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
