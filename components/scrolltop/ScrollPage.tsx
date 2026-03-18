"use client";

import { useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ScrollTopButton() {
  const progressRef = useRef<SVGCircleElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const circle = progressRef.current;
    if (!circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    gsap.to(circle, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    ScrollTrigger.create({
      start: 300,
      onEnter: () => gsap.to(buttonRef.current, { autoAlpha: 1 }),
      onLeaveBack: () => gsap.to(buttonRef.current, { autoAlpha: 0 }),
    });
  }, []);

  const scrollTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1,
      ease: "power2.out",
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollTop}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 opacity-0 cursor-pointer"
    >
      <svg className="absolute w-14 h-14 -rotate-90" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="22"
          stroke="#e5e5e5"
          strokeWidth="4"
          fill="none"
        />

        <circle
          ref={progressRef}
          cx="25"
          cy="25"
          r="22"
          stroke="#000"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow">
        <ArrowUp size={18} className="text-black" />
      </div>
    </button>
  );
}
