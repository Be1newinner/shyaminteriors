"use client";
import React, { useEffect, useRef, useState } from "react";
import { myServices } from "./myServices";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MyExpertiseServices() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const [currentService, setCurrentService] = useState(myServices[0]);

  const isActive = (serviceId: string) => currentService.id === serviceId;

  // title animation
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

      if (letters) {
        tl.fromTo(
          letters,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.07,
            ease: "power3.out",
          },
        );
      }

      if (servicesRef.current) {
        tl.fromTo(
          servicesRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );
      }
    });

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  // smooth service change animation
  const changeService = (service: any) => {
    if (service.id === currentService.id) return;

    // Update state immediately so images start cross-fading via CSS
    setCurrentService(service);

    // Animate the description text separately
    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      },
    );
  };

  return (
    <section className="px-4 py-10 bg-[#212125] sm:py-30 sm:px-30">
      {/* title */}
      <div className="flex flex-col gap-5 pb-20">
        <h2 ref={titleRef} className="text-3xl font-bold">
          {"MY EXPERTISE".split("").map((char, i) => (
            <span key={i} className="letter inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <span ref={servicesRef} className="text-6xl sm:text-9xl">
          SERVICES
        </span>
      </div>

      <div className="sm:flex sm:gap-30">
        {/* left side */}
        <div className="sm:basis-1/2">
          <ul className="text-3xl font-bold text-[#999] flex flex-col sm:justify-center gap-4 sm:gap-10">
            {myServices.map((service) => (
              <li
                key={service.id}
                onClick={() => changeService(service)}
                className={`flex cursor-pointer gap-4 sm:gap-20 items-center sm:text-5xl ${isActive(service.id) ? "text-white" : ""
                  }`}
              >
                <span className="text-2xl">{service.id}</span>
                <span>{service.title}</span>
              </li>
            ))}
          </ul>

          <div>
            <p
              ref={descRef}
              className="text-[#999] font-sans text-xl my-10 sm:max-w-[70%]"
            >
              {currentService.description}
            </p>

            <Link href={`/services/${currentService.slug}`}>
              <button className="group relative border-[0.5px] border-[#565555] text-white px-10 py-6 max-w-[200px] rounded-full font-sans font-bold text-lg cursor-pointer overflow-hidden">
                <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  KNOW MORE
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* right side image */}
        <div className="flex flex-col gap-5 mt-15 sm:basis-1/2 sm:mt-0">
          <div ref={imageRef} className="w-full h-[60vh] relative sm:h-screen">
            {myServices.map((service) => (
              <div
                key={service.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive(service.id) ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              >
                <Image
                  className="object-cover"
                  src={service.image}
                  alt={service.title}
                  fill
                  quality={75} // Reduced quality for faster initial transfer
                  priority={service.id === "01"}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyExpertiseServices;
