"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const blogs = [
    {
        image: "/images/blog/b1.webp",
        alt: "Blog 1",
        title: "Explore the Essence of Interior Design",
        date: "09 NOV 2023",
        comments: "3 Comments",
        width: 431,
        height: 534,
    },
    {
        image: "/images/blog/b3.webp",
        alt: "Blog 3",
        title: "Your Inspiration Hub for Interior Excellence",
        date: "03 NOV 2023",
        comments: "3 Comments",
        width: 431,
        height: 284,
    },
    {
        image: "/images/blog/b5.webp",
        alt: "Blog 5",
        title: "Navigate the World of Interior Design",
        date: "29 OCT 2023",
        comments: "3 Comments",
        width: 431,
        height: 534,
    },
    {
        image: "/images/blog/b2.webp",
        alt: "Blog 2",
        title: "Your Ultimate Source for Interior Design Inspiration",
        date: "06 NOV 2023",
        comments: "3 Comments",
        width: 431,
        height: 284,
    },
    {
        image: "/images/blog/b4.webp",
        alt: "Blog 4",
        title: "Uncover the Beauty of Interior Spaces on Our Website",
        date: "01 NOV 2023",
        comments: "3 Comments",
        width: 431,
        height: 534,
    },
    {
        image: "/images/blog/b6.webp",
        alt: "Blog 6",
        title: "Explore the Boundless Horizons of Interior Design",
        date: "26 OCT 2023",
        comments: "3 Comments",
        width: 431,
        height: 284,
    },
];

const PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(blogs.length / PER_PAGE);

function BlogCard({ image, alt, title, date, comments, width, height }: typeof blogs[0]) {
    return (
        <div className="flex flex-col gap-3 w-full mb-10">
            {/* Image with hover zoom */}
            <div className="w-full overflow-hidden group cursor-pointer">
                <Image
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Meta: date | comments */}
            <div className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                <span>{date}</span>
                <span className="opacity-40">|</span>
                <span>{comments}</span>
            </div>

            {/* Title */}
            <Link href="#">
                <h2
                    className="w-4/5 text-[28px] font-bold uppercase tracking-wide font-glorify leading-snug hover:opacity-75 transition-opacity duration-300"
                    style={{ color: "var(--color-text)" }}
                >
                    {title}
                </h2>
            </Link>
        </div>
    );
}

export default function BlogPage() {
    const [page, setPage] = useState(1);
    const paginated = blogs.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    // Distribute into 3 columns: 0,3 → col1 | 1,4 → col2 | 2,5 → col3
    const col1 = paginated.filter((_, i) => i % 3 === 0);
    const col2 = paginated.filter((_, i) => i % 3 === 1);
    const col3 = paginated.filter((_, i) => i % 3 === 2);

    return (
        <main className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-10 mt-45">

            {/* ── Heading ── */}
            <div className="flex justify-center mb-8 md:mb-12">
                <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[130px] xl:text-[170px] font-medium leading-none font-glorify uppercase text-[var(--color-text)]">
                    Blog
                </h1>
            </div>

            {/* ── Grid ──
                Mobile : 1 column stacked
                sm     : 2 columns
                lg     : 3 columns with centre column offset
            */}
            <div className="hidden lg:flex flex-row gap-8 xl:gap-12 items-start">
                {/* Left column */}
                <div className="flex-1 flex flex-col">
                    {col1.map((b) => <BlogCard key={b.image} {...b} />)}
                </div>

                {/* Centre column — pushed down for stagger */}
                <div className="flex-1 flex flex-col ">
                    {col2.map((b) => <BlogCard key={b.image} {...b} />)}
                </div>

                {/* Right column */}
                <div className="flex-1 flex flex-col">
                    {col3.map((b) => <BlogCard key={b.image} {...b} />)}
                </div>
            </div>

            {/* Tablet: 2-column grid */}
            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6 items-start">
                <div className="flex flex-col">
                    {paginated.filter((_, i) => i % 2 === 0).map((b) => <BlogCard key={b.image} {...b} />)}
                </div>
                <div className="flex flex-col mt-16">
                    {paginated.filter((_, i) => i % 2 !== 0).map((b) => <BlogCard key={b.image} {...b} />)}
                </div>
            </div>

            {/* Mobile: single column */}
            <div className="flex flex-col sm:hidden gap-2">
                {paginated.map((b) => <BlogCard key={b.image} {...b} />)}
            </div>

            {/* ── Pagination ── */}
            {TOTAL_PAGES > 1 && (
                <div className="flex justify-center items-center gap-4 mt-10 mb-16">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] disabled:opacity-30 hover:text-[var(--color-text)] transition-colors cursor-pointer disabled:cursor-default"
                    >
                        ← Previous
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => (
                            <button
                                key={n}
                                onClick={() => setPage(n)}
                                className="w-7 h-7 text-xs font-bold flex items-center justify-center transition-colors cursor-pointer"
                                style={{
                                    color: n === page ? "#C9A84C" : "var(--color-text-muted)",
                                    borderBottom: n === page ? "1px solid #C9A84C" : "none",
                                }}
                            >
                                {n}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
                        disabled={page === TOTAL_PAGES}
                        className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] disabled:opacity-30 hover:text-[var(--color-text)] transition-colors cursor-pointer disabled:cursor-default"
                    >
                        Next →
                    </button>
                </div>
            )}
        </main>
    );
}