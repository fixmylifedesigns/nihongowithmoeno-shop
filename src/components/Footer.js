// Updated Footer Component
import Link from "next/link";
import styles from "../app/page.module.css";
export default function Footer() {
  return (
    <footer
      className={styles.footer}
      // className="bg-primary-color p-4 text-center text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
          {/* Japanese Learning Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Japanese Learning
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.nihongowithmoeno.com/classes"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Online Classes
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.nihongowithmoeno.com/material"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.nihongowithmoeno.com/blog"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Japanese Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Moeno & Mui Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Moeno & Mui
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/nihongowithmoeno"
                  className="text-white hover:text-gray-300 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow @nihongowithmoeno
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/mui_inu"
                  className="text-white hover:text-gray-300 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow @mui_inu
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:nihongowithmoeno@gmail.com"
                  className="hover:underline"
                >
                  nihongowithmoeno@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              {/* <li>
                <Link href="/terms-of-service" className="text-white hover:text-gray-300 transition duration-300">
                  Terms of Service
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white mt-8 pt-8 text-sm text-center">
          <p>
            © {new Date().getFullYear()} Nihongo with Moeno. All rights
            reserved.
          </p>
          <p className="mt-2">
            Website made by{" "}
            <a
              href="https://www.minnastudy.com"
              className="text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              minnastudy.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
