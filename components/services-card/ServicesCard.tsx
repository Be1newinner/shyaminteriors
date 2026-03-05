import { Plus } from "lucide-react";
import React from "react";
import Image from "next/image";
interface IserviceCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  services: string[];
}

function ServicesCard({
  id,
  image,
  title,
  description,
  services,
}: IserviceCardProps) {
  return (
    <div className="flex flex-col gap-5 pt-15 border-t-[0.5px] border-[#666666] py-2 relative">
      <p className="text-xl font-bold font-sans text-[#666666]">{id}</p>
      <div className="h-[200px] w-full relative">
        <Image className="object-cover" src={image} alt={title} fill />
      </div>
      <h3 className="text-3xl font-bold font-sans">{title}</h3>
      <p className="font-sans text-xl text-[#666666]">{description}</p>

      <div>
        <div className="flex items-center gap-2 font-sans font-bold text-xl">
          <Plus className="text-2xl" />
          <p>{services[0]}</p>
        </div>
        <div className="flex items-center gap-2 font-sans font-bold text-xl">
          <Plus className="text-2xl" />
          <p>{services[1]}</p>
        </div>
        <div className="flex items-center gap-2 font-sans font-bold text-xl">
          <Plus className="text-2xl" />
          <p>{services[2]}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
