


import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { ImageIcon, Minus, X, Plus, Info } from "lucide-react";

export default function ShoppingCart() {
  const cartItems = [
    {
      id: 1,
      title: "Oriental Lily Bouquet",
      details: "Style: Classic   Size: Large",
      price: "$45.00"
    },
    {
      id: 2,
      title: "Botanical Candle – Fig & Cedar",
      details: "Scent: Fig & Cedar   Size: 220g",
      price: "$24.00"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">

      <Header />

      <main className="flex-grow pt-6 pb-10">

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] p-4 sm:p-6">

          {/* Cart */}
          <div className="rounded-lg border border-gray-200 p-4 sm:p-5">

            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Your bag
              </h2>
              <span className="rounded border border-gray-300 px-2 py-0.5 text-xs text-gray-600">
                2 items
              </span>
            </div>

            <div className="border-t border-gray-200">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 sm:gap-4 border-b border-gray-200 py-4 sm:py-5"
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded bg-gray-100">
                    <ImageIcon size={16} className="text-gray-400 sm:w-[18px] sm:h-[18px]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                      {item.details}
                    </p>
                    <div className="mt-3 inline-flex items-center rounded border border-gray-200">
                      <button className="px-2 py-1 text-gray-500 hover:bg-gray-50">
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-sm">1</span>
                      <button className="px-2 py-1 text-gray-500 hover:bg-gray-50">
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button className="text-gray-400 hover:text-gray-600">
                      <X size={14} />
                    </button>
                    <div className="font-medium text-sm sm:text-base">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div className="space-y-3 border-b border-gray-200 py-4 sm:py-5 text-xs sm:text-sm text-gray-600">
              {[
                "Fresh flowers are prepared on the day of delivery. See our freshness guarantee for details.",
                "Orders shipped outside the Netherlands may require additional handling time for freshness.",
                "If your order includes both flowers and gifts, they may arrive in separate deliveries."
              ].map((note, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Info size={13} className="mt-0.5 shrink-0" />
                  <p>{note}</p>
                </div>
              ))}
            </div>

            {/* Help */}
            <div className="pt-4 sm:pt-5 text-sm">
              <p className="font-medium text-gray-900">Need help?</p>
              <div className="mt-2 flex gap-6">
                <a href="#" className="text-gray-700 hover:text-black">Read our FAQs</a>
                <a href="#" className="text-gray-700 hover:text-black">Contact us</a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="h-fit rounded-lg border border-gray-200 p-4 sm:p-5">
            <h2 className="mb-5 sm:mb-6 text-xl sm:text-2xl font-semibold text-gray-900">
              Summary
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>$69.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-right text-gray-500">
                  Calculated<br />at checkout
                </span>
              </div>
            </div>

            <div className="my-5 border-t border-gray-200" />

            <div className="mb-5 flex justify-between font-semibold">
              <span>Total</span>
              <span>$69.00</span>
            </div>

            <button className="w-full rounded-md bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-900">
              Checkout
            </button>
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}