"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white px-5 py-10 w-full">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Column 1: Filters */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>All</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home</li>
          </ul>
        </div>

        {/* Column 2: About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-left text-sm text-gray-400">
        &copy; {new Date().getFullYear()} American.
      </div>
    </footer>
  );
};

export default Footer;
