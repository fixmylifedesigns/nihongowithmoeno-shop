"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-8 pb-2 border-b">
          Privacy Policy
        </h1>
        <p className="text-gray-600 italic mb-6">
          (For Osaka-based Business with Global Print Providers)
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-2">
            This Privacy Policy explains how Nihongo with Moeno (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;) collects, uses, and protects your personal information when
            you visit and purchase from our website.
          </p>
          <p>
            By using our website, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p className="mb-2">
            We collect and store the following types of personal data when you
            interact with our store:
          </p>

          <h3 className="font-semibold mt-4 mb-2">2.1 Personal Information</h3>
          <ul className="list-disc pl-8 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Shipping and billing address</li>
            <li>Phone number (if provided)</li>
            <li>
              Payment details (processed securely by Stripe, we do not store
              credit card information)
            </li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">
            2.2 Automatically Collected Information
          </h3>
          <ul className="list-disc pl-8 space-y-1">
            <li>IP address</li>
            <li>Device type and browser</li>
            <li>Cookies and analytics data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            3. How We Use Your Information
          </h2>
          <p className="mb-2">We use your information to:</p>
          <ul className="list-disc pl-8 space-y-1">
            <li>Process and fulfill orders</li>
            <li>Provide customer support</li>
            <li>Improve our services and website experience</li>
            <li>Send promotional emails (only if you opt-in)</li>
            <li>Prevent fraud and security risks</li>
          </ul>
          <p className="mt-2">
            We do not sell or share your personal data with third parties for
            marketing purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            4. Sharing Your Information
          </h2>
          <p className="mb-2">We only share your data when necessary to:</p>
          <ul className="list-disc pl-8 space-y-1">
            <li>Fulfill your order (with printing and shipping providers)</li>
            <li>Process payments securely through Stripe</li>
            <li>
              Comply with legal obligations (if required by law enforcement)
            </li>
          </ul>
          <p className="mt-2">
            Your data may be transferred and stored outside of Japan depending
            on the location of our service providers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            5. Cookies & Tracking Technologies
          </h2>
          <p>
            We use cookies to enhance your browsing experience. You can disable
            cookies in your browser settings, but some website features may not
            function properly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            6. Data Protection & Security
          </h2>
          <p>
            We take reasonable measures to protect your personal data against
            unauthorized access, loss, or misuse. However, no online transaction
            is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            7. Your Rights (GDPR & CCPA Compliance)
          </h2>
          <p className="mb-2">
            If you are in the EU (GDPR) or California (CCPA), you have the right
            to:
          </p>
          <ul className="list-disc pl-8 space-y-1">
            <li>Access, correct, or delete your personal data</li>
            <li>Request that we do not sell or share your data</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at{" "}
            <Link
              href="mailto:nihongowithmoeno@gmail.com"
              className="text-blue-600 hover:underline"
            >
              nihongowithmoeno@gmail.com
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            8. Third-Party Services
          </h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              Payments are processed via Stripe, subject to their Privacy
              Policy.
            </li>
            <li>
              Orders are fulfilled by third-party print providers, who may have
              their own policies.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this policy periodically. Any changes will be posted
            on this page with a revised date.
          </p>
        </section>
      </div>

      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-8 pb-2 border-b">
          Terms & Conditions
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p>
            These Terms & Conditions govern the use of our website. By accessing
            or purchasing from our website, you agree to these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Orders & Payments</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>All prices are listed in JPY.</li>
            <li>Payments are securely processed through Stripe.</li>
            <li>
              Once an order is placed, it cannot be canceled after 24 hours as
              production begins immediately.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Shipping & Delivery</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>Processing time: 2-7 business days before shipping.</li>
            <li>
              Estimated shipping times vary by country (see our Shipping Policy
              for details).
            </li>
            <li>
              We are not responsible for customs fees, import taxes, or shipping
              delays caused by the carrier.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Returns & Refunds</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              No returns or exchanges unless the item is misprinted, damaged, or
              defective.
            </li>
            <li>
              Customers must report issues within 7 days of delivery with
              supporting photos.
            </li>
            <li>
              If approved, we will offer a free replacement or refund (refund
              method depends on the payment method used).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            5. Intellectual Property
          </h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              All content, logos, and product designs on our website are owned
              by Nihongo with Moeno or used with permission.
            </li>
            <li>
              You may not copy, reproduce, or distribute our content without
              written permission.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            6. Limitation of Liability
          </h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              We are not responsible for indirect damages, lost profits, or
              technical issues beyond our control.
            </li>
            <li>Products are provided &quot;as is&quot; without warranties.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Governing Law</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>These terms are governed by the laws of Japan.</li>
            <li>
              Any disputes shall be resolved in the courts of Osaka, Japan.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
          <p>
            We may update these terms at any time. Continued use of our website
            implies acceptance of the latest terms.
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
