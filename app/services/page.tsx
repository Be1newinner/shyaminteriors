"use client";
import { BrandsPng } from "@/components/notable-brands/Brands";
import ServicesCard from "@/components/services-card/ServicesCard";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

function page() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);
  return (
    <section className="px-4 bg-[#201f1f]">
      <div className="sm:py-15">
        <h2 className="text-6xl font-bold pt-30 text-center py-20 sm:text-9xl sm:font-light">
          SERVICES
        </h2>
      </div>

      {/* service card */}
      <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-center py-10 *:hover:scale-105 *:transition-all *:duration-300">
        <ServicesCard
          slug="industrial-design"
          id="01"
          image="/home-services/industrial-design.jpeg"
          title="INDUSTRIAL DESIGN"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />

        <ServicesCard
          slug="corporate-design"
          id="02"
          image="/home-services/corporate-design.jpeg"
          title="CORPORATE DESIGN"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />

        <ServicesCard
          slug="residential-design"
          id="03"
          image="/home-services/residential-design.jpeg"
          title="RESIDENTIAL DESIGN"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />

        <ServicesCard
          slug="custom-furniture"
          id="04"
          image="/home-services/custom-furniture.jpeg"
          title="CUSTOM FURNITURE"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />


        <ServicesCard
          slug="lighting-design"
          id="05"
          image="/home-services/lighting-design.jpg"
          title="LIGHTING DESIGN"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />
        <ServicesCard
          slug="wall-covering"
          id="06"
          image="/home-services/wall-covering.jpg"
          title="WALL COVERING"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />
        {/* <ServicesCard
          slug="corporate-design"
          id="07"
          image="/home-services/service-01.webp"
          title="CORPORATE DESIGN"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />
        <ServicesCard
          slug="industrial-design"
          id="08"
          image="/home-services/service-01.webp"
          title="INDUSTRIAL DESIGN"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        /> */}
      </div>

      {/* <section className="mt-10 border-t-[0.5px] border-[#666666] pt-10">
        <h2 className="text-3xl py-10 font-bold text-center">
          TRUSTED WORLDWIDE CLIENTS
        </h2>
        <div className="grid grid-cols-2 gap-4 place-items-center mt-10">
          {BrandsPng.map((brand) => (
            <div key={brand.alt} className="h-20 w-20 relative sm:h-30 sm:w-30">
              <Image
                className="invert object-contain"
                src={brand.image}
                alt={brand.alt}
                fill
              />
            </div>
          ))}
        </div>
      </section> */}
    </section>
  );
}

export default page;
