"use client";

import React, { useEffect, useRef } from "react";
import { Minus, Plus } from "lucide-react";
import gsap from "gsap";

const roomsList = ["Living Room", "Kitchen", "Bedroom", "Bathroom", "Dining"];

export default function RoomSelector({
  next,
  back,
  rooms,
  setRooms,
}: {
  next: () => void;
  back: () => void;
  rooms: Record<string, number>;
  setRooms: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    }
  }, []);

  const increase = (room: string) => {
    setRooms((prev) => ({ ...prev, [room]: prev[room] + 1 }));
  };

  const decrease = (room: string) => {
    setRooms((prev) => ({
      ...prev,
      [room]: prev[room] > 0 ? prev[room] - 1 : 0,
    }));
  };

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
                    s <= 2
                      ? "bg-red-500 border-red-500"
                      : "bg-gray-200 border-gray-200"
                  }`}
                />
                {i !== 3 && <div className="flex-1 h-px bg-gray-100" />}
              </div>
            ))}
          </div>

          <span className="text-sm text-gray-400">2/4</span>
        </div>

        {/* Title */}
        <div className="px-5 py-3">
          <h2 className="text-lg font-bold text-gray-800 leading-tight">
            Select the rooms you&apos;d like us to design
          </h2>
        </div>
      </div>

      {/* Middle Content - Scrollable Room List */}
      <div className="flex-1 overflow-y-auto bg-gray-50/50">
        <div className="mt-1 pb-4" ref={listRef}>
          {roomsList.map((room) => (
            <div
              key={room}
              className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700 font-semibold">{room}</span>

              <div className="flex items-center gap-5">
                <button
                  onClick={() => decrease(room)}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 hover:scale-105 active:scale-95 transition-all"
                >
                  <Minus size={18} />
                </button>

                <span className="font-bold text-gray-800 w-6 text-center text-lg">
                  {rooms[room]}
                </span>

                <button
                  onClick={() => increase(room)}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white shadow-md shadow-red-100 hover:bg-red-600 hover:scale-105 active:scale-95 transition-all"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          ))}
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
          className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-white px-10 py-3 rounded-full font-bold text-sm shadow-lg shadow-red-200 cursor-pointer"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
