
import {
  Heart,
  
  Image as ImageIcon,
  Star,
  Box,
} from "lucide-react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function FloristaPage() {
  const occasions = [
      {
        title: "Birthday Blooms",
        count: "48 arrangements",
      },
  
      {
        title: "Anniversary",
        count: "36 arrangements",
      },
  
      {
        title: "Sympathy & Tribute",
        count: "24 arrangements",
      },
  
      {
        title: "Just Because",
        count: "52 arrangements",
      },
    ];
  
    const favorites = [
      {
        id: 1,
        name: "Garden Party",
        price: "€48.00",
      },
  
      {
        id: 2,
        name: "Blush Peony",
        price: "€56.00",
      },
  
      {
        id: 3,
        name: "Wildflower Bunch",
        price: "€39.00",
      },
  
      {
        id: 4,
        name: "Sunlit Ranunculus",
        price: "€52.00",
      },
    ];
  
    
  
  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <Header/>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">

        <div>

          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-gray-500">
            New • Spring Collection
          </p>

          <h2 className="mb-6 text-6xl leading-tight">
            Flowers that say
            <br />
            it better.
          </h2>

          <p className="mb-10 max-w-md text-gray-500">
            Hand-tied arrangements from local growers,
            delivered fresh to your door.
          </p>

          <div className="flex gap-4">

            <button className="bg-black px-8 py-3 text-sm text-white">
              Shop the collection
            </button>

            <button className="border px-8 py-3 text-sm">
              How it works
            </button>

          </div>

        </div>

        <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-gray-100 text-gray-300">

          <ImageIcon size={70} />

        </div>

      </section>

      {/* OCCASION */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h3 className="mb-2 text-3xl">
          Shop by occasion
        </h3>

        <p className="mb-12 text-sm text-gray-500">
          Find the right arrangement.
        </p>

        <div className="grid gap-8 md:grid-cols-4">

          {occasions.map((item) => (
            <div key={item.title}>

              <div className="mb-4 aspect-square rounded-lg bg-gray-100" />

              <h4 className="font-medium">
                {item.title}
              </h4>

              <p className="text-xs text-gray-400">
                {item.count}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* FAVORITES */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 flex items-end justify-between">

          <div>

            <h3 className="mb-2 text-3xl">
              This week's favorites
            </h3>

            <p className="text-sm text-gray-500">
              Fresh picks our florists love.
            </p>

          </div>

          <button className="text-sm underline">
            View all
          </button>

        </div>

        <div className="grid gap-6 md:grid-cols-4">

          {favorites.map((item) => (
            <div key={item.id}>

              <div className="mb-4 aspect-[4/5] rounded-lg bg-gray-100" />

              <div className="flex justify-between">

                <span>{item.name}</span>

                <span className="text-gray-500">
                  {item.price}
                </span>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* VALUE */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-3">

          {[
            [Heart, "Fresh, hand-tied daily"],
            [Box, "Free local delivery"],
            [Star, "Happiness guarantee"],
          ].map(([Icon, text]) => (
            <div key={text} className="text-center">

              <Icon className="mx-auto mb-5" />

              <p>{text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="px-6 py-20 text-center">

        <h3 className="mb-4 text-4xl">
          Get 10% off your first order
        </h3>

        <p className="mb-8 text-gray-500">
          Join Bloom Mail.
        </p>

        <div className="mx-auto flex max-w-md gap-2">

          <input
            placeholder="you@email.com"
            className="flex-1 border px-4 py-3"
          />

          <button className="bg-black px-8 text-white">
            Subscribe
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <Footer/>
    </div>
  );
}