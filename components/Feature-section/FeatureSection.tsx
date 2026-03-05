import React from "react";
import MyfeaturedCard from "../../UI/home-page/MyFeaturedCard";

function FeatureSection() {
  return (
    <section className="px-4 mt-10 sm:px-20 bg-[#1f1f1f] py-10 sm:py-20">
      {/* text part */}
      <div className="flex flex-col gap-10 sm:flex-row sm:gap-30 sm:items-center py-10 sm:py-20">
        <div className="flex flex-col gap-5 sm:gap-10">
          <h2 className="text-3xl font-bold">MY FEATURED</h2>
          <span className="text-7xl font-semibold sm:text-9xl">WORK</span>
        </div>

        <div className="flex flex-col gap-5 sm:max-w-[300px]">
          <span
            className="relative inline-flex items-center gap-2 text-[#666666]
            after:content-[''] after:block after:w-10 after:h-[1px]
            after:bg-[#666666] after:mb-[3px]"
          >
            SINCE 2014
          </span>
          <p className="text-3xl sm:w-fit">
            INTERIOR DESIGN PLANNING DECORATION
          </p>
        </div>
      </div>

      {/* image part */}
      <div className="sm:grid sm:grid-cols-2 sm:content sm:gap-50">
        <MyfeaturedCard
          className="sm:h-svh! sm:w-full!"
          image="/home-feature/p7.webp"
          title="Drawing Room"
          location="Kolkata"
          year="2025"
        />
        <MyfeaturedCard
          className="sm:h-[400px] sm:w-full! sm:mt-30"
          image="/home-feature/p7.webp"
          title="Drawing Room"
          location="Kolkata"
          year="2025"
        />
        <MyfeaturedCard
          className="sm:h-[550px] "
          image="/home-feature/p7.webp"
          title="Drawing Room"
          location="Kolkata"
          year="2025"
        />
        <MyfeaturedCard
          className="sm:h-[550px] sm:-mt-30"
          image="/home-feature/p7.webp"
          title="Drawing Room"
          location="Kolkata"
          year="2025"
        />
        <MyfeaturedCard
          className="sm:h-[400px] sm:w-full! sm:mt-30"
          image="/home-feature/p7.webp"
          title="Drawing Room"
          location="Kolkata"
          year="2025"
        />
        <MyfeaturedCard
          className="sm:h-screen sm:w-full!"
          image="/home-feature/p7.webp"
          title="Drawing Room"
          location="Kolkata"
          year="2025"
        />
      </div>

      {/* experience part */}
      <div className="flex flex-col items-center text-center gap-3 py-10 sm:h-screen">
        <h3 className="text-9xl font-semibold sm:text-[70vh]">
          23<span className="text-7xl font-thin sm:text-[18vh]">+</span>
        </h3>
        <p className="text-2xl sm:text-4xl">
          YEARS EXPERIENCES WITH <br /> OVER 800{" "}
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
