"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import "../app/globals.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { items, isOpen, setIsOpen } = useCart(); // Access cart context

  // Calculate total item count, including quantities
  const totalItemCount = items.reduce(
    (count, item) => count + item.quantity,
    0
  );

  // Track scroll position to determine when to switch to fixed positioning
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle cart open/closed
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden header h-auto py-4 flex flex-col items-center justify-center bg-primary-color border-b-4 border-orange-600">
        {/* Logo */}
        <div className="mb-4">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              alt="Nihongo with Moeno Logo"
              width={180}
              height={90}
            />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex items-center gap-4 mt-2">
          <Link
            href="https://www.nihongowithmoeno.com"
            className="block text-white py-2 px-4 hover:bg-secondary-color rounded"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white py-2 px-4 hover:bg-secondary-color rounded"
          >
            About Us
          </Link>
          <button
          
            onClick={toggleCart}
            className="text-white p-2 rounded-full hover:bg-secondary-color transition-colors relative"
            aria-label="Toggle shopping cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItemCount > 0 && (
              <span className="absolute -mt-2 ml-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItemCount}
              </span>
            )}
          </button>
        </nav>
      </header>

      {/* Desktop Header */}
      <header className="hidden md:flex header h-36 relative items-center justify-between p-4 bg-primary-color border-b-4 border-orange-600">
        {/* Logo - absolutely positioned in the center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              alt="Nihongo with Moeno Logo"
              width={200}
              height={100}
            />
          </Link>
        </div>

        {/* Empty div to balance the header */}
        <div className="w-20"></div>

        {/* Right side navigation with Home and Cart */}
        <nav className="flex items-center gap-4">
          <Link
            href="https://www.nihongowithmoeno.com"
            className="block text-white py-2 px-4 hover:bg-secondary-color rounded"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white py-2 px-4 hover:bg-secondary-color rounded"
          >
            About Us
          </Link>
          <button
            onClick={toggleCart}
            className="text-white p-6 rounded-full hover:bg-secondary-color transition-colors"
            aria-label="Toggle shopping cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItemCount > 0 && (
              <span className="absolute -mt-10 ml-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItemCount}
              </span>
            )}
          </button>
        </nav>
      </header>

      {/* Fixed Cart Button that appears when scrolling - hide when cart is open */}
      {isScrolled && !isOpen && (
        <button
          onClick={toggleCart}
          className="fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          {totalItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {totalItemCount}
            </span>
          )}
        </button>
      )}
    </>
  );
}
