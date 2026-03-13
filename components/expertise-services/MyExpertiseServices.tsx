"use client";
import React, { useEffect, useRef } from "react";
import { myServices } from "./myServices";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function MyExpertiseServices() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLHeadingElement>(null);
  //title and service animation
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

    // Refresh scroll trigger after a small delay to handle layout shifts
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(timeoutId);
    };
  }, []);

  const [currentService, setCurrentService] = React.useState(myServices[0]);
  const isActive = (serviceId: string) => currentService.id === serviceId;
  return (
    <section className="px-4 py-10 bg-[#212125] sm:py-30 sm:px-30">
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
        <div className="sm:basis-1/2">
          <ul className="text-3xl font-bold text-[#999] flex flex-col sm:justify-center gap-4 sm:gap-10 sm:basis-1/2">
            {myServices.map((service) => (
              <li
                key={service.id}
                onClick={() => setCurrentService(service)}
                className={`flex cursor-pointer gap-4 sm:gap-20 items-center sm:text-5xl ${isActive(service.id) ? "text-white" : ""}`}
              >
                <span className="text-2xl">{service.id}</span>{" "}
                <span>{service.title}</span>
              </li>
            ))}
          </ul>
          <div className="">
            <p className="text-[#999] font-sans text-xl my-10 sm:max-w-[70%]">
              {currentService.description}
            </p>
            <Link href={`/services/${currentService.slug}`}>
              <button className=" border-[0.5px] border-[#565555] cursor-pointers text-white px-10  py-6 max-w-[200px]  rounded-full font-sans font-bold text-lg cursor-pointer">
                KNOW MORE
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-15 sm:basis-1/2 sm:mt-0">
          <div className="w-full h-[60vh] relative sm:h-screen">
            <Image
              className="object-cover"
              src={currentService.image}
              alt={currentService.title}
              fill
            />
          </div>
          <div className="sm:hidden">
            <p className="text-[#999] font-sans text-xl font-semibold my-10">
              {currentService.description}
            </p>
            <button className=" border-[0.5px] border-[#999] cursor-pointers inline-block text-white px-5  py-6 max-w-[200px]  rounded-full font-sans font-bold text-lg cursor-pointer">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyExpertiseServices;
