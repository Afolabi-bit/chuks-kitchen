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
      <div className="flex flex-col items-start w-full gap-[32px] max-lg:gap-[28px] max-md:gap-[24px]">
        {/* Food info */}
        <div className="flex flex-col items-start w-full gap-[8px]">
          {/* Name + Price */}
          <div className="flex flex-col items-start w-full gap-[11px]">
            <h1 className="font-int font-bold max-md:font-semibold text-[32px] max-lg:text-[28px] max-md:text-[24px] leading-[42px] max-lg:leading-[36px] max-md:leading-[32px] text-black w-full">
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

        {/* Tags row — desktop: inline row, mobile: flex-wrap pills */}
        <div className="flex flex-row flex-wrap items-start p-[10px_0px] max-md:p-[10px_0px] gap-[14px] max-md:gap-[10px] w-full">
          {/* Mildly spicy */}
          <div className="flex flex-row items-center gap-[9px] max-md:bg-[#F3F4F6] max-md:rounded-[8px] max-md:p-[4px_6px]">
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

          {/* View Allergies */}
          <div className="flex flex-row items-center gap-[12px] max-md:bg-[#F3F4F6] max-md:rounded-[8px] max-md:p-[4px_6px]">
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
            <span className="font-int font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-[#1E88E5] cursor-pointer">
              View Allergies
            </span>
          </div>

          {/* Vegetarian option */}
          <div className="flex flex-row items-center gap-[9px] max-md:bg-[#F3F4F6] max-md:rounded-[8px] max-md:p-[4px_6px]">
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
              Vegetarian option available
            </span>
          </div>
        </div>
      </div>

      {/* Choose Your Protein */}
      <div className="flex flex-col items-start py-[10px] gap-[19px] max-md:gap-[13px] w-full">
        <h2 className="font-int font-medium max-md:font-semibold text-[24px] max-lg:text-[22px] leading-[34px] max-lg:leading-[32px] max-md:leading-[32px] text-black max-md:text-[#1F2937]">
          Choose Your Protein
        </h2>

        {proteins.map((protein, index) => (
          <button
            key={protein.name}
            onClick={() => setSelectedProtein(index)}
            className="flex flex-row justify-between items-center p-[8px_11px] w-full h-[49.36px] max-lg:h-[46px] max-md:h-[44px] border border-[#BDBDBD] rounded-[8px] cursor-pointer"
          >
            <div className="flex flex-row items-center gap-[8px]">
              {/* Radio circle */}
              <div
                className={`w-[33.36px] h-[33.36px] max-lg:w-[30px] max-lg:h-[30px] max-md:w-[28px] max-md:h-[28px] rounded-full flex items-center justify-center p-[6px] max-md:p-[5px] ${
                  selectedProtein === index
                    ? "bg-[#FF7A18]"
                    : "bg-white border border-[#BDBDBD]"
                }`}
              >
                <div
                  className={`w-[21.36px] h-[21.36px] max-lg:w-[18px] max-lg:h-[18px] max-md:w-[17.93px] max-md:h-[17.93px] rounded-full ${
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
      <div className="flex flex-col items-start py-[10px] gap-[19px] max-md:gap-[13px] w-full">
        <h2 className="font-int font-medium text-[24px] max-lg:text-[22px] leading-[34px] max-lg:leading-[32px] text-black">
          Extra Sides (Optional)
        </h2>

        {sides.map((side, index) => (
          <button
            key={side.name}
            onClick={() => toggleSide(index)}
            className="flex flex-row justify-between items-center p-[8px_11px] w-full h-[49.36px] max-lg:h-[46px] max-md:h-[44px] border border-[#BDBDBD] rounded-[8px] cursor-pointer"
          >
            <div className="flex flex-row items-center gap-[8px]">
              {/* Checkbox */}
              <div
                className={`w-[33.36px] h-[33.36px] max-lg:w-[30px] max-lg:h-[30px] max-md:w-[28px] max-md:h-[28px] rounded-[12px] flex items-center justify-center p-[6px] max-md:p-[5px] ${
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
      <div className="flex flex-col items-start gap-[19px] max-md:gap-[13px] w-full">
        <h2 className="font-int font-medium text-[24px] max-lg:text-[22px] leading-[34px] max-lg:leading-[32px] text-black w-full">
          Special Instructions
        </h2>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="E.g no onion, extra spicy, less salt..."
          className="w-full h-[112px] max-md:h-[136px] border border-[#BDBDBD] rounded-[8px] p-[10px_10px_54px] font-int font-medium text-[16px] leading-[24px] text-black outline-none resize-none placeholder:text-[#9E9E9E] focus:border-[#FF7A18] transition-colors"
        />
      </div>
    </>
  );
}
