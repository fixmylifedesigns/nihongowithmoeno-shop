"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const muiInstagram = [
  {
    image: "/images/mui/1.png",
    link: "https://www.instagram.com/reel/DFk_lzghmgk/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/images/mui/2.png",
    link: "https://www.instagram.com/reel/DFj2EFVxpjv/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/images/mui/3.png",
    link: "https://www.instagram.com/reel/DFj7uQjxhwQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/images/mui/4.png",
    link: "https://www.instagram.com/reel/DFpZ3YcvTQt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

function ShopHomepage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const response = await fetch("/api/printify/products", {
          cache: "no-store",
        });
        const data = await response.json();
        const visibleProducts = data.filter(
          (product) => product.visible === true
        );
        // Get first 3 products as featured (you can modify this logic)
        setFeaturedProducts(visibleProducts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchFeaturedProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Banner Section */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden mb-12">
        <Image
          src="/images/banner.webp" // Convert your image to WebP format for better compression
          alt="Japan-inspired fashion and products"
          fill // 'layout="fill"' is deprecated in newer Next.js versions, use 'fill' prop instead
          priority // This is good - tells Next.js to preload this image
          placeholder="blur" // Add a blur-up effect while loading
          blurDataURL="data:image/jpeg;base64,/9j..." // You'll need to generate this, or use a very small version of your image
          sizes="100vw" // Tell the browser this image takes full viewport width
          quality={85} // Lower quality (default is 75-80)
          style={{ objectFit: "cover" }} // 'objectFit' should be in style prop in newer Next.js
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_-1px_0_rgb(0_0_0_/_40%),_1px_0_0_rgb(0_0_0_/_40%),_-1px_0_0_rgb(0_0_0_/_40%),_1px_1px_2px_rgb(0_0_0_/_80%)]">
            Nihongo with Moeno Shop
          </h1>
          <p className="text-xl text-white mb-6 max-w-2xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_-1px_0_rgb(0_0_0_/_40%),_1px_0_0_rgb(0_0_0_/_40%),_-1px_0_0_rgb(0_0_0_/_40%)]">
            Japanese-inspired clothing, accessories, and unique merchandise
            featuring Moeno and Mui
          </p>
          <button
            onClick={() => router.push("/all-products")}
            className="inline-block transition duration-300 transform hover:scale-105 focus:outline-none"
          >
            <Image
              src="/images/shopnow.png"
              alt="Shop Now with Mui"
              width={150}
              height={75}
              className="transition-all duration-300"
            />
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/all-products" className="text-blue-600 hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
                onClick={() => router.push(`/all-products/${product.id}`)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={product.images[0].src}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-center"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 mb-4">
                    ${product.variants[0].price / 100}
                  </p>
                  <div className="mt-auto">
                    <button
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/all-products/${product.id}`);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-600">
              Loading featured products...
            </p>
          )}
        </div>
      </section>

      {/* About Moeno Section */}
      <section className="mb-16 bg-gray-50 rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 rounded-full overflow-hidden mx-auto">
              <Image
                src="/images/moeno-profile.jpg" // Update with actual image
                alt="Moeno"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Meet Moeno</h2>
            <p className="text-lg text-gray-700 mb-4">
              Moeno is a native Japanese speaker from Osaka with a passion for
              teaching and sharing Japanese culture. While she teaches Japanese
              language at{" "}
              <a
                href="https://nihongowithmoeno.com"
                className="text-blue-600 hover:underline"
              >
                nihongowithmoeno.com
              </a>
              , this shop represents her creative side and love for all things
              Japan.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Each product in this shop is created by Moeno and inspired by
              Japanese culture and her adorable dog, Mui. From traditional
              motifs to unique modern designs, every item reflects her passion
              for Japan and love for sharing its beauty with the world.
            </p>
            <p className="text-lg text-gray-700">
              Currently studying English, Moeno aspires to become a professional
              translator while continuing to create content that bridges
              Japanese and global cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Mui's Corner */}
      {/* Mui's Corner */}
      <section className="mb-16">
        <div className="bg-blue-50 rounded-xl p-6 md:p-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                Meet Mui
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
                Meet the furry face behind some of our most popular merchandise!
                Mui is Moeno&apos;s adorable dog and a star in his own right.
                Together from Osaka, Japan, Mui accompanies Moeno on various
                adventures that they share on Instagram.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Follow Mui&apos;s adventures at{" "}
                <a
                  href="https://instagram.com/mui_inu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @mui_inu
                </a>{" "}
                and check out our exclusive Mui merchandise featuring this
                lovable pup!
              </p>
              {/* <button
          onClick={() => router.push("/collections/mui")}
          className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
        >
          Shop Mui Collection
        </button> */}
            </div>
            <div className="w-full md:w-1/3">
              <div className="relative w-full aspect-square md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/images/mui-dog.jpg" // Update with actual image
                  alt="Mui the dog"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Shop Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => router.push("/collections/osaka")}
          >
            <Image
              src="/images/osaka-collection.jpg" // Update with actual image
              alt="Osaka Collection"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-2xl font-bold text-white">
                  Osaka Collection
                </h3>
                <p className="text-white text-opacity-90 mt-2">
                  Designs inspired by Moeno&apos;s hometown
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => router.push("/collections/traditional")}
          >
            <Image
              src="/images/traditional-collection.jpg" // Update with actual image
              alt="Traditional Collection"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-2xl font-bold text-white">
                  Traditional Collection
                </h3>
                <p className="text-white text-opacity-90 mt-2">
                  Classic Japanese aesthetics and designs
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => router.push("/collections/mui")}
          >
            <Image
              src="/images/mui-collection.jpg" // Update with actual image
              alt="Mui Collection"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-2xl font-bold text-white">
                  Mui Collection
                </h3>
                <p className="text-white text-opacity-90 mt-2">
                  Adorable merchandise featuring Moeno&apos;s dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Instagram Feed Preview */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Follow Mui&apos;s Adventures</h2>
          <a
            href="https://instagram.com/mui_inu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full text-sm font-medium hover:shadow-md transition-all duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span>@mui_inu</span>
          </a>
        </div>

        {/* Placeholder for Instagram feed - you'd need to implement an actual Instagram feed integration */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {muiInstagram.map(({ image, link }, key) => (
            <div
              key={key}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image}
                  alt={`Mui's adventure ${key}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                {/* Semi-transparent overlay that appears on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  {/* Play button and text that appear on hover */}
                  <div className="flex flex-col items-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {/* Play icon */}
                    <svg
                      className="w-12 h-12 text-white mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="text-white font-medium text-sm">
                      Watch Adventure
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Wrap with Suspense boundary
export default function Home() {
  return (
    <Suspense
      fallback={<div className="text-lg text-center py-8">Loading shop...</div>}
    >
      <ShopHomepage />
    </Suspense>
  );
}
