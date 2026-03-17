"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BhkSelector from "./CalculateBHK";
import RoomSelector from "./RoomSelector";
import PackageSelector from "./PackageSelector";
import GetQuote from "./GetQuote";
import gsap from "gsap";

export default function MultiStepForm() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (triggerRef.current) {
      gsap.to(triggerRef.current, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);
  const [bhk, setBhk] = useState("1 BHK");
  const [rooms, setRooms] = useState<Record<string, number>>({
    "Living Room": 1,
    Kitchen: 1,
    Bedroom: 1,
    Bathroom: 1,
    Dining: 1,
  });
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const next = () => setStep((prev) => Math.min(prev + 1, 4));
  const back = () => setStep((prev) => Math.max(prev - 1, 1));

  // Reset everything when dialog closes
  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      setStep(1);
      setBhk("1 BHK");
      setRooms({
        "Living Room": 1,
        Kitchen: 1,
        Bedroom: 1,
        Bathroom: 1,
        Dining: 1,
      });
      setSelectedPackage(null);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-30 px-4 bg-gray-50 sm:py-40">
      <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center sm:text-7xl">
        Calculate Your Interior Cost
      </h2>
      <p className="text-gray-500 text-center mb-8 max-w-md font-sans sm:text-2xl">
        Answer a few quick questions and get a personalised estimate for your
        dream home interiors.
      </p>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <button
            ref={triggerRef}
            className="bg-red-500 hover:bg-red-600 transition-all text-white font-semibold px-10 py-4 rounded-full text-base shadow-[0_10px_20px_rgba(239,68,68,0.2)] hover:shadow-[0_15px_25px_rgba(239,68,68,0.3)] hover:-translate-y-1 active:scale-95"
          >
            Calculate Area &amp; Get Quote
          </button>
        </DialogTrigger>

        <DialogContent
          showCloseButton={true}
          className="p-0 overflow-hidden w-full max-w-md h-[600px] max-h-[95vh] rounded-2xl flex flex-col shadow-2xl border-none"
        >
          <DialogTitle className="sr-only">
            Calculate Area &amp; Get Quote
          </DialogTitle>
          {step === 1 && (
            <BhkSelector next={next} selected={bhk} setSelected={setBhk} />
          )}
          {step === 2 && (
            <RoomSelector
              next={next}
              back={back}
              rooms={rooms}
              setRooms={setRooms}
            />
          )}
          {step === 3 && (
            <PackageSelector
              next={next}
              back={back}
              selected={selectedPackage}
              setSelected={setSelectedPackage}
            />
          )}
          {step === 4 && (
            <GetQuote
              back={back}
              bhk={bhk}
              rooms={rooms}
              selectedPackage={selectedPackage}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
