"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const projects = [
    { src: "/images/hero_page/p1.webp", slug: "drawing-room", title: "Drawing Room", location: "Natre, New York", year: "2023", width: 600, height: 801 },
    { src: "/images/hero_page/p4.webp", slug: "bed-room", title: "Bedroom", location: "Natre, New York", year: "2023", width: 550, height: 400 },
    { src: "/images/hero_page/p2.webp", slug: "bath-room", title: "Bath Room", location: "Natre, New York", year: "2022", width: 380, height: 483 },
    { src: "/images/hero_page/p6.webp", slug: "dinning-space", title: "Dining Area", location: "Natre, New York", year: "2021", width: 380, height: 483 },
    { src: "/images/hero_page/p3.webp", slug: "kitchen-room", title: "Kitchen Suite", location: "Natre, New York", year: "2023", width: 550, height: 400 },
    { src: "/images/hero_page/p5.webp", slug: "reading-room", title: "Reading Room", location: "Natre, New York", year: "2022", width: 600, height: 801 },
];

const INITIAL_COUNT = 4; // show 4 projects initially (2 per column)

function ProjectCard({ src, slug, title, location, year, width, height }: {
    src: string;
    slug: string;
    title: string;
    location: string;
    year: string;
    width: number;
    height: number;
}) {

    return (
        <div className="flex flex-col gap-4 mb-14">
            {/* Image — fills full column width, aspect ratio from real dimensions */}
            <div className={`w-full overflow-hidden w-[${width}px]  h-[${height}px] `}>
                <Link href={`/projects/${slug}`}>
                    <Image
                        src={src}
                        alt={title}
                        width={width}
                        height={height}
                        className={`w-[${width}px] h-[${height}px] object-cover transition-transform duration-500 hover:scale-105`}
                    />
                </Link>
            </div>
            {/* Text below image */}
            <div className="flex flex-col gap-1 px-1 ">
                <h3
                    className="text-xl md:text-2xl font-bold font-glorify text-[var(--color-text)]"
                >
                    {title}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-text-muted)]">
                    {location}<br />
                    <span>- {year}</span>
                </p>
            </div>
        </div>
    );
}

export default function ProjectPage() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = projects.slice(0, showAll ? projects.length : 4);
    const hasMore = !showAll;
    const leftCol = visibleProjects.filter((_, i) => i % 2 === 0);
    const rightCol = visibleProjects.filter((_, i) => i % 2 !== 0);

    return (
        <main className="min-h-screen px-6 md:px-10 lg:px-20 py-10 mt-45">
            {/* Header */}
            <div className="mb-16">
                <h2
                    className="text-sm md:text-base uppercase tracking-widest font-bold mb-4 font-glorify text-[var(--color-text)]"
                >
                    My Featured
                </h2>
                <h1
                    className="text-5xl md:text-7xl lg:text-8xl xl:text-[130px] font-medium leading-none font-glorify uppercase text-[var(--color-text)]"
                >
                    Work
                </h1>
            </div>

            {/* Staggered two-column grid */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
                {/* Left column — starts at top */}
                <div className="w-full md:w-1/2">
                    {leftCol.map((p) => (
                        <ProjectCard key={p.src} {...p} />
                    ))}
                </div>

                {/* Right column — offset down to create stagger */}
                <div className="w-full md:w-1/2 md:mt-32">
                    {rightCol.map((p) => (
                        <ProjectCard key={p.src} {...p} />
                    ))}
                </div>
            </div>

            {/* Load More Button */}
            {hasMore && (
                <div className="flex justify-center mt-4 mb-16">
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

                        {/* Left window panel — matches the page background so it "reveals" the golden button */}
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
        </main>
    );
}
