import { useState } from "react";
import {
Menu,
X,
Globe,
} from "lucide-react";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const [wishlistActive, setWishlistActive] =useState(false);


const navItems = [
"Ship to: US ($)",
"Home",
"Shop",
"Collections",
"About",
"Contact",
];

return ( 

<header className="w-full border-b border-gray-100 bg-white">


  {/* HEADER */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="flex items-center justify-between h-14">

      {/* LEFT */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden text-gray-700 hover:text-gray-900 transition"
      >
        {menuOpen
          ? <X size={20} />
          : <Menu size={20} />}
      </button>

      {/* LOGO */}
      <span className="text-sm font-bold tracking-[0.3em] text-gray-900 uppercase select-none">
        Florista
      </span>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* DESKTOP CTA */}
        <button className="hidden sm:block border border-gray-300 px-4 py-1.5  text-[10px]  uppercase tracking-wider  rounded-sm   hover:bg-black hover:text-white transition">
          Shop Now
        </button>

        {/* WISHLIST */}
        <button
          onClick={() =>
            setWishlistActive(
              !wishlistActive
            )
          }
          className="text-gray-700 hover:text-gray-900 transition"
        >

          {wishlistActive ? (

            <svg
              className="w-5 h-5 text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>

          ) : (

            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>

          )}

        </button>

      </div>

    </div>

  </div>

  {/* DESKTOP MENU */}
  <nav className="hidden sm:flex items-center justify-center gap-8 py-2 border-t border-gray-50">

    {navItems.map((item) => (

      <a
        key={item}
        href="#"
        className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 tracking-widest uppercase transition"
      >

        {item ===
          "Ship to: US ($)"
          && (
            <Globe
              size={12}
              strokeWidth={1.5}
            />
          )}

        {item}

      </a>

    ))}

  </nav>

  {/* MOBILE MENU */}
  {menuOpen && (

    <div className="sm:hidden border-t border-gray-100">

      <nav className="flex flex-col px-4 py-3">

        {navItems.map((item) => (

          <a
            key={item}
            href="#"
            className="flex items-center gap-2 py-2 text-sm text-gray-700 border-b border-gray-50 last:border-0"
          >

            {item ===
              "Ship to: US ($)"
              && (
                <Globe
                  size={14}
                  strokeWidth={1.5}
                />
              )}

            {item}

          </a>

        ))}

        {/* MOBILE CTA */}
        <button className="mt-4 border py-3 text-sm">
          Shop Now
        </button>

      </nav>

    </div>

  )}

</header>


);
}
