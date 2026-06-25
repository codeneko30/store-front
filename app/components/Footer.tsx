

// const InstagramIcon = () => (
//   <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
//   </svg>
// );

// const FacebookIcon = () => (
//   <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.008 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.49 0-1.956.926-1.956 1.874v2.247h3.328l-.532 3.49h-2.796v8.437C19.612 23.08 24 18.091 24 12.073z" />
//   </svg>
// );

// const LinkedInIcon = () => (
//   <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.348V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.269 2.37 4.269 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
//   </svg>
// );


// export default function Footer() {
//   const sections = [
//     {
//       title: "Shop",
//       items: [
//         "Our Bouquets",
//         "Best Sellers",
//         "Roses & Classics",
//         "Add-ons & Gifts",
//       ],
//     },
//     {
//       title: "About",
//       items: [
//         "Our Story",
//         "Floral Journal",
//         "Sustainability",
//         "Careers",
//       ],
//     },
//     {
//       title: "Help",
//       items: [
//         "Delivery Information",
//         "Care Guide",
//         "FAQ",
//         "Contact Us",
//       ],
//     },
//     {
//       title: "Legal",
//       items: [
//         "Privacy Policy",
//         "Terms & Conditions",
//         "Freshness Guarantee",
//         "Cookie Preferences",
//       ],
//     },
//   ];

//   return (
//     <footer className="border-t border-gray-200 bg-white">

//       <div className="mx-auto max-w-7xl px-8 py-14">

//         {/* TOP */}
//         <div className="grid grid-cols-2 gap-y-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">

//           {/* BRAND */}
//           <div className="pr-8">

//             <div className="mb-4 flex items-center gap-2">

//               <div className="h-5 w-5 rounded bg-black" />

//               <h2 className="text-[12px] font-semibold tracking-[0.35em]">
//                 FLORISTA
//               </h2>

//             </div>

//             <p className="max-w-[180px] text-[11px] leading-5 text-gray-500">
//               Beautiful blooms, delivered fresh to your door.
//             </p>

//           </div>

//           {/* LINKS */}
//           {sections.map((section) => (
//             <div key={section.title}>

//               <h3 className="mb-5 text-[11px] font-semibold">
//                 {section.title}
//               </h3>

//               <ul className="space-y-4">

//                 {section.items.map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="text-[11px]   text-gray-700   hover:text-black">
                       
//                       {item}
//                     </a>
//                   </li>
//                 ))}

//               </ul>

//             </div>
//           ))}

//         </div>

//         {/* BOTTOM */}
       
//         <div
//           className="mt-10 h-4   border-gray-200 pt-6 flex flex-col gap-4  md:flex-row  md:items-center   md:justify-between bg-[#fafafa] ">
          

//           {/* LEFT */}
//           <div className="flex flex-wrap items-center gap-5 text-[10px] text-gray-500">

//             <span> © 2026 Florista. All rights reserved.</span>
             

//             <a  href="#"   className="hover:text-black">
//               Privacy & Disclaimer
//             </a>

//             <a  href="#" className="hover:text-black">
//               Cookie Policy
//             </a>

//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-4 text-gray-500">

//             <a href="#">
//               <InstagramIcon />
//             </a>

//             <a href="#">
//               <FacebookIcon />
//             </a>

//             <a href="#">
//               <LinkedInIcon />
//             </a>

//           </div>

//         </div>
//       </div>

//     </footer>
//   );
// }


















import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaPinterest,
    FaTwitter,
  } from "react-icons/fa";

const sections = [
  {
    title: "Shop",
    items: ["Our Bouquets", "Best Sellers", "Roses & Classics", "Add-ons & Gifts"],
  },
  {
    title: "About",
    items: ["Our Story", "Floral Journal", "Sustainability", "Careers"],
  },
  {
    title: "Help",
    items: ["Delivery Information", "Care Guide", "FAQ", "Contact Us"],
  },
  {
    title: "Legal",
    items: ["Privacy Policy", "Terms & Conditions", "Freshness Guarantee", "Cookie Preferences"],
  },
];

const socials = [
    { label: "Instagram", icon: <FaInstagram size={16} /> },
    { label: "Facebook", icon: <FaFacebook size={16} /> },
    { label: "LinkedIn", icon: <FaLinkedin size={16} /> },
    { label: "Pinterest", icon: <FaPinterest size={16} /> },
    { label: "Twitter", icon: <FaTwitter size={16} /> },
  ];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">

        {/* ── TOP — brand + link columns ── */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">

          {/* BRAND — full-width on mobile, first col on desktop */}
          <div className="col-span-2 pr-0 md:col-span-1 md:pr-8">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-black" />
              <h2 className="text-[11px] font-semibold tracking-[0.35em] text-black">
                FLORISTA
              </h2>
            </div>
            <p className="max-w-[180px] text-[11px] leading-5 text-gray-500">
              Beautiful blooms, delivered fresh to your door.
            </p>
          </div>

          {/* LINK COLUMNS */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-wider text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-500 transition-colors hover:text-black"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── BOTTOM ── */}
        <div className=" mt-10 h-4 border-gray-200 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-[#fafafa] ">

          {/* LEFT — copyright + links */}
          <div className="flex flex-wrap items-center gap-4 text-[10px] text-gray-500">
            <span>© 2026 Florista. All rights reserved.</span>
            <a href="#" className="   hidden md:block  transition-colors hover:text-black">Privacy &amp; Disclaimer</a>
            <a href="#" className=" hidden md:block   transition-colors hover:text-black">Cookie Policy</a>
          </div>

          {/* RIGHT — social icons */}
          <div className="flex items-center gap-4 text-gray-500">
            {socials.map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="transition-colors hover:text-black"
              >
                {icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}