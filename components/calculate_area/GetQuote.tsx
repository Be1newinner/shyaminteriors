"use client";

import { useState } from "react";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ bhk, rooms, selectedPackage, ...form });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 text-center gap-4">
        <div className="text-6xl">🎉</div>
        <h2 className="text-2xl font-bold text-gray-800">Quote Submitted!</h2>
        <p className="text-gray-500 text-sm">
          Thank you, <strong>{form.name}</strong>! Our team will reach out to
          you at <span className="text-red-500">{form.email}</span> or{" "}
          <span className="text-red-500">{form.phone}</span> shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-gray-100 flex flex-col justify-between"
    >
      {/* Top */}
      <div>
        {/* Progress */}
        <div className="flex items-center justify-between px-4 py-4">
          <span className="text-xs font-semibold tracking-widest text-gray-500">
            SHYAM INTERIORS
          </span>

          <div className="flex items-center gap-3 flex-1 mx-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className="h-4 w-4 rounded-full border-2 bg-purple-500 border-purple-500" />
                {i !== 3 && <div className="flex-1 h-[2px] bg-purple-300" />}
              </div>
            ))}
          </div>

          <span className="text-sm text-gray-500">4/4</span>
        </div>

        {/* Title */}
        <div className="px-5 py-3">
          <h2 className="text-xl font-bold text-gray-800">
            Your estimate is almost ready
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Fill in your details and we&apos;ll get back to you.
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4 px-5 mt-4">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-red-400 bg-white text-gray-800 placeholder:text-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-red-400 bg-white text-gray-800 placeholder:text-gray-400"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white focus-within:border-red-400">
              <span className="px-3 text-gray-500 text-sm border-r border-gray-300 py-3">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                required
                maxLength={10}
                className="w-full px-4 py-3 outline-none text-gray-800 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* City */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">City</label>
            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-red-400 bg-white text-gray-700"
            >
              <option value="" disabled>
                Select your city
              </option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Pune</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Kolkata</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between px-5 py-4 bg-white border-t mt-6">
        <button
          type="button"
          onClick={back}
          className="text-red-400 font-semibold"
        >
          BACK
        </button>

        <button
          type="submit"
          className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors"
        >
          GET QUOTE
        </button>
      </div>
    </form>
  );
}
