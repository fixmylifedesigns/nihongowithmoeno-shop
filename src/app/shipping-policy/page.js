"use client";

import Link from "next/link";

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-8 pb-2 border-b">
          Shipping & Return Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Processing Time</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              All orders are <strong>made to order</strong> and processed within{" "}
              <strong>2-7 business days</strong> (excluding weekends and
              holidays).
            </li>
            <li>
              Once processed, your order will be shipped, and you will receive
              tracking details via email.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Estimated Shipping Times
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>USA:</strong> 3-7 business days
            </li>
            <li>
              <strong>Canada:</strong> 7-15 business days
            </li>
            <li>
              <strong>Europe:</strong> 7-15 business days
            </li>
            <li>
              <strong>Australia & New Zealand:</strong> 10-20 business days
            </li>
            <li>
              <strong>Rest of the World:</strong> 10-30 business days
            </li>
          </ul>
          <p className="mt-4 text-gray-600 italic">
            These are estimated times and may vary depending on customs,
            shipping carriers, and location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Shipping Rates</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Shipping costs are calculated at checkout based on destination and
              product weight.
            </li>
            <li>
              Some items may be shipped separately due to different fulfillment
              locations.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Customs & Import Taxes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              International orders may be subject to customs fees or import
              taxes.
            </li>
            <li>
              Customers are responsible for any additional charges imposed by
              their country&apos;s customs.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Returns & Refunds</h2>
          <div className="mb-4">
            <p className="font-semibold flex items-center">
              <span className="text-red-500 mr-2">❌</span>{" "}
              <strong>No Returns or Exchanges (Except for Defects)</strong>
            </p>
            <p className="ml-6">
              Since all products are made-to-order,{" "}
              <strong>
                we do not accept returns or exchanges unless the item is
                defective, misprinted, or damaged
              </strong>
              .
            </p>
          </div>
          <div className="mb-4">
            <p className="font-semibold flex items-center">
              <span className="text-green-500 mr-2">✅</span>{" "}
              <strong>Damaged, Defective, or Misprinted Items</strong>
            </p>
            <p className="ml-6">
              If your order arrives damaged, defective, or with a misprint,
              please contact us within <strong>7 days of delivery</strong> with:
            </p>
            <ul className="list-disc pl-10 space-y-1 mt-2">
              <li>Your order number</li>
              <li>A clear photo of the issue</li>
            </ul>
            <p className="ml-6 mt-2">
              We will review the request and{" "}
              <strong>offer a free replacement or refund</strong> if approved.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Lost or Undelivered Packages
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              If your package is lost in transit, please contact us, and we will
              assist you in filing a claim with the carrier.
            </li>
            <li>
              We are <strong>not responsible</strong> for incorrect shipping
              addresses provided at checkout. If an order is returned due to an
              incorrect address, the customer is responsible for reshipping
              costs.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Order Cancellations & Modifications
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Orders can only be modified or canceled within{" "}
              <strong>24 hours of placement</strong>. After this, the order goes
              into production and cannot be changed.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p>
            For any issues, please reach out to us at{" "}
            <Link
              href="mailto:nihongowithmoeno@gmail.com"
              className="text-blue-600 hover:underline"
            >
              <strong>nihongowithmoeno@gmail.com</strong>
            </Link>
            .
          </p>
        </section>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-8 pb-2 border-b">
          Privacy Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Personal details (name, email, shipping address, phone number)
              when you place an order.
            </li>
            <li>
              Payment details (processed securely via third-party payment
              gateways).
            </li>
            <li>
              Cookies and analytics data to improve our website and services.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To process and fulfill your orders.</li>
            <li>To communicate order updates and promotional offers.</li>
            <li>To improve our website and customer experience.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            3. Sharing of Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              We only share information with{" "}
              <strong>trusted third parties</strong>, such as payment
              processors, print-on-demand suppliers, and shipping carriers, to
              fulfill orders.
            </li>
            <li>
              We do <strong>not</strong> sell or rent your personal information
              to third parties.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              We take reasonable measures to protect your information from
              unauthorized access and misuse.
            </li>
            <li>
              All payment transactions are processed through secure gateways
              (e.g., Stripe, PayPal) and are{" "}
              <strong>not stored on our servers</strong>.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You can request to access, update, or delete your personal
              information by contacting us.
            </li>
            <li>You can opt out of marketing emails at any time.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            6. Changes to This Policy
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              We may update this policy from time to time. Any changes will be
              posted on this page.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Contact Information</h2>
          <p>
            For privacy-related inquiries, please contact us at{" "}
            <Link
              href="mailto:nihongowithmoeno@gmail.com"
              className="text-blue-600 hover:underline"
            >
              nihongowithmoeno@gmail.com
            </Link>
            .
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t text-center">
        <p className="text-gray-600">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="mt-4">
          <Link href="/" className="text-blue-600 hover:underline">
            &larr; Return to Shop
          </Link>
        </p>
      </div>
    </div>
  );
}
