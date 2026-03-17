"use client";

import { Minus, Plus } from "lucide-react";

const roomsList = ["Living Room", "Kitchen", "Bedroom", "Bathroom", "Dining"];

export default function RoomSelector({
  next,
  back,
  rooms,
  setRooms,
}: {
  next: () => void;
  back: () => void;
  rooms: Record<string, number>;
  setRooms: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}) {
  const increase = (room: string) => {
    setRooms((prev) => ({ ...prev, [room]: prev[room] + 1 }));
  };

  const decrease = (room: string) => {
    setRooms((prev) => ({
      ...prev,
      [room]: prev[room] > 0 ? prev[room] - 1 : 0,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Progress */}
        <div className="flex items-center justify-between px-4 py-4">
          <span className="text-xs font-semibold tracking-widest text-gray-500">
            SHYAM INTERIORS
          </span>

          <div className="flex items-center gap-3 flex-1 mx-4">
            {[1, 2, 3, 4].map((s, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div
                  className={`h-4 w-4 rounded-full border-2 ${
                    s <= 2
                      ? "bg-purple-500 border-purple-500"
                      : "border-gray-300"
                  }`}
                />
                {i !== 3 && <div className="flex-1 h-[2px] bg-gray-300" />}
              </div>
            ))}
          </div>

          <span className="text-sm text-gray-500">2/4</span>
        </div>

        {/* Title */}
        <div className="px-5 py-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Select the rooms you&apos;d like us to design
          </h2>
          <p className="text-sm text-gray-500">
            To know more about this,{" "}
            <span className="text-red-500 cursor-pointer">click here</span>
          </p>
        </div>

        {/* Room List */}
        <div className="mt-3">
          {roomsList.map((room) => (
            <div
              key={room}
              className="flex items-center justify-between px-5 py-5 border-b bg-gray-100"
            >
              <span className="text-gray-800 font-medium">{room}</span>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => decrease(room)}
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-red-200 text-red-600"
                >
                  <Minus size={16} />
                </button>

                <span className="font-semibold text-gray-800 w-5 text-center">
                  {rooms[room]}
                </span>

                <button
                  onClick={() => increase(room)}
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-red-400 text-white"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between px-5 py-4 bg-white border-t">
        <button onClick={back} className="text-red-400 font-semibold">
          BACK
        </button>

        <button
          onClick={next}
          className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
