import React from "react";
import Image from "next/image";
import { BrandsPng } from "./Brands";
function NotableBrands() {
  return (
    <section className="mt-10 py-10 sm:py30">
      <h2 className="text-4xl text-center sm:text-6xl">
        I HAVE WORKED <br /> WITH SOME <br /> NOTABLE BRANDS
      </h2>
      <div className="grid grid-cols-2 gap-4 place-items-center mt-10">
        {BrandsPng.map((brand) => (
          <div key={brand.alt} className="h-20 w-20 relative sm:h-40 sm:w-40">
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
  );
}

export default NotableBrands;
