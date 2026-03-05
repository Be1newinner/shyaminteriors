import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="relative">
      <div className=" bg-[url('/HomeLanding/dot-bg.webp')] bg-cover w-full relative sm:pb-30">
        <div className="relative">
          {/* home image section */}
          <div className="relative">
            <div className="h-[70vh] w-full relative sm:h-screen">
              <Image
                className="object-cover"
                src="/HomeLanding/hero-bg.webp"
                alt="hero-section"
                fill
              />
            </div>

            {/* text part */}
            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-15 text-center">
              <p className="text-2xl font-semibold">EXPERIENCED AND CREATIVE</p>
              <h1 className="text-7xl font-bold sm:text-9xl">
                INTERIOR <br className="sm:hidden" /> DESIGNER
              </h1>
            </div>
          </div>
        </div>
        {/* profile image section */}

        <div className="flex flex-col gap-20 sm:flex-row sm:h-screen  sm:px-30 sm:mt-30">
          {/* profile image part */}
          <div className="w-full h-[60vh] relative sm:h-full sm:w-1/2">
            <Image
              src="/HomeLanding/about-thumb-1.webp"
              alt="hero-section"
              fill
            />
          </div>

          {/* profile about part */}
          <div className="flex flex-col gap-10 px-4 sm:w-1/2 sm:py-20">
            <h2 className="text-6xl">
              JANATHAN <br className="sm:hidden" /> ALEN
            </h2>
            <p className="font-sans text-xl text-left text-[#666666] sm:max-w-[80%]">
              Everything happens for a reason to change so that you can learn to
              let go, things go wrong so that you appreciate them. When
              necessary we offer the best dental restorative materials and
              procedures. My technology allows you to see the results of your
              treatment, and us to see detail not available to the naked eye.
            </p>
            {/* interior studeio abuot */}
            <div className="flex flex-col gap-5 sm:mt-20">
              <Image
                src="/HomeLanding/interior-studio-about.webp"
                alt="interior-studio-about"
                width={150}
                height={150}
              />
              <p className="text-2xl">SHYAN INTERIOR STUDIO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
