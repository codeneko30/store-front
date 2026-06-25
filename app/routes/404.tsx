import { ImageIcon, ArrowLeft } from "lucide-react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const POPULAR_ITEMS = [
  {
    id: 1,
    title: "Best Sellers",
    subtitle: "Shop the favourites",
    image: ""
  },
  {
    id: 2,
    title: "Roses & Classics",
    subtitle: "Timeless arrangements",
    image: ""
  },
  {
    id: 3,
    title: "Same-Day Delivery",
    subtitle: "Order before 1 pm",
    image: ""
  }
];

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 sm:py-20 text-center">

        {/* 404 Heading */}
        <h1 className="text-[72px] sm:text-[120px] font-bold text-gray-200 leading-none mb-3 sm:mb-4 select-none">
          404
        </h1>

        {/* Error Message */}
        <div className="max-w-sm sm:max-w-xl mb-8 sm:mb-10 px-2">
          <h2 className="text-2xl sm:text-3xl font-medium mb-3 sm:mb-4 text-black">
            This page has wilted 🥀
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            We couldn't find the page you're looking for. It may have moved, sold out, or simply never bloomed.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-xs sm:max-w-md flex mb-6 sm:mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search bouquets, gifts..."
              className="w-full pl-4 pr-3 py-3 border border-gray-200 rounded-l-sm text-sm focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <button className="bg-black text-white px-4 sm:px-6 py-3 text-sm font-medium rounded-r-sm hover:bg-gray-800 transition-colors whitespace-nowrap">
            Search
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-16 sm:mb-24 w-full max-w-xs sm:max-w-none">
          <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-sm font-medium rounded-sm hover:bg-gray-800 transition-all">
            <ArrowLeft size={16} />
            Back to home
          </button>

          <button className="bg-white border border-gray-200 text-black px-6 py-3 text-sm font-medium rounded-sm hover:bg-gray-50 transition-all">
            Browse the shop
          </button>
        </div>

        {/* Popular Section */}
        <div className="w-full max-w-6xl">
          <h3 className="text-lg sm:text-xl font-medium mb-6 sm:mb-10 text-black">
            Popular right now
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12">
            {POPULAR_ITEMS.map((item) => (
              <div key={item.id} className="group cursor-pointer flex flex-col">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl mb-3 sm:mb-4 flex items-center justify-center text-gray-300 transition-transform duration-300 group-hover:scale-[1.02]">
                  <ImageIcon size={36} strokeWidth={1} className="sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-sm sm:text-base font-medium text-black mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}