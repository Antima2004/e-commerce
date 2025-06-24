"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";
import { Product } from "@/types";

type ProductCardProps = {
  products: Product[];
};

const ProductCard = ({ products }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition block"
        >
          <div className="relative w-full h-40 mb-4">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              priority
            />
          </div>
          <h3 className="text-base font-semibold mb-1">{product.title}</h3>
          <p className="text-blue-700 font-medium mb-3">${product.price}</p>
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="bg-blue-700 text-white w-full py-2 rounded hover:bg-blue-800 transition text-sm"
          >
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
