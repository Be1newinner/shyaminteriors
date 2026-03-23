"use client";
import React, { useEffect, useRef } from "react";
import MyfeaturedCard from "../../UI/home-page/MyFeaturedCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeatureSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const workRef = useRef<HTMLHeadingElement>(null);
  const workParaRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLHeadingElement>(null);

  const letters = titleRef.current?.querySelectorAll(".letter");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = titleRef.current?.querySelectorAll(".letter");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (letters && letters.length > 0) {
        tl.from(letters, {
          y: 20,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.07,
        });
      }

      if (workRef.current) {
        tl.from(
          workRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );
      }

      if (workParaRef.current) {
        tl.from(
          workParaRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );
      }

      // cards component animation
      const cards = gsap.utils.toArray(cardsRef.current?.children || []);
      cards.forEach((card: any, index) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none none",
          },
        });
      });

      // counting effect
      const obj = { value: 0 };
      gsap.to(obj, {
        value: 5,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.innerText = Math.floor(obj.value).toString();
          }
        },
      });
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
    <section className="px-4 sm:px-20 bg-[#1f1f1f] py-10 sm:py-20">
      {/* text part */}
      <div className="flex flex-col gap-10 sm:flex-row sm:gap-30 sm:items-center py-10 sm:py-20">
        <div className="flex flex-col gap-5 sm:gap-10">
          <h2 ref={titleRef} className="text-3xl font-bold overflow-hidden">
            {"MY FEATURED".split("").map((char, i) => (
              <span key={i} className="letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <span ref={workRef} className="text-7xl font-semibold sm:text-9xl">
            WORK
          </span>
        </div>

        <div ref={workParaRef} className="flex flex-col gap-5 sm:max-w-[300px]">
          <span
            className="relative inline-flex items-center gap-2 text-[#666666]
            after:content-[''] after:block after:w-10 after:h-px
            after:bg-[#666666] after:mb-[3px]"
          >
            SINCE 2019
          </span>
          <p className="text-3xl sm:w-fit">
            INTERIOR DESIGN PLANNING DECORATION
          </p>
        </div>
      </div>

      {/* image part */}
      <div
        ref={cardsRef}
        className="sm:grid sm:grid-cols-2 sm:content sm:gap-50"
      >
        <MyfeaturedCard
          slug="drawing-room"
          className="sm:h-svh sm:w-full"
          image="/home-feature/drawing-room-01.jpeg"
          title="Drawing Room"
          location="Kolkata"
          year="2025"
        />
        <MyfeaturedCard
          slug="bed-room"
          className="sm:h-[400px] sm:w-full sm:mt-30"
          image="/home-feature/bedroom-01.jpeg"
          title="Bedroom"
          location="Kolkata"
          year="2025"
        />
        <MyfeaturedCard
          slug="bath-room"
          className="sm:h-[550px]"
          image="/home-feature/bathroom-01.jpeg"
          title="Bath Room"
          location="Mumbai, Maharashtra"
          year="2022"
        />

        <MyfeaturedCard
          slug="dinning-space"
          className="sm:h-[550px] sm:-mt-30"
          image="/images/hero_page/p6.webp"
          title="Dining Area"
          location="Bangalore, Karnataka"
          year="2021"
        />

        <MyfeaturedCard
          slug="kitchen-room"
          className="sm:h-[400px] sm:w-full sm:mt-30"
          image="/home-feature/kitchen-01.jpg"
          title="Kitchen Suite"
          location="Delhi, NCR"
          year="2023"
        />

        <MyfeaturedCard
          slug="reading-room"
          className="sm:h-screen sm:w-full"
          image="/images/hero_page/p5.webp"
          title="Reading Room"
          location="Pune, Maharashtra"
          year="2022"
        />
      </div>

      {/* experience part */}
      <div className="flex flex-col items-center text-center gap-3 py-10 sm:h-screen">
        <h3 className="text-9xl font-semibold sm:text-[70vh]">
          <span ref={countRef}>0</span>
          <span className="text-7xl font-thin sm:text-[18vh]">+</span>
        </h3>
        <p className="text-2xl sm:text-4xl">
          YEARS EXPERIENCES WITH <br /> OVER 100{" "}
          <span className="underline text-[#666666]">
            PROJECTS <br />
          </span>{" "}
          COMPLETED
        </p>
      </div>
    </section>
  );
}

export default FeatureSection;
