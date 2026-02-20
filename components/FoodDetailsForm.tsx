"use client";

import { useState } from "react";
import Link from "next/link";

const proteins = [
  { name: "Fried Chicken", price: null, label: "(Default)" },
  { name: "Grilled Fish", price: "+₦500" },
  { name: "Beef", price: "+₦700" },
];

const sides = [
  { name: "Fried Plantain", price: "+₦700" },
  { name: "Coleslaw", price: "+₦500" },
  { name: "Extra Pepper Sauce", price: "+₦300" },
];

interface FoodDetailsFormProps {
  name: string;
  price?: string;
  desc?: string;
}

export default function FoodDetailsForm({
  name,
  price,
  desc,
}: FoodDetailsFormProps) {
  const [selectedProtein, setSelectedProtein] = useState(0);
  const [selectedSides, setSelectedSides] = useState<number[]>([]);
  const [instructions, setInstructions] = useState("");

  const toggleSide = (index: number) => {
    setSelectedSides((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <>
      {/* Back to Menu */}
      <Link
        href="/explore"
        className="self-end font-int font-medium text-[16px] leading-[140%] tracking-[-0.02em] text-[#1E88E5] hover:text-[#1565C0] transition-colors"
      >
        ← Back to Menu
      </Link>

      {/* Main content */}
      <div className="flex flex-col items-start w-full gap-[37px]">
        {/* Food info */}
        <div className="flex flex-col items-start w-full gap-[18px]">
          {/* Name + Price */}
          <div className="flex flex-col items-start w-full gap-[11px]">
            <h1 className="font-int font-bold text-[32px] leading-[42px] text-black w-full">
              {name}
            </h1>
            {price && (
              <p className="font-int font-semibold text-[24px] leading-[34px] text-[#FF7A18] w-full">
                {price}
              </p>
            )}
          </div>

          {/* Description */}
          {desc && (
            <p className="font-int font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-black w-full">
              {desc}
            </p>
          )}
        </div>

        {/* Tags row */}
        <div className="flex flex-row items-start p-[10px] gap-[10px] w-full">
          {/* Mildly spicy */}
          <div className="flex flex-row flex-wrap items-center gap-[9px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"
                fill="#FF7A18"
              />
            </svg>
            <span className="font-int font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-[#4B5563]">
              Mildly spicy
            </span>
          </div>

          {/* Vegetarian option */}
          <div className="flex flex-row flex-wrap items-center gap-[12px] flex-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"
                fill="#FF7A18"
              />
            </svg>
            <span className="font-int font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-[#4B5563] flex-1">
              Vegetarian option available
            </span>
          </div>

          {/* View Allergies */}
          <div className="flex flex-row flex-wrap items-center gap-[12px] flex-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"
                fill="#FF7A18"
              />
            </svg>
            <span className="font-int font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-[#1E88E5] flex-1 cursor-pointer">
              View Allergies
            </span>
          </div>
        </div>
      </div>

      {/* Choose Your Protein */}
      <div className="flex flex-col items-start py-[10px] gap-[19px] w-full">
        <h2 className="font-int font-medium text-[24px] leading-[34px] text-black">
          Choose Your Protein
        </h2>

        {proteins.map((protein, index) => (
          <button
            key={protein.name}
            onClick={() => setSelectedProtein(index)}
            className="flex flex-row justify-between items-center p-[8px_11px] w-full h-[49.36px] border border-[#BDBDBD] rounded-[8px] cursor-pointer"
          >
            <div className="flex flex-row items-center gap-[8px]">
              {/* Radio circle */}
              <div
                className={`w-[33.36px] h-[33.36px] rounded-full flex items-center justify-center p-[6px] ${
                  selectedProtein === index
                    ? "bg-[#FF7A18]"
                    : "bg-white border border-[#BDBDBD]"
                }`}
              >
                <div
                  className={`w-[21.36px] h-[21.36px] rounded-full ${
                    selectedProtein === index ? "bg-white" : ""
                  }`}
                />
              </div>
              <span className="font-int font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-black">
                {protein.name}
              </span>
            </div>
            <span className="font-int font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-black">
              {protein.label || protein.price}
            </span>
          </button>
        ))}
      </div>

      {/* Extra Sides (Optional) */}
      <div className="flex flex-col items-start py-[10px] gap-[19px] w-full">
        <h2 className="font-int font-medium text-[24px] leading-[34px] text-black">
          Extra Sides (Optional)
        </h2>

        {sides.map((side, index) => (
          <button
            key={side.name}
            onClick={() => toggleSide(index)}
            className="flex flex-row justify-between items-center p-[8px_11px] w-full h-[49.36px] border border-[#BDBDBD] rounded-[8px] cursor-pointer"
          >
            <div className="flex flex-row items-center gap-[8px]">
              {/* Checkbox */}
              <div
                className={`w-[33.36px] h-[33.36px] rounded-[12px] flex items-center justify-center p-[6px] ${
                  selectedSides.includes(index)
                    ? "bg-[#FF7A18]"
                    : "bg-white border border-[#BDBDBD]"
                }`}
              >
                {selectedSides.includes(index) && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10.8L3.2 8l-1.07 1.06L6 12.9l8-8-1.06-1.06L6 10.8z"
                      fill="#FFFFFF"
                    />
                  </svg>
                )}
              </div>
              <span className="font-int font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-black">
                {side.name}
              </span>
            </div>
            <span className="font-int font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-black">
              {side.price}
            </span>
          </button>
        ))}
      </div>

      {/* Special Instructions */}
      <div className="flex flex-col items-start gap-[19px] w-full">
        <h2 className="font-int font-medium text-[24px] leading-[34px] text-black w-full">
          Special Instructions
        </h2>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="E.g no onion, extra spicy, less salt..."
          className="w-full h-[112px] border border-[#BDBDBD] rounded-[8px] p-[10px_10px_54px] font-int font-medium text-[16px] leading-[24px] text-black outline-none resize-none placeholder:text-[#9E9E9E] focus:border-[#FF7A18] transition-colors"
        />
      </div>
    </>
  );
}
