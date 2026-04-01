"use client";

import Image from "next/image";
import { useState, useLayoutEffect } from "react";
import Link from "next/link";
import BeforeAfterCarousel from "@/components/projects/BeforeAfterCarousel";
import gsap from "gsap";

const projects = [
  {
    src: "/home-feature/drawing-room-1.jpg",
    slug: "drawing-room",
    title: "Drawing Room",
    location: "Kolkata, West Bengal",
    year: "2023",
  },
  {
    src: "/home-feature/bed-room-1.jpg",
    slug: "bed-room",
    title: "Bedroom",
    location: "Mumbai, Maharashtra",
    year: "2023",
  },
  {
    src: "/home-feature/bath-room-1.jpg",
    slug: "bath-room",
    title: "Bath Room",
    location: "Delhi, NCR",
    year: "2022",
  },
  {
    src: "/home-feature/dinning-room-1.jpg",
    slug: "dinning-space",
    title: "Dining Area",
    location: "Bangalore, Karnataka",
    year: "2021",
  },
  {
    src: "/home-feature/kitchen-01.jpg",
    slug: "kitchen-room",
    title: "Kitchen Suite",
    location: "Hyderabad, Telangana",
    year: "2023",
  },
  {
    src: "/images/hero_page/p5.webp",
    slug: "office-area",
    title: "Office Area",
    location: "Pune, Maharashtra",
    year: "2022",
  },
];

const INITIAL_COUNT = 4; // show 4 projects initially (2 per column)

function ProjectCard({
  src,
  slug,
  title,
  location,
  year,
  index,
}: {
  src: string;
  slug: string;
  title: string;
  location: string;
  year: string;
  index: number;
}) {
  const isNew = index >= INITIAL_COUNT;

  return (
    <div
      className={`flex flex-col gap-4 mb-14 w-full ${isNew ? "new-project-card opacity-0 translate-y-10" : ""
        }`}
    >
      {/* Image — fills full column width, aspect ratio from real dimensions */}
      <div
        className="relative w-full overflow-hidden bg-gray-100 aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] object-cover"
      >
        <Link href={`/projects/${slug}`} className="block w-full h-full">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </Link>
      </div>
      {/* Text below image */}
      <div className="flex flex-col gap-1 px-1 ">
        <h3 className="text-xl md:text-2xl font-bold font-glorify text-[var(--color-text)]">
          {title}
        </h3>
        <p className="text-sm md:text-base text-[var(--color-text-muted)]">
          {location}
          <br />
          <span>- {year}</span>
        </p>
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const [showAll, setShowAll] = useState(false);

  const allVisibleItems = projects.map((p, i) => ({ ...p, originalIndex: i }));
  const visibleProjects = allVisibleItems.slice(
    0,
    showAll ? projects.length : INITIAL_COUNT,
  );
  const hasMore = !showAll;

  // Maintain staggered layout by processing columns based on current set
  const leftCol = visibleProjects.filter((_, i) => i % 2 === 0);
  const rightCol = visibleProjects.filter((_, i) => i % 2 !== 0);

  useLayoutEffect(() => {
    if (showAll) {
      gsap.to(".new-project-card", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: {
          amount: 0.6,
          grid: [visibleProjects.length / 2, 2],
          from: "start",
        },
        ease: "power4.out",
      });
    }
  }, [showAll, visibleProjects.length]);

  return (
    <main className="min-h-screen px-6 md:px-10 lg:px-20 py-10 mt-45">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-sm md:text-base uppercase tracking-widest font-bold mb-4 font-glorify text-[var(--color-text)]">
          My Featured
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[130px] font-medium leading-none font-glorify uppercase text-[var(--color-text)]">
          Work
        </h1>
      </div>

      {/* Staggered two-column grid */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Left column — starts at top */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {leftCol.map((p) => (
            <ProjectCard key={p.src} {...p} index={p.originalIndex} />
          ))}
        </div>

        {/* Right column — offset down to create stagger */}
        <div className="w-full md:w-1/2 md:mt-32 flex flex-col items-center">
          {rightCol.map((p) => (
            <ProjectCard key={p.src} {...p} index={p.originalIndex} />
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-4 mb-32">
          <button
            onClick={() => setShowAll(true)}
            className="group relative px-10 py-4 text-sm uppercase tracking-widest font-bold overflow-hidden border cursor-pointer"
            style={{
              borderColor: "#C9A84C",
              backgroundColor: "#C9A84C",
              color: "var(--color-text)",
            }}
          >
            <span
              className="relative z-10 transition-colors duration-500"
              style={{ color: "var(--color-text)" }}
            >
              Load More
            </span>

            {/* Left window panel */}
            <span
              className="absolute inset-y-0 left-0 w-2/3 transition-transform duration-500 ease-in-out group-hover:-translate-x-full"
              style={{ backgroundColor: "var(--color-bg)" }}
            />

            {/* Right window panel */}
            <span
              className="absolute inset-y-0 right-0 w-2/3 transition-transform duration-500 ease-in-out group-hover:translate-x-full"
              style={{ backgroundColor: "var(--color-bg)" }}
            />
          </button>
        </div>
      )}

      {/* Before & After Section */}
      <div className="mt-20 -mx-6 md:-mx-10 lg:-mx-20">
        <BeforeAfterCarousel />
      </div>
    </main>
  );
}
