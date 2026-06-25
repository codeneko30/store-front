import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
const [open, setOpen] = useState(false);

const navItems = [
"Home",
"Shop",
"Collections",
"About",
"Contact",
];

return ( <header className="w-full border-b border-gray-200 bg-white">


  {/* HEADER */}
  <div className="flex h-20 w-full items-center justify-between px-6">

    {/* LEFT */}
    <div className="flex items-center gap-6">

      {/* MOBILE HAMBURGER */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* LOGO */}
      <h1 className="text-2xl font-semibold tracking-wide">
        FLORISTA
      </h1>

    </div>

    {/* DESKTOP MENU */}
    <nav className="hidden md:flex items-center gap-10">

      {navItems.map((item) => (
        <a
          key={item}
          href="#"
          className="text-sm hover:text-gray-500 transition"
        >
          {item}
        </a>
      ))}

    </nav>

    {/* CTA */}
    <button className="hidden md:block border px-6 py-2 text-sm hover:bg-black hover:text-white transition">
      Shop Now
    </button>

  </div>

  {/* MOBILE MENU */}
  {open && (
    <div className="md:hidden border-t border-gray-200">

      <nav className="flex flex-col px-6 py-4">

        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="border-b border-gray-100 py-3 text-sm"
          >
            {item}
          </a>
        ))}

        <button className="mt-4 border py-3">
          Shop Now
        </button>

      </nav>

    </div>
  )}

</header>


);
}
