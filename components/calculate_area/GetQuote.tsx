"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function GetQuote({
  back,
  bhk,
  rooms,
  selectedPackage,
}: {
  back: () => void;
  bhk: string;
  rooms: Record<string, number>;
  selectedPackage: string | null;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!submitted && formRef.current) {
      gsap.fromTo(
        formRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [submitted]);

  useEffect(() => {
    if (submitted && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          bhk,
          rooms,
          selectedPackage,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        ref={successRef}
        className="flex flex-col items-center justify-center px-6 py-12 text-center gap-6 h-full bg-white"
      >
        <div className="relative">
          <div className="text-7xl animate-bounce">🎉</div>
          <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">
            THANK YOU!
          </h2>
          <p className="text-lg font-bold text-red-500">Quote Submitted</p>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
          We&apos;ve received your request, <strong>{form.name}</strong>! Our
          team will contact you at{" "}
          <span className="text-red-500 font-semibold">{form.phone}</span>{" "}
          within 24 hours.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-8 py-3 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-black transition-colors cursor-pointer active:scale-95"
        >
          DONE
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full bg-white overflow-hidden"
    >
      {/* Top Section - Fixed Header */}
      <div className="flex-none bg-white z-10">
        {/* Progress Bar */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <span className="text-xs font-semibold tracking-widest text-gray-400">
            SHYAM INTERIORS
          </span>

          <div className="flex items-center gap-3 flex-1 mx-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className="h-2.5 w-2.5 rounded-full border bg-red-500 border-red-500" />
                {i !== 3 && <div className="flex-1 h-px bg-gray-100" />}
              </div>
            ))}
          </div>

          <span className="text-sm text-gray-400">4/4</span>
        </div>

        {/* Title */}
        <div className="px-5 py-3">
          <h2 className="text-lg font-bold text-gray-800">Almost there!</h2>
        </div>
      </div>

      {/* Middle Content - Scrollable Form */}
      <div className="flex-1 overflow-y-auto bg-gray-50/50">
        <div className="space-y-5 px-6 py-6" ref={formRef}>
          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Rohlt Sharma"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/5 bg-white text-gray-800 transition-all font-medium"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. rohit@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/5 bg-white text-gray-800 transition-all font-medium"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Mobile Number
            </label>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-500/5 transition-all">
              <span className="pl-4 pr-2 text-gray-400 font-bold text-sm">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="9876543210"
                value={form.phone}
                onChange={handleChange}
                required
                maxLength={10}
                className="w-full px-2 py-3 outline-none text-gray-800 font-medium"
              />
            </div>
          </div>

          {/* City */}
          <div className="space-y-1.5 pb-4">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Your City
            </label>
            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/5 bg-white text-gray-700 font-medium appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select city
              </option>
              {["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad"].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Buttons - Fixed Footer */}
      <div className="flex-none flex flex-col px-6 py-4 bg-white border-t border-gray-100 gap-3">
        {error && (
          <p className="text-red-500 text-xs font-bold text-center animate-pulse">
            {error}
          </p>
        )}
        <div className="flex items-center justify-between w-full">
          <button
            type="button"
            onClick={back}
            disabled={loading}
            className="text-red-500 font-bold text-sm tracking-wider hover:text-red-600 transition-colors cursor-pointer disabled:opacity-50"
          >
            BACK
          </button>

          <button
            type="submit"
            disabled={loading}
            className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-white px-10 py-3 rounded-full font-bold text-sm shadow-lg shadow-red-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                SENDING...
              </>
            ) : (
              "GET QUOTE"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
