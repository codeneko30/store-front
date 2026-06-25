import React from 'react';

export default function Footer(){




  const columns = [
    {
      title: 'Shop',
      links: ['Our Bouquets', 'Best Sellers', 'Roses & Classics', 'Add-ons & Gifts'],
    },
    {
      title: 'About',
      links: ['Our Story', 'Floral Journal', 'Sustainability', 'Careers'],
    },
    {
      title: 'Help',
      links: ['Delivery Information', 'Care Guide', 'FAQ', 'Contact Us'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms & Conditions', 'Freshness Guarantee', 'Cookie Preferences'],
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-8">
        {/* Brand + Tagline */}
        <div className="mb-8 max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🌷</span>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-900">
              FLORISTA
            </h2>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Beautiful blooms, delivered fresh to your door.
          </p>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold text-gray-900 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900 transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2026 Florista. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-400">
            {/* Twitter / X */}
            <a href="#" aria-label="Twitter" className="hover:text-gray-900 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-gray-900 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={2} />
                <circle cx="12" cy="12" r="4" strokeWidth={2} />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" aria-label="Pinterest" className="hover:text-gray-900 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.08 2.45 7.59 5.96 9.13-.08-.78-.16-1.97.03-2.82.17-.74 1.1-4.69 1.1-4.69s-.28-.56-.28-1.39c0-1.3.76-2.27 1.7-2.27.8 0 1.19.6 1.19 1.32 0 .81-.51 2.01-.78 3.13-.22.94.47 1.7 1.4 1.7 1.68 0 2.97-1.77 2.97-4.33 0-2.26-1.63-3.85-3.96-3.85-2.69 0-4.27 2.02-4.27 4.11 0 .81.31 1.69.7 2.16.08.09.09.18.07.27-.08.31-.25.94-.28 1.07-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.47 0 6.16 2.47 6.16 5.77 0 3.45-2.17 6.22-5.19 6.22-1.01 0-1.97-.53-2.29-1.15l-.62 2.38c-.23.86-.83 1.94-1.24 2.6.94.29 1.92.44 2.95.44 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

