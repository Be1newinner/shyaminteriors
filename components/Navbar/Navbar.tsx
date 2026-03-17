"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLElement[]>([]);

  // Clear refs before reassigning
  linksRef.current = [];

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("hide-whatsapp");
      // Open animation
      gsap.to(menuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        pointerEvents: "auto",
      });

      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      document.body.classList.remove("hide-whatsapp");
      // Close animation
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        pointerEvents: "none",
      });
    }
  }, [open]);

  return (
    <div className="absolute top-0 z-50 w-full">
      <nav className="flex justify-between items-center px-5 py-5 relative sm:px-30">
        {/* logo */}
        <Link href="/">
          <div className="relative h-30 w-30">
            <Image
              className="object-cover"
              src="/navigation/logo.png"
              alt="logo"
              fill
            />
          </div>
        </Link>

        {/* menu button */}
        <div
          className="cursor-pointer relative h-10 w-10"
          onClick={() => setOpen(true)}
        >
          <Image
            className="object-contain"
            src="/navigation/bar-light.webp"
            alt="menu"
            fill
          />
        </div>
      </nav>

      {/* menu (ALWAYS mounted) */}
      <div
        ref={menuRef}
        className="absolute top-0 left-0 w-full h-screen bg-black p-5 pl-15 flex flex-col gap-9 opacity-0 -translate-y-full pointer-events-none"
      >
        {/* close button */}
        <button
          className="cursor-pointer text-white border border-[#666] p-4 rounded-full inline-block mr-auto active:scale-95 transition-all duration-300 hover:bg-gray-800 hover:text-white"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>

        {/* menu items */}
        <ul className="flex flex-col gap-9 text-4xl font-bold sm:text-6xl text-[#666]">
          {[
            { name: "Home Interior", link: "/" },
            { name: "About", link: "/about" },
            { name: "Services", link: "/services" },
            { name: "Projects", link: "/projects" },
            { name: "Contact", link: "/contact" },
          ].map((item, i) => (
            <li key={i} ref={addToRefs}>
              <Link
                href={item.link}
                onClick={() => setOpen(false)}
                className="hover:text-white transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
