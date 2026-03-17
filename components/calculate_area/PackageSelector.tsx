"use client";

import Image from "next/image";

const packages = [
  {
    name: "Essentials (₹₹)",
    desc: "A range of essential home interior solutions that's perfect for all your needs.",
    image: "/packages/essential.jpg",
    features: ["Affordable pricing", "Convenient designs", "Basic accessories"],
  },
  {
    name: "Premium (₹₹₹)",
    desc: "Superior home interior solutions that will take your interiors to the next level.",
    image: "/packages/premium.jpg",
    features: ["Mid-range pricing", "Premium materials", "Enhanced finishes"],
  },
  {
    name: "Luxury (₹₹₹₹)",
    desc: "Top-tier luxury interiors with high-end materials, custom designs, and elite finishes.",
    image: "/packages/luxury.jpg",
    features: ["Luxury materials", "Custom designs", "Designer finishes"],
  },
];

export default function PackageSelector({
  next,
  back,
  selected,
  setSelected,
}: {
  next: () => void;
  back: () => void;
  selected: string | null;
  setSelected: (val: string | null) => void;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Top */}
      <div>
        {/* Progress */}
        <div className="flex items-center justify-between px-4 py-4">
          <span className="text-xs font-semibold tracking-widest text-gray-500">
            SHYAM INTERIORS
          </span>

          <div className="flex items-center gap-3 flex-1 mx-4">
            {[1, 2, 3, 4].map((s, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div
                  className={`h-4 w-4 rounded-full border-2 ${
                    s <= 3
                      ? "bg-purple-500 border-purple-500"
                      : "border-gray-300"
                  }`}
                />
                {i !== 3 && <div className="flex-1 h-[2px] bg-gray-300" />}
              </div>
            ))}
          </div>

          <span className="text-sm text-gray-500">3/4</span>
        </div>

        {/* Title */}
        <div className="px-5 py-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Pick your package
          </h2>
        </div>

        {/* Packages */}
        <div className="space-y-6 px-4 pb-10">
          {packages.map((pkg) => {
            const isActive = selected === pkg.name;

            return (
              <div
                key={pkg.name}
                onClick={() => setSelected(pkg.name)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "border-red-400 bg-white shadow-md"
                    : "border-gray-200 bg-gray-100"
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`h-5 w-5 rounded-full border-2 flex items-center justify-center
                    ${isActive ? "border-red-500" : "border-gray-400"}`}
                  >
                    {isActive && (
                      <div className="h-2.5 w-2.5 bg-red-500 rounded-full" />
                    )}
                  </div>

                  <span className="font-semibold text-gray-800">
                    {pkg.name}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-3">{pkg.desc}</p>

                {/* Image */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {pkg.features.map((f, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="text-green-500">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between px-5 py-4 bg-white border-t">
        <button onClick={back} className="text-red-400 font-semibold">
          BACK
        </button>

        <button
          onClick={next}
          disabled={!selected}
          className={`px-8 py-3 rounded-full font-semibold transition-all
          ${
            selected
              ? "bg-red-500 text-white"
              : "bg-red-200 text-white cursor-not-allowed"
          }`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
