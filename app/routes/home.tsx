import { useState } from "react";
import { Heart, Image as ImageIcon, Star, Package } from "lucide-react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const occasions = [
  { title: "Birthday Blooms", count: "48 arrangements" },
  { title: "Anniversary", count: "36 arrangements" },
  { title: "Sympathy & Tribute", count: "24 arrangements" },
  { title: "Just Because", count: "52 arrangements" },
];

const favorites = [
  { id: 1, name: "Garden Party", price: "€48.00" },
  { id: 2, name: "Blush Peony", price: "€56.00" },
  { id: 3, name: "Wildflower Bunch", price: "€39.00" },
  { id: 4, name: "Sunlit Ranunculus", price: "€52.00" },
];

const values = [
  { Icon: Heart, text: "Fresh, hand-tied daily", desc: "Every stem is cut the morning it ships, never sooner." },
  { Icon: Package, text: "Free local delivery", desc: "Same-day delivery on orders placed before 1 pm." },
  { Icon: Star, text: "Happiness guarantee", desc: "Not thrilled? We'll remake or refund — no questions." },
];

function WishlistButton() {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={() => setActive(!active)}
      aria-label="Add to wishlist"
      className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition hover:text-gray-900"
    >
      <Heart
        size={15}
        strokeWidth={1.6}
        fill={active ? "currentColor" : "none"}
        className={active ? "text-gray-900" : ""}
      />
    </button>
  );
}

export default function FloristaPage() {
  return (
    <div className="min-h-screen bg-white">

      <Header />

      {/* ── HERO ── */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-10 md:px-6 md:py-20 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gray-500">
            New · Spring Collection
          </p>

          <h1 className="mb-5 text-4xl font-normal leading-tight md:text-6xl">
            Flowers that say
            <br />
            it better.
          </h1>

          <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-500 md:text-base">
            Hand-tied arrangements from local growers, delivered fresh to your door.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button className="w-full bg-black px-8 py-3.5 text-sm text-white transition hover:bg-gray-800 sm:w-auto">
              Shop the collection
            </button>
            <button className="w-full border border-gray-300 px-8 py-3.5 text-sm transition hover:bg-gray-50 sm:w-auto">
              How it works
            </button>
          </div>

          {/* Mobile hero image (below buttons, hidden on lg) */}
          <div className="mt-6 flex aspect-[4/3] items-center justify-center rounded-xl bg-gray-100 text-gray-300 lg:hidden">
            <ImageIcon size={40} />
          </div>
        </div>

        {/* Desktop hero image (hidden on mobile) */}
        <div className="hidden aspect-[4/5] items-center justify-center rounded-2xl bg-gray-100 text-gray-300 lg:flex">
          <ImageIcon size={70} />
        </div>
      </section>

      {/* ── SHOP BY OCCASION ── */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-20">
        <h2 className="mb-2 text-2xl font-normal md:text-3xl">Shop by occasion</h2>
        <p className="mb-10 text-sm text-gray-500">Find the right arrangement.</p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {occasions.map((item) => (
            <div key={item.title} className="cursor-pointer group">
              <div className="mb-3 aspect-square rounded-lg bg-gray-100 transition group-hover:bg-gray-200 flex items-center justify-center text-gray-300">
                <ImageIcon size={28} />
              </div>
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="mt-0.5 text-xs text-gray-400">{item.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THIS WEEK'S FAVORITES ── */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="mb-1 text-2xl font-normal md:text-3xl">This week's favorites</h2>
            <p className="text-sm text-gray-500">Fresh picks our florists love.</p>
          </div>
          <button className="text-sm underline">View all</button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {favorites.map((item) => (
            <div key={item.id} className="cursor-pointer group">
              <div className="relative mb-3 aspect-[4/5] rounded-lg bg-gray-100 flex items-center justify-center text-gray-300 transition group-hover:bg-gray-200">
                <ImageIcon size={24} />

                <WishlistButton />
               

              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-sm text-gray-500">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="bg-gray-50 py-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 text-center md:grid-cols-3 md:gap-14 md:px-6">
          {values.map(({ Icon, text, desc }) => (
            <div key={text}>
              <Icon className="mx-auto mb-4 text-gray-900" size={22} />
              <p className="mb-2 text-sm font-medium">{text}</p>
              <p className="mx-auto max-w-xs text-xs leading-relaxed text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="px-5 py-10 text-center md:py-20">
        <h2 className="mb-3 text-2xl font-normal md:text-4xl">
          Get 10% off your first order
        </h2>
        <p className="mb-8 text-sm text-gray-500">Join Bloom Mail.</p>

        <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:gap-2">
          <input
            type="email"
            placeholder="you@email.com"
            className="flex-1 border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
          />
          <button className="bg-black px-8 py-3 text-sm text-white transition hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}