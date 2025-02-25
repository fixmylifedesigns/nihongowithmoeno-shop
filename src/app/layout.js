// src/app/layout.js
import localFont from "next/font/local";
import Script from "next/script";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import Cart from "@/components/Cart";
import styles from "./page.module.css";

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
    "Moeno",
    "Mui",
    "Mui dog",
    "Osaka Japan",
    "Japanese dog merchandise",
    "dog-inspired designs",
    "pet merchandise",
    "Japanese language teacher",
    "Osaka souvenirs",
    "Japanese language blog",
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
        <footer className={styles.footer}>
          <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-center md:text-left">
                &copy; {new Date().getFullYear()}{" "}
                <a
                  href="https://www.nihongowithmoeno.com"
                  className="text-blue-600 hover:underline"
                >
                  Nihongo with Moeno
                </a>
              </p>
              <p className="text-sm text-gray-600 mt-1 text-center md:text-left">
                Authentic Japanese-inspired merchandise from Osaka, Japan
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-6">
              <a
                href="https://instagram.com/mui_inu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                Follow @mui_inu
              </a>
              <a
                href="https://www.nihongowithmoeno.com/contact"
                className="text-gray-600 hover:text-blue-600"
              >
                Contact
              </a>
              <a
                href="/shipping-policy"
                className="text-gray-600 hover:text-blue-600"
              >
                Shipping
              </a>
              <a
                href="/privacy-policy"
                className="text-gray-600 hover:text-blue-600"
              >
                Privacy
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
