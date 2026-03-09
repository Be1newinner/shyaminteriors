"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function WorkTogether() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  //button animation
  const btnBg = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    gsap.to(btnBg.current, {
      scaleX: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(btnBg.current, {
      scaleX: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  //text animation

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current || !containerRef.current) return;

    const letters = textRef.current.querySelectorAll("span");
    if (letters.length > 0) {
      gsap.to(letters, {
        color: "#ffffff",
        stagger: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 100%",
          scrub: true,
        },
      });
    }
  }, []);

  const renderLetters = (phrase: string) => {
    return phrase.split("").map((char, index) => (
      <span key={index} className="transition-colors duration-300">
        {char}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className=" py-20 px-4 flex flex-col gap-10 sm:px-30 sm:h-screen sm:justify-center"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-center sm:items-center">
        <h2 className="text-5xl sm:text-9xl text-white/20" ref={textRef}>
          {renderLetters("LET'S")} <br />
          {renderLetters("WORK")} <br />
          {renderLetters("TOGETHER")}
        </h2>
        <p className="font-sans text-xl font-semibold text-[#999] text-left max-w-[85%] sm:font-normal sm:max-w-[20%]">
          Inspired by my work? I would be delighted to help you create your
          dream interior!
        </p>
        <Link
          href="/contact"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="relative overflow-hidden font-sans text-xl bg-white font-semibold text-black py-5 flex items-center justify-center rounded-4xl max-w-55 sm:h-15 sm:px-10 sm:py-10"
        >
          {/* pink animated layer */}
          <span
            ref={btnBg}
            className="absolute inset-0 bg-[#e8bf96]"
            style={{
              transform: "scaleX(0)",
              transformOrigin: "center",
            }}
          />

          {/* button text */}
          <span className="relative z-10">CONTACT ME</span>
        </Link>
      </div>
    </section>
  );
}

export default WorkTogether;
