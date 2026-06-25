import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { ImageIcon, FileText, Edit3 } from "lucide-react";

// --- Mock Data ---
const ORDER_DATA = {
  orderNumber: "785773274",
  totalPages: 1,
  currentPage: 1,
  pointsEarned: 165,
  product: {
    name: "Pixie",
    description: "Mystic Melody with Birthday Candles",
    image: ""
  },
  message: {
    text: `Dearest mom,

Wishing you a super happy birthday, we wish you another beautiful new year of life. We are thinking of you from Mexico!

We love you!`
  }
};

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className="flex-grow pt-6 pb-10">

        {/* SUCCESS HEADER */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">

            <h1 className="text-4xl font-serif font-medium text-black">
              Thank you for your order!
            </h1>

            <p className="text-sm text-gray-500 leading-relaxed">
              This is your confirmation. We have sent you an email with the details of your order.
              (Can't find it? Check your spam folder.)
            </p>

            <div className="pt-4">
              <button className="bg-black text-white px-8 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Earn {ORDER_DATA.pointsEarned} points
              </button>
            </div>

            <p className="text-xs text-gray-400">
              Your points will show as 'pending' until your order is on its way.
            </p>

          </div>
        </section>

        <div className="w-full border-t border-gray-100" />

        {/* ORDER DETAILS */}
        <section className="max-w-5xl mx-auto px-4 pb-24">

          <div className="flex justify-between items-center text-xs text-gray-500 mb-12 mt-6">
            <span>
              Order number:{" "}
              <span className="text-black font-medium">
                {ORDER_DATA.orderNumber}
              </span>
            </span>

            <span>
              {ORDER_DATA.currentPage} of {ORDER_DATA.totalPages}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-16">

            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-300">
              <ImageIcon size={48} strokeWidth={1} />
            </div>

            <div className="flex flex-col">

              <div className="mb-10">
                <h2 className="text-xl font-medium text-black mb-1">
                  {ORDER_DATA.product.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {ORDER_DATA.product.description}
                </p>
              </div>

              <div className="space-y-4">

                <h3 className="text-sm font-bold uppercase tracking-wider text-black">
                  Message
                </h3>

                <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {ORDER_DATA.message.text}
                </div>

              </div>

              <div className="flex gap-4 mt-12">

                <button className="flex items-center gap-2 border border-gray-200 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  <FileText size={16} />
                  Get invoice
                </button>

                <button className="flex items-center gap-2 border border-gray-200 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  <Edit3 size={16} />
                  Edit order
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}