import React from "react";
import { reviews } from "@/offline_data/review";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function ReviewCard() {
  return (
    <section className="px-4 py-10 sm:px-30 sm:py-30">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl font-bold text-center sm:text-7xl">
          WHAT OUR CLIENTS SAY
        </h2>
        <p className="text-[#999] font-sans text-xl py-5 sm:max-w-xl sm:text-center">
          Discover how we’ve transformed spaces and exceeded expectations with
          our thoughtful designs and quality craftsmanship.
        </p>
      </div>

      <div className="flex flex-col gap-10 font-sans ">
        <Marquee pauseOnHover={true} direction="left">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900 p-5 rounded-xl w-[350px] h-[300px] mx-5 cursor-pointer "
            >
              <div className="flex flex-col items-start gap-4">
                {/* image left side */}
                <div className="w-[20%]">
                  <div className="h-15 w-15 bg-gray-300 rounded-full relative ">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                </div>

                {/* review right side */}
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-xl">{review.name}</h2>
                  <span className="text-gray-400">{review.date}</span>
                  <p className="text-gray-400">
                    {review.review.slice(0, 70)}
                    {review.review.length > 70 && "..."}
                  </p>
                  <p className="text-slate-300">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default ReviewCard;
