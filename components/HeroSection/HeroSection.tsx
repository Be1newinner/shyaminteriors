"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLHeadingElement>(null);

  const aboutImageRef = useRef<HTMLDivElement>(null);
  const aboutTitleRef = useRef<HTMLHeadingElement>(null);
  const aboutDescRef = useRef<HTMLParagraphElement>(null);
  const aboutLogoRef = useRef<HTMLImageElement>(null);
  const aboutStudioRef = useRef<HTMLParagraphElement>(null);

  const titleText = "INTERIOR DESIGNER";
  const paraText = "EXPERIENCED AND CREATIVE";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      const titleLetters = titleRef.current?.querySelectorAll(".letter");
      if (titleLetters && titleLetters.length > 0) {
        gsap.fromTo(
          titleLetters,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.05,
          },
        );
      }

      const paraLetters = paraRef.current?.querySelectorAll(".letter");
      if (paraLetters && paraLetters.length > 0) {
        gsap.fromTo(
          paraLetters,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.02,
          },
        );
      }

      // About section image reveal
      if (aboutImageRef.current) {
        gsap.fromTo(
          aboutImageRef.current,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutImageRef.current,
              start: "top 50%",
            },
          },
        );
      }

      // About title letters
      if (aboutTitleRef.current) {
        const letters = aboutTitleRef.current.querySelectorAll("span");
        gsap.fromTo(
          letters,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutTitleRef.current,
              start: "top 50%",
            },
          },
        );
      }

      // About description
      if (aboutDescRef.current) {
        gsap.fromTo(
          aboutDescRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutDescRef.current,
              start: "top 50%",
            },
          },
        );
      }

      // About logo
      if (aboutLogoRef.current) {
        gsap.fromTo(
          aboutLogoRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutLogoRef.current,
              start: "top 85%",
            },
          },
        );
      }

      // About studio text
      if (aboutStudioRef.current) {
        const letters = aboutStudioRef.current.querySelectorAll("span");
        gsap.fromTo(
          letters,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutStudioRef.current,
              start: "top 85%",
            },
          },
        );
      }
    });

    // Refresh scroll trigger after a small delay to handle layout shifts
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative">
      <div className="bg-dotted w-full">
        <div className="relative">
          {/* home image section */}
          <div className="relative">
            <div className="h-[70vh] w-full relative sm:h-screen">
              <Image
                className="object-cover -z-1"
                src="/HomeLanding/hero-bg.webp"
                alt="hero-section"
                fill
              />
            </div>

            {/* text part */}
            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-15 text-center">
              <p ref={paraRef} className="text-2xl font-semibold">
                {paraText.split("").map((char, i) => (
                  <span key={i} className="letter inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </p>
              <h1
                ref={titleRef}
                className="text-7xl font-bold sm:text-9xl overflow-hidden"
              >
                {titleText.split("").map((char, i) => (
                  <span key={i} className="letter inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </div>
        {/* profile image section */}

        <section className="flex flex-col gap-20 sm:flex-row sm:h-[120svh] relative sm:px-30 sm:pt-30 bg-[#1f1f1f] bg-dotted">
          {/* profile image part */}
          <div
            ref={aboutImageRef}
            className="w-full h-[60vh] relative sm:h-full sm:w-1/2"
          >
            <Image
              src="/HomeLanding/profile-img.jpeg"
              alt="hero-section"
              fill
            />
          </div>

          {/* profile about part */}
          <div className="flex flex-col gap-10 px-4 sm:w-1/2 sm:py-20">
            <h2 ref={aboutTitleRef} className="text-6xl">
              {"SHYAM INTERIORS".split("").map((letter, i) => (
                <span key={i} className="inline-block opacity-0">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h2>
            <p
              ref={aboutDescRef}
              className="font-sans text-xl text-left text-[#666666] sm:max-w-[80%]"
            >
              Everything happens for a reason to change so that you can learn to
              let go, things go wrong so that you appreciate them. When
              necessary we offer the best dental restorative materials and
              procedures. My technology allows you to see the results of your
              treatment, and us to see detail not available to the naked eye.
            </p>
            {/* interior studeio abuot */}
            <div className="flex flex-col gap-5  sm:gap-10">
              <Image
                ref={aboutLogoRef}
                src="/HomeLanding/interior-studio-about.webp"
                alt="interior-studio-about"
                width={150}
                height={150}
              />
              <p ref={aboutStudioRef} className="text-2xl">
                {"SHYAM INTERIOR STUDIO".split("").map((letter, i) => (
                  <span key={i} className="inline-block opacity-0">
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
