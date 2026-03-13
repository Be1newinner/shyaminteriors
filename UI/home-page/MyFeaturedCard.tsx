"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function MyFeaturedCard({
  className,
  image,
  title,
  location,
  year,
  slug,
}: {
  className: string;
  image: string;
  title: string;
  location: string;
  year: string;
  slug: string;
}) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div>
        <div
          className={`h-[60vh] w-full relative overflow-hidden cursor-pointer ${className}`}
        >
          <Image
            className="object-cover transition-transform duration-700 hover:scale-110"
            src={image}
            alt={title}
            fill
          />
        </div>

        <div className="py-10 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="font-sans text-[#666666] font-semibold">
            {location}, <span>{year}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MyFeaturedCard;
