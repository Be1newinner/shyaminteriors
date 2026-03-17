"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const startPosRef = useRef<number>(50);

  const handleStart = (clientX: number) => {
    setIsResizing(true);
    startXRef.current = clientX;
    startPosRef.current = sliderPosition;
  };

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isResizing || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const deltaX = clientX - startXRef.current;
      const deltaPercent = (deltaX / rect.width) * 100;
      
      let newPosition = startPosRef.current + deltaPercent;

      if (newPosition < 0) newPosition = 0;
      if (newPosition > 100) newPosition = 100;

      setSliderPosition(newPosition);
    },
    [isResizing]
  );

  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const handleTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    const handleUp = () => setIsResizing(false);
    document.addEventListener("mouseup", handleUp);
    document.addEventListener("touchend", handleUp);
    return () => {
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("touchend", handleUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none touch-pan-y ${
        isResizing ? "cursor-grabbing" : "cursor-ew-resize"
      }`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseMove={isResizing ? handleMouseMove : undefined}
      onTouchMove={isResizing ? handleTouchMove : undefined}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={afterImage}
          alt="After"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20">
          After
        </div>
      </div>

      {/* Before Image (Foreground with Clip) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Before"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-4 bg-red-500/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-red-400/20">
          Before
        </div>
      </div>

      {/* Slider Line/Handle */}
      <div
        className="absolute inset-y-0 w-1 bg-white z-10 pointer-events-none"
        style={{ 
          left: `${sliderPosition}%`,
          transform: `translateX(-50%)` 
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] border-4 border-white">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-gray-400 rounded-full" />
            <div className="w-1 h-3 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
