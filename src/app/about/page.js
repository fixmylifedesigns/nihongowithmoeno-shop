"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-12">
        <Image
          src="/images/about-banner.webp" // You&apos;ll need to add this image
          alt="About Nihongo with Moeno"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_-1px_0_rgb(0_0_0_/_40%),_1px_0_0_rgb(0_0_0_/_40%),_-1px_0_0_rgb(0_0_0_/_40%),_1px_1px_2px_rgb(0_0_0_/_80%)]">
            Our Story
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Left sidebar with image */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/moeno-profile.jpg" // Same image from your homepage
                alt="Moeno"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
            <div className="bg-blue-50 rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-3">Quick Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Native Japanese speaker from Osaka</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Language teacher & educational content creator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Aspiring translator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Dog mom to Mui</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Designer of Japanese-inspired merchandise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Meet Moeno</h2>
            <p className="text-lg text-gray-700 mb-4">
              こんにちは！ I&apos;m Moeno, a native Japanese speaker from the
              vibrant city of Osaka. My journey began with a passion for sharing
              my language and culture with the world, which led me to establish
              Nihongo with Moeno—a platform dedicated to authentic Japanese
              language instruction.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              While teaching remains my primary focus at{" "}
              <a
                href="https://nihongowithmoeno.com"
                className="text-blue-600 hover:underline"
              >
                nihongowithmoeno.com
              </a>
              , I&apos;ve always had a creative side that yearned for
              expression. This shop represents that creative outlet, allowing me
              to design products that showcase Japan&apos;s rich cultural
              heritage and aesthetic sensibilities.
            </p>
            <p className="text-lg text-gray-700">
              Currently studying English, I aspire to become a professional
              translator—bridging Japanese and global cultures not just through
              language, but through visual arts and design. Each product in this
              shop tells a story about Japan, from traditional motifs to playful
              modern designs inspired by my daily life with my dog Mui.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Nihongo with Moeno Shop, we believe in creating products that
              are not just visually appealing but also culturally meaningful.
              Every design is carefully crafted to represent an aspect of
              Japanese culture, whether it&apos;s the elegance of traditional
              aesthetics, the charm of contemporary Japanese lifestyle, or the
              playful spirit of my beloved companion, Mui.
            </p>
            <p className="text-lg text-gray-700">
              We&apos;re committed to quality and authenticity in everything we
              create. Our goal is to bring a piece of Japan into your everyday
              life through thoughtfully designed products that spark joy and
              foster appreciation for Japanese culture.
            </p>

            <div className="my-8 bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
              <p className="text-xl italic text-gray-700">
                &quot;Language is the gateway to understanding a culture, but
                sometimes the most profound cultural connections happen beyond
                words—through shared experiences, visual arts, and everyday
                objects that carry cultural significance.&quot;
              </p>
            </div>
          </section>

          <section className="bg-blue-50 rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/mui-dog.jpg" // Same image from your homepage
                    alt="Mui the dog"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">The Story of Mui</h2>
                <p className="text-lg text-gray-700 mb-4">
                  No story about Nihongo with Moeno would be complete without
                  mentioning Mui, my adorable and spirited canine companion. Mui
                  has become more than a pet—he&apos;s a core part of my brand
                  and an ambassador for the playful side of Japanese culture.
                </p>
                <p className="text-lg text-gray-700">
                  Together, we explore Osaka and share our adventures on{" "}
                  <a
                    href="https://instagram.com/mui_inu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    @mui_inu
                  </a>
                  . His cheerful personality has inspired many of our most
                  popular designs, bringing smiles to customers around the
                  world.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <p className="text-lg text-gray-700 mb-4">
              Each product in our shop is designed with care and attention to
              detail. We offer a variety of items that blend traditional
              Japanese aesthetics with contemporary design sensibilities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Apparel</h3>
                <p>
                  Comfortable, stylish clothing featuring unique
                  Japanese-inspired designs and adorable Mui illustrations.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Accessories</h3>
                <p>
                  Functional and beautiful accessories that bring a touch of
                  Japanese elegance to your everyday life.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Home Goods</h3>
                <p>
                  Items that transform your living space with the aesthetic
                  sensibilities of Japan.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Stationery</h3>
                <p>
                  Writing and organizational tools inspired by Japan&apos;s
                  appreciation for functionality and beauty.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              We&apos;re constantly expanding our product line with new designs
              and items, so be sure to check back regularly or follow us on
              social media for updates!
            </p>
          </section>

          <div className="mt-12 text-center">
            <Link
              href="/all-products"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <section className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-700">
              <a
                href="mailto:nihongowithmoeno@gmail.com"
                className="hover:underline"
              >
                nihongowithmoeno@gmail.com
              </a>
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg
                className="w-8 h-8 text-pink-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Instagram</h3>
            <p className="text-gray-700">
              <a
                href="https://instagram.com/mui_inu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @mui_inu
              </a>
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Website</h3>
            <p className="text-gray-700">
              <a
                href="https://www.nihongowithmoeno.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                nihongowithmoeno.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Thank you for taking the time to learn about Nihongo with Moeno.
          We&apos;re excited to share our passion for Japanese culture with you
          through our products and stories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/all-products"
            className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Shop Now
          </Link>
          <a
            href="mailto:nihongowithmoeno@gmail.com"
            className="bg-white border border-gray-300 text-gray-700 py-3 px-8 rounded-md hover:bg-gray-50 transition-colors text-lg font-medium"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
