"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkTogether from "../work-together/WorkTogether";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Footer() {
  return (
    <footer className="">
      <WorkTogether />
      <section className="px-4 sm:px-0">
        <div className="border-t-[0.5px] border-[#999] py-10 flex sm:flex-row justify-between sm:px-30">
          <div className="flex flex-col justify-center  gap-10 sm:flex-row sm:justify-between sm:items-center sm:gap-30">
            <div className="h-30 w-30 relative">
              <Image
                className="object-contain"
                src="/navigation/site-logo-light.webp"
                alt="logo"
                fill
              />
            </div>
            <p>6541, BRAND TOWER, BADARPUR, DELHI, INDIA</p>
          </div>
          {/* address */}
          <div className="flex flex-col justify-center gap-10 sm:flex-row sm:justify-between sm:items-center sm:gap-30">
            <ul className="flex flex-col gap-2 font-extrabold text-lg">
              <Link href="/aboutme">ABOUT ME</Link>
              <Link href="/work">WORK</Link>
              <Link href="/contact">CONTACT</Link>
            </ul>
            <div>
              {/* email */}
              <p>INFO@EXAMPLE.COM</p>
              {/* phone */}
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>
        {/* links and copyright */}

        <div className="flex flex-col justify-center items-center py-10 gap-5 border-t-[0.5px] border-[#999] sm:px-30 sm:flex-row sm:justify-between sm:py-5">
          <p className="text-center">
            2022-2025 | ALL RIGHTS RESERVED BY SHYAN ARCHITECT
          </p>

          <div className="flex gap-5 ">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
            <Linkedin />
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
