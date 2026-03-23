"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const studioNameRef = useRef<HTMLParagraphElement>(null);
  const studioDescriptionRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // image animation
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // text animation
      if (titleRef.current) {
        const letters = titleRef.current.querySelectorAll("span");
        gsap.to(letters, {
          opacity: 1,
          stagger: 0.07,
          duration: 1,
          ease: "power3.out",
        });
      }

      // arrow animation
      if (arrowRef.current) {
        gsap.fromTo(
          arrowRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: arrowRef.current,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // logo animation
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: logoRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // studio title animation
      if (studioNameRef.current) {
        const letters = studioNameRef.current.querySelectorAll("span");
        gsap.fromTo(
          letters,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: studioNameRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // studio description animation
      if (studioDescriptionRef.current) {
        gsap.fromTo(
          studioDescriptionRef.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: studioDescriptionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="pt-30 sm:px-20 sm:py-45">
        <div className="flex flex-col gap-10 px-4 bg-[url('/HomeLanding/dot-bg.webp')] py-20 sm:px-10">
          <h2 className="text-3xl font-bold sm:font-light sm:text-2xl">
            ABOUT ME
          </h2>
          <h2
            ref={titleRef}
            className="text-5xl font-bold sm:text-9xl sm:leading-[170px]"
          >
            <div>
              {"HI I'M SHYAM".split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-4 sm:mr-8">
                  {word.split("").map((letter, j) => (
                    <span key={j} className="opacity-0">
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </div>

            <div>
              {"INTERIOR DESIGNER".split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-4 sm:mr-8">
                  {word.split("").map((letter, j) => (
                    <span key={j} className="opacity-0">
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </h2>
          <div className="sm:flex sm:gap-5 h-[150svh]">
            <div
              ref={imageRef}
              className="w-full h-[60vh] relative mt-10 sm:w-[60%] sm:h-full
             rounded-2xl overflow-hidden
             shadow-[0_25px_60px_rgba(0,0,0,0.35)]
             hover:shadow-[0_35px_80px_rgba(0,0,0,0.45)]
             transition-all duration-500 ease-out
             group"
            >
              <Image
                src="/HomeLanding/profile-final-01.jpeg"
                alt="hero-section"
                fill
                className="object-cover rounded-2xl 
               group-hover:scale-102 
               transition-transform duration-500"
              />
            </div>

            {/* interior studeio abuot */}
            <div className="flex flex-col gap-5 py-10 sm:w-[40%] sm:h-full sm:pl-30">
              <div
                ref={arrowRef}
                className="relative h-[450px] w-52 hidden sm:block "
              >
                <Image
                  className="object-contain"
                  src="/about/arrow-line.webp"
                  alt="interior-studio-about"
                  fill
                />
              </div>
              <div className="flex flex-col gap-5 sm:gap-10 sm:mt-30">
                <div className="relative h-60 w-60">
                  <Image
                    className="object-cover"
                    ref={logoRef}
                    src="/HomeLanding/logo-about.png"
                    alt="interior-studio-about"
                    fill
                  />
                </div>
                <p ref={studioNameRef} className="text-3xl font-bold">
                  {"Shyam Interior Studio".split("").map((letter, i) => (
                    <span key={i} className="inline-block opacity-0">
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </p>
                <p
                  ref={studioDescriptionRef}
                  className="font-sans font-semibold text-left text-[#666666] py-10"
                >
                  Everything happens for a reason to change so that you can
                  learn to let go, things go wrong so that you appreciate them.
                  When necessary we offer the best dental restorative materials
                  and procedures. My technology allows you to see the results of
                  your treatment, and us to see detail not available to the
                  naked eye.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[20vh] w-full sm:h-[90svh]">
        <Image src="/about/gallery-01.webp" alt="about-thumb-2" fill />
      </div>
    </div>
  );
}

export default About;
