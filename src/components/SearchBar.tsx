"use client";

import { Search } from "lucide-react";
import { useSearchStore } from "../store/useSearchStore"; // ← this file you'll create

const SearchBar = () => {
  const { query, setQuery } = useSearchStore();

  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-md bg-white text-black placeholder-gray-500 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
    </div>
  );
};

export default SearchBar;
