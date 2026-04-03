"use client";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkTogether from "../work-together/WorkTogether";

function Footer() {
  return (
    <footer className="bg-black">
      <WorkTogether />
      <section className="px-4 sm:px-0">
        <div className="border-t-[0.5px] border-[#999] py-10 flex sm:flex-row justify-between sm:px-30">
          <div className="flex flex-col justify-center  gap-10 sm:flex-row sm:justify-between sm:items-center sm:gap-30">
            <div className="h-30 w-30 relative">
              <Image
                className="object-contain scale-175"
                src="/HomeLanding/logo-about.png"
                alt="logo"
                fill
              />
            </div>
            <p className="">
              Om Enclave Part-2, 60 feet Road,
              <br /> Nearby Nalanda Public School, <br />
              Faridabad
            </p>
          </div>
          {/* address */}
          <div className="flex flex-col justify-center gap-10 sm:flex-row sm:justify-between sm:items-center sm:gap-30">
            <ul className="flex flex-col justify-center items-center gap-2 font-extrabold text-lg ">
              <Link href="/about">ABOUT ME</Link>
              <Link href="/projects">WORK</Link>
              <Link href="/contact">CONTACT</Link>
            </ul>
            <div>
              {/* email */}
              <p>shyamdesign287@gmail.com</p>
              {/* phone */}
              <p>+91 8810420956</p>
            </div>
          </div>
        </div>
        {/* links and copyright */}

        <div className="flex flex-col justify-center items-center py-10 gap-5 border-t-[0.5px] border-[#999] sm:px-30 sm:flex-row sm:justify-between sm:py-5">
          <p className="text-center">
            2022-2025 | ALL RIGHTS RESERVED BY SHYAM INTERIORS
          </p>

          <div className="flex gap-5 ">
            {/* <a href="#">
              <Facebook />
            </a> */}
            <a href="https://youtube.com/@shyamdesign-i7q?si=uNZ4qcETU4osAqSl">
              <Youtube />
            </a>
            <a href="https://www.instagram.com/shyam_design287?igsh=MXVqam96OWFpZ2dvOQ==">
              <Instagram />
            </a>
            {/* <a href="#">
              <Linkedin />
            </a> */}
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
