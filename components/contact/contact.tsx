"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, comment }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setComment("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="flex flex-col p-6 md:p-10 lg:px-20 min-h-screen overflow-hidden">
      <div className="container mx-auto w-full">
        {/* Header Section */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-start pt-10 pb-10 gap-6">
          <h1 className="w-full lg:w-1/2 text-5xl md:text-7xl lg:text-8xl xl:text-[150px] font-medium leading-none font-glorify">
            Contact
          </h1>
          <p className="w-full lg:w-1/4 text-base md:text-lg text-[#919799] font-medium max-w-md flex items-start">
            We're excited to hear from you and let's start something special
            together. Call us for any inquiry.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full pt-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-lg">
            {/* Row: Name and Email */}
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="flex flex-col gap-3 md:w-1/2">
                <label
                  htmlFor="name"
                  className="text-[#919799] text-sm md:text-base font-bold uppercase tracking-wider"
                >
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-14 w-full text-[15px] outline-none border-none p-4 focus:ring-2 focus:ring-white/20 transition-all"
                  style={{
                    backgroundColor: "var(--input-box-color)",
                    color: "var(--color-text)",
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-3 md:w-1/2">
                <label
                  htmlFor="email"
                  className="text-[#919799] text-sm md:text-base font-bold uppercase tracking-wider"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 w-full text-[15px] outline-none border-none p-4 focus:ring-2 focus:ring-white/20 transition-all"
                  style={{
                    backgroundColor: "var(--input-box-color)",
                    color: "var(--color-text)",
                  }}
                  required
                />
              </div>
            </div>

            {/* Row: Comment */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="comment"
                className="text-[#919799] text-sm md:text-base font-bold uppercase tracking-wider"
              >
                Comment*
              </label>
              <textarea
                name="comment"
                placeholder="Write your comment...."
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full text-[15px] p-4 h-40 outline-none border-none resize-none"
                style={{
                  backgroundColor: "var(--input-box-color)",
                  color: "var(--color-text)",
                }}
                required
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-500 text-sm font-medium">
                ✓ Your message was sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm font-medium">
                ✗ Something went wrong. Please try again.
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative overflow-hidden w-3/5 md:w-auto px-12 py-4 rounded-full text-sm md:text-base font-bold uppercase tracking-widest bg-white text-black cursor-pointer transition-all duration-300 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-black/5 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2">
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Now
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
