"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* Top Section - Fixed Header */}
      <div className="flex-none bg-white z-10">
        {/* Progress Bar */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <span className="text-xs font-semibold tracking-widest text-gray-400">
            SHYAM INTERIORS
          </span>

          <div className="flex items-center gap-3 flex-1 mx-4">
            {[1, 2, 3, 4].map((s, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div
                  className={`h-2.5 w-2.5 rounded-full border ${
                    s <= 3
                      ? "bg-red-500 border-red-500"
                      : "bg-gray-200 border-gray-200"
                  }`}
                />
                {i !== 3 && <div className="flex-1 h-px bg-gray-100" />}
              </div>
            ))}
          </div>

          <span className="text-sm text-gray-400">3/4</span>
        </div>

        {/* Title */}
        <div className="px-5 py-3">
          <h2 className="text-lg font-bold text-gray-800">Pick your package</h2>
        </div>
      </div>

      {/* Middle Content - Scrollable Package List */}
      <div className="flex-1 overflow-y-auto bg-gray-50/50 pt-2">
        <div className="space-y-6 px-5 pb-10" ref={containerRef}>
          {packages.map((pkg) => {
            const isActive = selected === pkg.name;

            return (
              <div
                key={pkg.name}
                onClick={() => setSelected(pkg.name)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative overflow-hidden group
                ${
                  isActive
                    ? "border-red-500 bg-white shadow-xl translate-y-[-4px]"
                    : "border-gray-100 bg-white hover:border-red-200 hover:shadow-lg"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors
                      ${isActive ? "border-red-500" : "border-gray-300"}`}
                    >
                      {isActive && (
                        <div className="h-3 w-3 bg-red-500 rounded-full" />
                      )}
                    </div>
                    <span
                      className={`font-bold text-lg ${
                        isActive ? "text-red-500" : "text-gray-800"
                      }`}
                    >
                      {pkg.name}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {pkg.desc}
                </p>

                {/* Image */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-5">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Features */}
                <ul className="grid grid-cols-1 gap-3">
                  {pkg.features.map((f, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 flex items-center gap-3 font-medium text-left"
                    >
                      <div className="h-5 w-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <span className="text-green-600 text-[10px]">✔</span>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Buttons - Fixed Footer */}
      <div className="flex-none flex items-center justify-between px-6 py-4 bg-white border-t border-gray-100">
        <button
          onClick={back}
          className="text-red-500 font-bold text-sm tracking-wider hover:text-red-600 transition-colors cursor-pointer"
        >
          BACK
        </button>

        <button
          onClick={next}
          disabled={!selected}
          className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg
          ${
            selected
              ? "bg-red-500 text-white shadow-red-200 hover:bg-red-600 hover:scale-105 active:scale-95 cursor-pointer"
              : "bg-gray-200 text-white cursor-not-allowed shadow-none"
          }`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
