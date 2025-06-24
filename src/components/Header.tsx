"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import SearchBar from "./SearchBar"; // ✅ Import reusable component

const Header = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce(
    (acc: number, item) => acc + item.quantity,
    0
  );

  return (
    <header className="bg-blue-700 text-white py-4 px-0">
      <div className="max-w-[100%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        {/* Top Row: Logo & Cart */}
        <div className="w-full flex justify-between items-center md:w-auto">
          {/* Logo */}
          <div className="text-2xl font-bold">Logo</div>

          {/* Mobile Cart */}
          <div className="md:hidden relative">
            <Link
              href="/cart"
              className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium transition relative"
            >
              <ShoppingCart size={18} />
              <span>Cart</span>

              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* ✅ Reusable Global Search Bar */}
        <div className="w-full max-w-lg">
          <SearchBar />
        </div>

        {/* Desktop Cart */}
        <div className="hidden md:flex pr-4 relative">
          <Link
            href="/cart"
            className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium transition relative"
          >
            <ShoppingCart size={18} />
            <span>Cart</span>

            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
