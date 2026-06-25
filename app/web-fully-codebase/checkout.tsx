import { useState } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';


export default function Checkout(){

  const [billingSame, setBillingSame] = useState(true);
  const [delivery, setDelivery] = useState('standard');

  const orderItems = [
    { name: 'Orchid Phalaenopsis', meta: 'White · Single stem', qty: 1, price: '€34.95' },
    { name: 'Botanical Gift Wrap', meta: 'Kraft · Ribbon included', qty: 2, price: '€7.90' },
    { name: 'Rose Garden Vase', meta: 'Ceramic · Matte white', qty: 1, price: '€28.50' },
  ];

  const summary = [
    { label: 'Subtotal', value: '€71.35' },
    { label: 'Shipping', value: '€4.99' },
    { label: 'Tax (21% VAT)', value: '€16.03' },
  ];

  const deliveryOptions = [
    { id: 'standard', label: 'Standard Delivery (2–3 days)', price: '€4.99' },
    { id: 'sameday', label: 'Same-Day Delivery', price: '€9.99' },
    { id: 'morning', label: 'Morning Delivery (before 12pm)', price: '€14.99' },
  ];

  const inputClass =
    'w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400';
  const labelClass = 'block text-xs font-medium text-gray-600 mb-1.5';

  return (
    <div className="w-full bg-white min-h-screen">

        <Header/>



      <div className="max-w-6xl mx-auto px-5 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ===== Left: Form ===== */}
          <div className="lg:col-span-2 space-y-8">

            {/* Contact Information */}
            <section>
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Email address</label>
                  <input type="email" placeholder="emma.dupont@example.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone number</label>
                  <input type="tel" placeholder="+32 478 12 34 56" className={inputClass} />
                </div>
              </div>
            </section>

            {/* Shipping Information */}
            <section>
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Shipping Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>First name</label>
                    <input type="text" placeholder="Emma" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Last name</label>
                    <input type="text" placeholder="Dupont" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Country</label>
                  <div className="relative">
                    <select className={`${inputClass} appearance-none bg-white text-gray-500 pr-9`}>
                      <option>Select an item</option>
                      <option>Belgium</option>
                      <option>Netherlands</option>
                      <option>France</option>
                    </select>
                    <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Street address</label>
                  <input type="text" placeholder="Rue de la Loi 42" className={inputClass} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>City</label>
                    <input type="text" placeholder="Brussels" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Postal code</label>
                    <input type="text" placeholder="1000" className={inputClass} />
                  </div>
                </div>
              </div>
            </section>

            {/* Billing Address */}
            <section className="border-t border-gray-100 pt-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Billing Address</h2>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={billingSame}
                  onChange={() => setBillingSame(!billingSame)}
                  className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900/10 accent-gray-900"
                />
                <span className="text-sm text-gray-700">Same as shipping address</span>
              </label>
            </section>

            {/* Delivery Method */}
            <section className="border-t border-gray-100 pt-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Delivery Method</h2>
              <div className="space-y-1">
                {deliveryOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="delivery"
                      checked={delivery === opt.id}
                      onChange={() => setDelivery(opt.id)}
                      className="w-4 h-4 accent-gray-900"
                    />
                    <div>
                      <p className="text-sm text-gray-900">{opt.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{opt.price}</p>
                    </div>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* ===== Right: Order Summary ===== */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-5 lg:sticky lg:top-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Order Summary</h2>

              {/* Items */}
              <div className="space-y-3 pb-4 border-b border-gray-200">
                {orderItems.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.meta}</p>
                      <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                    </div>
                    <span className="text-xs font-medium text-gray-900">{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Summary rows */}
              <div className="space-y-2 py-4 border-b border-gray-200">
                {summary.map((row) => (
                  <div key={row.label} className="flex justify-between text-xs">
                    <span className="text-gray-500">{row.label}</span>
                    <span className="text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-4">
                <span className="text-sm font-semibold text-gray-900">Total</span>
                <span className="text-base font-bold text-gray-900">€92.37</span>
              </div>

              {/* Promo code */}
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Promo code..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 bg-white"
                />
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-100 transition bg-white">
                  Apply
                </button>
              </div>

              {/* Place Order */}
              <button className="w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

