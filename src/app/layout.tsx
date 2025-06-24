import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "A modern responsive e-commerce web app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            className: "bg-blue-700 text-white",
            style: {
              fontFamily: "var(--font-geist-sans)",
            },
          }}
        />

        {/* Global Cart State Provider */}
        <CartProvider>
          <Header />

          {/* Main content with responsive padding */}
          <main className="min-h-[calc(100vh-160px)] px-4 py-8">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
