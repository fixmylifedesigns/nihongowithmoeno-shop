// src/app/layout.js
import localFont from "next/font/local";
import Script from "next/script";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import Cart from "@/components/Cart";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

// Define fonts - you may want to use a Japanese-friendly font

export const metadata = {
  metadataBase: new URL("https://shop.nihongowithmoeno.com"),
  title: {
    default: "Nihongo with Moeno Shop | Japanese-Inspired Merchandise",
    template: "%s | Nihongo with Moeno Shop",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  description:
    "Discover authentic Japanese-inspired merchandise, traditional designs, and unique products from Osaka. Shop exclusive clothing featuring Moeno and her dog Mui from Japan.",
  keywords: [
    // Japanese Culture Keywords
    "Japanese merchandise",
    "Japanese culture",
    "Japanese fashion",
    "traditional Japanese designs",
    "Japanese aesthetics",
    "Osaka",
    "Japan-inspired clothing",
    "Japanese lifestyle",
    "Japanese streetwear",
    "Japanese patterns",
    "kimono-inspired",
    "Japan art",

    // Language & Education Connection
    "Japanese language",
    "Japanese teacher",
    "nihongo",
    "Japan educator",
    "Japanese lessons",
    "Japan learning materials",

    // Merchandise Types
    "graphic tees",
    "Japanese apparel",
    "Japanese home decor",
    "Japanese accessories",
    "Japanese-inspired gifts",
    "Japanese stationery",
    "Japanese prints",
    "Japan posters",
    "collectibles",

    // Brand & Personalization
    "Nihongo with Moeno",
    "Nihongo with Moeno Shop",
    "Nihongo Moeno",
    "Moeno",
    "Mui",
    "Mui inu",
    "Mui",
    "Mui_inu",
    "Mui dog",
    "Osaka Japan",
    "Japanese dog merchandise",
    "dog-inspired designs",
    "pet merchandise",
    "Japanese language teacher",
    "Osaka souvenirs",
    "Japanese language blog",
    "Nihongo",
    "Meono",
  ],
  openGraph: {
    title: "Nihongo with Moeno Shop | Japanese-Inspired Merchandise",
    description:
      "Discover authentic Japanese-inspired merchandise, traditional designs, and unique products featuring Moeno and her dog Mui from Osaka, Japan.",
    url: "https://shop.nihongowithmoeno.com",
    siteName: "Nihongo with Moeno Shop",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://shop.nihongowithmoeno.com/og-image.jpg", // Update with actual image
        width: 1200,
        height: 630,
        alt: "Nihongo with Moeno Shop - Japanese-Inspired Merchandise",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihongo with Moeno Shop | Japanese-Inspired Merchandise",
    description:
      "Explore authentic Japanese-inspired clothing, traditional designs, and unique products from Osaka featuring Moeno and her dog Mui.",
    images: ["https://shop.nihongowithmoeno.com/og-image.jpg"], // Update with actual image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
        <CartProvider>
          <Header />
          <Cart />
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
