"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (acc: number, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id: number, value: number) => {
    if (value < 1) return;
    updateQuantity(id, value);
    toast.success("Quantity updated");
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
    toast.success("Item removed");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <Link href="/" className="text-blue-700 hover:underline text-sm">
          ← Back to Shop
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between border p-4 rounded-lg shadow-sm"
            >
              {/* Image + Info */}
              <div className="flex gap-4 items-center">
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-blue-700 font-semibold">${item.price}</p>
                </div>
              </div>

              {/* Qty + Remove */}
              <div className="flex flex-col sm:flex-row gap-4 items-center mt-4 sm:mt-0">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  className="w-20 px-3 py-1 border rounded"
                />
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="text-right mt-6 border-t pt-4">
            <p className="text-lg font-medium">Subtotal: ${subtotal}</p>
            <Link href="/checkout">
              <button className="mt-4 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
