"use client";
import { BrandsPng } from "@/components/notable-brands/Brands";
import ServicesCard from "@/components/services-card/ServicesCard";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function page() {
  return (
    <section className="px-4 bg-[#201f1f]">
      <div className="sm:py-15">
        <h2 className="text-6xl font-bold pt-30 text-center py-20 sm:text-9xl sm:font-light">
          SERVICES
        </h2>
      </div>

      {/* service card */}
      <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-center ">
        <ServicesCard
          slug="artwork-design"
          id="01"
          image="/home-services/service-01.webp"
          title="ARTWORK DESIGN"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />

        <ServicesCard
          slug="cabinetry-design"
          id="02"
          image="/home-services/service-01.webp"
          title="CABINETRY DESIGN"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />

        <ServicesCard
          slug="custom-furniture"
          id="03"
          image="/home-services/service-01.webp"
          title="CUSTOM FURNITURE"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />

        <ServicesCard
          slug="lighting-design"
          id="04"
          image="/home-services/service-01.webp"
          title="LIGHTING DESIGN"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />

        <ServicesCard
          slug="wall-covering"
          id="05"
          image="/home-services/service-01.webp"
          title="WALL COVERING"
          description="Welcome to the Modern Urban Retreat project, where we are tasked with
        transforming a 3-bedroom apart..."
          services={["UI/UX Design", "Research", "Mobile & Web App"]}
        />
      </div>

      <section className="mt-10 border-t-[0.5px] border-[#666666] pt-10">
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
      </section>
    </section>
  );
}

export default page;
