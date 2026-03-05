import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="pt-30">
      <div className="flex flex-col gap-10 px-4 bg-[url('/HomeLanding/dot-bg.webp')] py-20">
        <h2 className="text-3xl font-bold">ABOUT ME</h2>
        <h2 className="text-5xl font-bold">
          HI, I'M SHYAM <br /> INTERIOR DESIGNER
        </h2>
        <div className="w-full h-[60vh] relative mt-10">
          <Image
            src="/HomeLanding/about-thumb-1.webp"
            alt="hero-section"
            fill
          />
        </div>

        {/* interior studeio abuot */}
        <div className="flex flex-col gap-5 py-10">
          <Image
            src="/HomeLanding/interior-studio-about.webp"
            alt="interior-studio-about"
            width={150}
            height={150}
          />
          <p className="text-3xl font-bold">Shyam Interior Studio</p>
          <p className="font-sans font-semibold text-left text-[#666666] py-10">
            Everything happens for a reason to change so that you can learn to
            let go, things go wrong so that you appreciate them. When necessary
            we offer the best dental restorative materials and procedures. My
            technology allows you to see the results of your treatment, and us
            to see detail not available to the naked eye.
          </p>
        </div>
      </div>

      <div className="relative h-[20vh] w-full">
        <Image src="/about/gallery-01.webp" alt="about-thumb-2" fill />
      </div>
    </div>
  );
}

export default About;
