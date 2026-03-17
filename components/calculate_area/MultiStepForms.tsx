"use client";

import { useState } from "react";
import BhkSelector from "./CalculateBHK";
import RoomSelector from "./RoomSelector";
import PackageSelector from "./PackageSelector";
import GetQuote from "./GetQuote";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
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

  return (
    <div>
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
    </div>
  );
}
