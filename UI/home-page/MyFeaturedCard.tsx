import Image from "next/image";
import React from "react";

function MyFeaturedCard({
  className,
  image,
  title,
  location,
  year,
}: {
  className: string;
  image: string;
  title: string;
  location: string;
  year: string;
}) {
  return (
    <div>
      <div className={`h-[60vh] w-full relative bg-sky-300 ${className}`}>
        <Image className="object-cover" src={image} alt={title} fill />
      </div>

      <div className="py-10 flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="font-sans text-[#666666] font-semibold">
          {location}, <span>{year}</span>
        </p>
      </div>
    </div>
  );
}

export default MyFeaturedCard;
