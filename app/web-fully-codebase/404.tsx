


import { ImageIcon, ArrowLeft } from "lucide-react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

// --- Mock Data ---
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

// --- Main Component ---

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
        <Header/>
      
      {/* Main 404 Error Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-20 text-center">
        
        {/* 404 Heading */}
        <h1 className="text-[120px] font-bold text-gray-200 leading-none mb-4 select-none">
          404
        </h1>

        {/* Error Message */}
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl font-medium mb-4 text-black">
            This page has wilted 🥀
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            We couldn't find the page you're looking for. It may have moved, sold out, or simply never bloomed.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-md flex mb-8">
          <div className="relative flex-grow group">
            <input
              type="text"
              placeholder="Search bouquets, gifts, occasions..."
              className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-l-sm text-sm focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <button className="bg-black text-white px-6 py-3 text-sm font-medium rounded-r-sm hover:bg-gray-800 transition-colors">
            Search
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 text-sm font-medium rounded-sm hover:bg-gray-800 transition-all">
            <ArrowLeft size={16} />
            Back to home
          </button>

          <button className="bg-white border border-gray-200 text-black px-6 py-3 text-sm font-medium rounded-sm hover:bg-gray-50 transition-all">
            Browse the shop
          </button>
        </div>

        {/* Popular Section */}
        <div className="w-full max-w-6xl">
          <h3 className="text-xl font-medium mb-10 text-black">
            Popular right now
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {POPULAR_ITEMS.map((item) => (
              <div key={item.id} className="group cursor-pointer flex flex-col">
                
                <div className="aspect-[4/3] bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-300 transition-transform duration-300 group-hover:scale-[1.02]">
                  <ImageIcon size={40} strokeWidth={1} />
                </div>

                <h3 className="text-base font-medium text-black mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.subtitle}
                </p>

              </div>
            ))}
          </div>
        </div>
      

      </main>
      <Footer/>
    </div>
  );
}