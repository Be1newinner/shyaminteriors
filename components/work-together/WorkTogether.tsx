import Link from "next/link";
import React from "react";

function WorkTogether() {
  return (
    <section className=" py-20 px-4 flex flex-col gap-10 sm:px-30">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-center sm:items-center">
        <h2 className="text-5xl sm:text-9xl">
          LET'S <br /> WORK <br />
          TOGETHER
        </h2>
        <p className="font-sans text-xl font-semibold text-[#999] text-left max-w-[85%] sm:font-normal sm:max-w-[20%]">
          Inspired by my work? I would be delighted to help you create your
          dream interior!
        </p>
        <Link
          href={"/contact"}
          className="font-sans text-xl bg-white font-semibold text-black  py-5 flex items-center justify-center rounded-4xl max-w-55 sm:h-15 sm:px-10 sm:py-10"
        >
          CONTACT ME
        </Link>
      </div>
    </section>
  );
}

export default WorkTogether;
