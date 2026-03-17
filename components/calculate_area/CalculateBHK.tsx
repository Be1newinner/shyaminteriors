"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";


const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK+"];

export default function BhkSelector({
  next,
  selected,
  setSelected,
}: {
  next: () => void;
  selected: string;
  setSelected: (val: string) => void;
}) {
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (optionsRef.current) {
      gsap.fromTo(
        optionsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
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
              <div key={i} className="flex-1 flex items-center gap-2">
                <div
                  className={`h-2.5 w-2.5 rounded-full border ${
                    s === 1
                      ? "bg-red-500 border-red-500"
                      : "bg-gray-200 border-gray-200"
                  }`}
                />
                {i !== 3 && <div className="flex-1 h-px bg-gray-100" />}
              </div>
            ))}
          </div>

          <span className="text-sm text-gray-400">1/4</span>
        </div>

        {/* Title */}
        <div className="px-5 py-3">
          <h2 className="text-lg font-bold text-gray-800">
            Select your BHK type
          </h2>
        </div>
      </div>

      {/* Middle Content - Scrollable */}
      <div className="flex-1 overflow-y-auto bg-gray-50/50">
        <div className="mt-1" ref={optionsRef}>
          {bhkOptions.map((item) => {
            const isActive = selected === item;

            return (
              <div
                key={item}
                onClick={() => setSelected(item)}
                className={`flex items-center justify-between px-6 py-5 border-b border-gray-100 cursor-pointer transition-all duration-200
                ${
                  isActive
                    ? "bg-white shadow-[inset_4px_0_0_0_rgba(239,68,68,1)]"
                    : "hover:bg-gray-50 bg-transparent"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Radio */}
                  <div
                    className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors
                    ${isActive ? "border-red-500" : "border-gray-300"}`}
                  >
                    {isActive && (
                      <div className="h-2.5 w-2.5 bg-red-500 rounded-full" />
                    )}
                  </div>

                  <span
                    className={`font-semibold transition-colors ${
                      isActive ? "text-red-600" : "text-gray-700"
                    }`}
                  >
                    {item}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Buttons - Fixed Footer */}
      <div className="flex-none flex items-center justify-between px-6 py-4 bg-white border-t border-gray-100">
        <button
          className="text-gray-300 font-bold text-sm tracking-wider cursor-not-allowed"
          disabled
        >
          BACK
        </button>

        <button
          onClick={next}
          className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-white px-10 py-3 rounded-full font-bold text-sm shadow-lg shadow-red-200 cursor-pointer"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
