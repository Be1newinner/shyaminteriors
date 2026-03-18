"use client";

import React, { useState, useEffect, useRef } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

const slides = [
  {
    before: "/images/hero_page/p1.webp",
    after: "/images/hero_page/p4.webp",
    title: "Living Room Transformation",
    description: "Modernizing a classic space with contemporary elements.",
  },
  {
    before: "/images/hero_page/p2.webp",
    after: "/images/hero_page/p3.webp",
    title: "Kitchen Remodel",
    description: "Functional and elegant kitchen suites for modern homes.",
  },
  {
    before: "/images/hero_page/p5.webp",
    after: "/images/hero_page/p6.webp",
    title: "Office Workspace",
    description: "Creating a productive and inspiring work environment.",
  },
  {
    before: "/images/hero_page/p1.webp",
    after: "/images/hero_page/p2.webp",
    title: "Bedroom Suite",
    description: "Serene and minimalist design for ultimate relaxation.",
  },
];

export default function BeforeAfterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slideToIndex = (index: number) => {
    setCurrentIndex(index);
    gsap.to(carouselRef.current, {
      xPercent: -index * 100,
      duration: 0.8,
      ease: "power3.inOut",
    });
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    slideToIndex(nextIndex);
  };

  const prev = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    slideToIndex(prevIndex);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-20">
      <div className="px-6 md:px-10 lg:px-20 mb-10 overflow-hidden text-left">
        <h2 className="text-sm md:text-base uppercase tracking-widest font-bold mb-4 font-glorify text-[#C9A84C]">
          Transformation
        </h2>
        <h2 className="text-4xl md:text-6xl font-medium font-glorify text-white uppercase">
          Before & After
        </h2>
      </div>

      <div className="relative group overflow-hidden h-[500px] sm:h-screen">
        {/* Slides Container */}
        <div ref={carouselRef} className="flex h-full w-full">
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full h-full relative">
              <BeforeAfterSlider
                beforeImage={slide.before}
                afterImage={slide.after}
              />
              
              {/* Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 py-20 px-6 md:px-20 bg-linear-to-t from-black/80 to-transparent pointer-events-none">
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 font-glorify">
                    {slide.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-lg font-sans">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-10 pointer-events-none">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white cursor-pointer pointer-events-auto hover:bg-red-500 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white cursor-pointer pointer-events-auto hover:bg-red-500 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => slideToIndex(i)}
              className={`h-1.5 transition-all rounded-full cursor-pointer ${
                currentIndex === i ? "w-10 bg-red-500" : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
