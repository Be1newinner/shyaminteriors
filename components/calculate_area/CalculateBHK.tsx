"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Progress Bar */}
        <div className="flex items-center justify-between px-4 py-4">
          <span className="text-xs font-semibold tracking-widest text-gray-500">
            SHYAM INTERIORS
          </span>

          <div className="flex items-center gap-3 flex-1 mx-4">
            {[1, 2, 3, 4].map((s, i) => (
              <div key={i} className="flex-1 flex items-center gap-2">
                <div
                  className={`h-4 w-4 rounded-full border-2 ${
                    s === 1
                      ? "bg-purple-500 border-purple-500"
                      : "border-gray-300"
                  }`}
                />
                {i !== 3 && <div className="flex-1 h-[2px] bg-gray-300" />}
              </div>
            ))}
          </div>

          <span className="text-sm text-gray-500">1/4</span>
        </div>

        {/* Title */}
        <div className="px-5 py-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Select your BHK type
          </h2>
          <p className="text-sm text-gray-500">
            To know more about this,{" "}
            <span className="text-red-500 cursor-pointer">click here</span>
          </p>
        </div>

        {/* Options */}
        <div className="mt-3">
          {bhkOptions.map((item) => {
            const isActive = selected === item;

            return (
              <div
                key={item}
                onClick={() => setSelected(item)}
                className={`flex items-center justify-between px-5 py-5 border-b cursor-pointer transition-all duration-200
                ${
                  isActive ? "border-red-400 bg-white shadow-sm" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Radio */}
                  <div
                    className={`h-5 w-5 rounded-full border-2 flex items-center justify-center
                    ${isActive ? "border-red-500" : "border-gray-400"}`}
                  >
                    {isActive && (
                      <div className="h-2.5 w-2.5 bg-red-500 rounded-full" />
                    )}
                  </div>

                  <span className="text-gray-800 font-medium">{item}</span>
                </div>

                {item !== "1 BHK" && (
                  <ChevronDown className="text-gray-400" size={18} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex items-center justify-between px-5 py-4 bg-white border-t">
        <button
          className="text-gray-300 font-semibold cursor-not-allowed"
          disabled
        >
          BACK
        </button>

        <button
          onClick={next}
          className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
