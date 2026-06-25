

import {
  Search,
  Heart,
  ChevronDown,
  X,

} from 'lucide-react';
import Header from "~/components/Header";
import Footer from "~/components/Footer";

// --- Data ---
const occasions = [
  {
    title: "All",
    options: ["Bouquets", "Flowers", "Plants", "Dried", "Gifts"],
  },
  {
    title: "Type US",
    options: ["Chassis Bouquet", "Luxury Arrangement", "Subscription", "LIFESTYLE", "Dried Flowers"],
  },
  {
    title: "Color (4)",
    options: ["Pastel", "Vibrant", "White & Green", "Warm Tones"],
  },
  {
    title: "Price (€)",
    options: ["Under €25", "€25 - €45", "€45 - €50", "Over €50"],
  },
];

const favorites = [
  { id: 1, name: "Orange Blossom Peony", price: "€24.05" },
  { id: 2, name: "Blush Peony Mix", price: "€32.08" },
  { id: 3, name: "Ranunculus Bundle", price: "€21.85" },
  { id: 4, name: "Anemone & Thistle", price: "€28.05" },
  { id: 5, name: "Roseflower Petal", price: "€22.05" },
  { id: 6, name: "Lavender Dreams", price: "€19.85" },
  { id: 7, name: "Custom Rose Trio", price: "€44.05" },
  { id: 8, name: "Lavender Wreath", price: "€38.05" },
  { id: 9, name: "Wildflower Bunch", price: "€13.85" },
];

const activeFilters = ["Chassis Bouquet", "Luxury Arrangement", "Pastel", "€25 — €45"];

// --- Main Page ---

export default function FloristaShop() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* HEADER */}
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-[10px] uppercase tracking-wider text-gray-400 mb-8">
          <a href="#" className="hover:text-black">Home</a> / <a href="#" className="hover:text-black">Shop</a> / <span className="text-gray-600">Seasonal Favorites</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-12">
          {/* SIDEBAR */}
          <aside className="w-64 shrink-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-sm">Filters (5)</h2>
              <button className="text-xs text-gray-500 hover:text-black underline">Clear all</button>
            </div>

            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input
                type="text"
                placeholder="Search Filters"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 text-sm focus:outline-none focus:border-black"
              />
            </div>

            <div className="space-y-8">
              {occasions.map((item) => (
                <div key={item.title}>
                  <div className="flex justify-between items-center mb-3 group cursor-pointer">
                    <h3 className="text-xs font-bold uppercase tracking-tight">{item.title}</h3>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    {item.options.map((option, i) => (
                      <label key={i} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* CONTENT AREA */}
          <div className="flex-1">
            {/* Title Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-serif mb-2">Seasonal Favorites</h1>
              <p className="text-sm text-gray-500">Hand-picked arrangements for every occasion, fresh from our studios.</p>
            </div>

            
            {/* Filters Bar */}
            <div className="mb-8 flex flex-col gap-4">

              {/* Top Row */}
              <span className="text-xs text-gray-500">
                Showing 9 of 47
              </span>

              {/* Bottom Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                {/* Active Filters */}
                <div className="flex flex-wrap gap-2">
                  {activeFilters.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-1 bg-gray-100 text-[10px] px-3 py-1 rounded-full border border-gray-200"
                    >
                      {tag}
                      <X size={10} className="cursor-pointer" />
                    </div>
                  ))}
                </div>

                {/* Sort */}
                <div className="relative">
                  <button className="text-xs rounded border border-gray-200 px-4 py-2 flex items-center gap-2 hover:border-black transition-colors">
                    Sort: Featured <ChevronDown size={14} />
                  </button>
                </div>

              </div>
            </div>







            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {favorites.map((item) => (
                <div key={item.id} className="group relative flex flex-col">
                  <div className="relative aspect-[4/5] bg-[#F5F5F5] overflow-hidden">
                    {/* Image Placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </div>

                    {/* Wishlist Icon */}
                    <button className="absolute top-3 right-3 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Heart size={16} className="text-gray-600" />
                    </button>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button className="bg-white text-black px-4 py-2 text-xs font-bold shadow-sm hover:bg-gray-100">Quick View</button>
                      <button className="bg-black text-white px-4 py-2 text-xs font-bold shadow-sm hover:bg-gray-800">Add to Cart</button>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-start">
                    <h3 className="text-sm text-gray-800">{item.name}</h3>
                    <span className="text-sm font-medium">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
