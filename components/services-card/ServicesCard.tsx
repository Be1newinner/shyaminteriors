"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface IserviceCardProps {
  slug: string;
  id: string;
  image: string;
  title: string;
  description: string;
  services: string[];
}

function ServicesCard({
  slug,
  id,
  image,
  title,
  description,
  services,
}: IserviceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <Link href={`/services/${slug}`}>
      <div
        ref={cardRef}
        className="flex flex-col gap-5 pt-15 border-t-[0.5px] border-[#666666] py-2 relative sm:max-w-[400px] cursor-pointer rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-[#2a2929] p-6"
      >
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
    </Link>
  );
}

export default ServicesCard;
