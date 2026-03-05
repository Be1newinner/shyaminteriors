"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-0 z-50 w-full">
      <nav className="flex justify-between items-center px-5 py-5 relative sm:px-30">
        {/* logo part */}
        <div className="relative h-20 w-30">
          <Image
            className="object-contain"
            src="/navigation/site-logo-light.webp"
            alt="logo"
            fill
          />
        </div>

        {/* menu icon */}
        <div
          className="cursor-pointer relative h-10 w-10"
          onClick={() => setOpen(!open)}
        >
          <Image
            className="object-contain"
            src="/navigation/bar-light.webp"
            alt="menu"
            fill
          />
        </div>
      </nav>

      {/* menu dropdown */}
      {open && (
        <div className="absolute top-0 bg-black shadow-lg p-5 pl-15 z-50 w-full h-screen flex flex-col gap-9">
          <button
            className="cursor-pointer text-white border-[0.5px] border-[#666666] p-4 rounded-full inline-block mr-auto"
            onClick={() => setOpen(!open)}
          >
            <X />
          </button>
          <ul className="flex flex-col gap-9 text-4xl font-bold *:text-[#666666] sm:text-6xl">
            <li>
              <Link
                className="cursor-pointer inline-block hover:text-white transition-all duration-300"
                onClick={() => setOpen(false)}
                href="/"
              >
                Home Interior
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer inline-block hover:text-white transition-all duration-300"
                onClick={() => setOpen(false)}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer inline-block hover:text-white transition-all duration-300"
                onClick={() => setOpen(false)}
                href="/services"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                className="cursor-pointer inline-block hover:text-white transition-all duration-300"
                onClick={() => setOpen(false)}
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer inline-block hover:text-white transition-all duration-300"
                onClick={() => setOpen(false)}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
