"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, X, Youtube } from "lucide-react";
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
      document.body.style.overflow = "hidden";
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
        },
      );
    } else {
      document.body.classList.remove("hide-whatsapp");
      document.body.style.overflow = "";
      // Close animation
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        pointerEvents: "none",
      });
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("hide-whatsapp");
    };
  }, [open]);

  return (
    <div className="absolute top-0 z-50 w-full">
      <nav className="flex justify-between items-center px-5 py-5 relative sm:px-30">
        {/* logo */}
        <Link href="/">
          <div className="relative h-30 w-30">
            <Image
              className="object-cover"
              src="/HomeLanding/logo-about.png"
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
        className="absolute top-0 left-0 w-full h-screen bg-black p-5 sm:p-10 lg:p-15 flex flex-col gap-6 sm:gap-12 opacity-0 -translate-y-full pointer-events-none overflow-y-auto"
      >
        {/* close button */}
        <button
          className="cursor-pointer text-white border border-[#666] p-4 rounded-full inline-block mr-auto active:scale-95 transition-all duration-300 hover:bg-gray-800 hover:text-white"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>

        <div className="flex flex-col lg:flex-row w-full grow justify-between lg:items-center gap-16 lg:gap-0 lg:px-10 pb-20 lg:pb-0">
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
                  className="hover:text-white transition-all duration-300 hover:scale-110 inline-block origin-left"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side information (Visible on larger screens) */}
          <div className="hidden lg:flex flex-col text-white max-w-md gap-12 lg:mr-20 border-l border-[#333] pl-16">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#888] tracking-widest uppercase text-sm font-semibold">
                Get In Touch
              </h3>
              <p className="text-2xl hover:text-gray-300 transition-colors cursor-pointer">
                shyamdesign287@gmail.com
              </p>
              <p className="text-2xl hover:text-gray-300 transition-colors cursor-pointer">
                +91 8810420956
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[#888] tracking-widest uppercase text-sm font-semibold">
                Our Studio
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Om Enclave Part-2, 60 feet Road,
                <br /> Nearby Nalanda Public School,
                <br /> Faridabad
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              {/* <a
                href="#"
                className="w-14 h-14 rounded-full border border-[#666] flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
              >
                <span className="text-sm font-semibold">FB</span>
              </a> */}
              <a
                href="https://www.instagram.com/shyam_design287?igsh=MXVqam96OWFpZ2dvOQ=="
                className="w-14 h-14 rounded-full border border-[#666] flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
              >
                <span className="text-sm font-semibold"><InstagramIcon /></span>
              </a>
              <a
                href="https://youtube.com/@shyamdesign-i7q?si=uNZ4qcETU4osAqSl"
                className="w-14 h-14 rounded-full border border-[#666] flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
              >
                <span className="text-sm font-semibold"><Youtube /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
