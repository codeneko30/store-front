import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const leftColumn = [
  {
    q: "What products do you offer?",
    a: "We offer a wide range of products including categories like clothing, electronics, home goods, and beauty products.",
  },
  {
    q: "How do I place an order?",
    a: "Browse our collections and add products to your cart, then proceed to checkout and complete payment.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes, we ship to over 100 countries worldwide with calculated rates at checkout.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you'll receive a tracking link via email.",
  },
];

const rightColumn = [
  {
    q: "What is your return policy?",
    a: "Our return policy allows returns within 30 days of delivery.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "You can change or cancel your order within 1 hour of placing it.",
  },
  {
    q: "Do you offer discounts or promotions?",
    a: "Yes! Sign up for our newsletter to receive exclusive discounts.",
  },
  {
    q: "How do I create an account?",
    a: 'Click the account icon in the top right and select "Sign up".',
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left"
      >
        <span
          className={`text-sm sm:text-base font-medium text-gray-900 ${
            isOpen ? "underline underline-offset-4" : ""
          }`}
        >
          {item.q}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 sm:px-5 pb-4 text-sm leading-relaxed text-gray-500">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState({ left: 1, right: 0 });

  const toggle = (col, index) => {
    setOpenItems((prev) => ({
      ...prev,
      [col]: prev[col] === index ? null : index,
    }));
  };

  return (
    <div className="w-full bg-white">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-5 py-10 sm:py-16">

        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center px-2">
          <span className="mb-4 inline-block rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
            FAQs
          </span>
          <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Answers to Your Most Common Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Find Clear Answers to Your Most Frequently Asked Questions
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 lg:grid-cols-2">

          {/* LEFT */}
          <div className="space-y-3 sm:space-y-4">
            {leftColumn.map((item, idx) => (
              <AccordionItem
                key={idx}
                item={item}
                isOpen={openItems.left === idx}
                onToggle={() => toggle("left", idx)}
              />
            ))}
          </div>

          {/* RIGHT */}
          <div className="space-y-3 sm:space-y-4">
            {rightColumn.map((item, idx) => (
              <AccordionItem
                key={idx}
                item={item}
                isOpen={openItems.right === idx}
                onToggle={() => toggle("right", idx)}
              />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}