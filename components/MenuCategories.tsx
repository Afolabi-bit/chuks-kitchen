/**
 * MenuCategories Component
 *
 * A sidebar list of menu categories displayed on the Explore page.
 * When a category is clicked, it smoothly scrolls the page to the
 * corresponding section and highlights the active category with
 * an orange accent bar.
 */

"use client";

import { useState } from "react";
import { menuCategories } from "../data.js";

export default function MenuCategories() {
  // Tracks the currently active category by id (defaults to "Popular")
  const [activeId, setActiveId] = useState("mc-1");

  // Sets the clicked category as active and scrolls to its section
  const handleClick = (cat: { id: string; sectionId: string }) => {
    setActiveId(cat.id);

    // Find the section element by its id and scroll it into view
    const section = document.getElementById(cat.sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-white rounded-t-[14px] flex flex-col items-start py-[26px] gap-[18px]">
      {/* Title */}
      <div className="w-full px-[26px]">
        <div className="flex items-center py-[10px]">
          <h2 className="font-int font-semibold text-[24px] leading-[34px] text-black">
            Menu Categories
          </h2>
        </div>
      </div>

      {/* Category items */}
      {menuCategories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            onClick={() => handleClick(cat)}
            className={`w-full flex items-center transition-colors cursor-pointer ${
              isActive
                ? "h-[56px] bg-[#FFE1C4] gap-[19px]"
                : "h-[34px] px-[24px] hover:bg-[#FFF5EB]"
            }`}
          >
            {/* Orange accent bar — only in active state */}
            {isActive && (
              <div className="w-[4px] h-full bg-[#FF7A18] shrink-0" />
            )}

            <span className="font-int font-medium text-[24px] leading-[34px] text-black text-left">
              {cat.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
