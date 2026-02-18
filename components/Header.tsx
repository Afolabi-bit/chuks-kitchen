"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "My Orders", href: "/orders" },
  { label: "Account", href: "/account" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="relative z-50 flex justify-between items-center w-full h-[41px] md:h-[90px] p-[18px_24px] gap-[20px] md:p-[18px_32px] md:gap-[20px] lg:p-[18px_48px] lg:gap-[28px] xl:p-[18px_48px] xl:gap-[45px]">
        <h2 className="font-island font-medium text-[#FF7A18] leading-[41px] text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40.8px] whitespace-nowrap">
          <Link href="/">Chuks Kitchen</Link>
        </h2>

        <ul className="hidden md:flex flex-1 items-center justify-center gap-[8px] p-[10px] md:gap-[10px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                className={`flex-1 text-center font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] hover:text-[#FF7A18] transition-colors ${
                  isActive ? "text-[#FF7A18] font-semibold" : "text-[#1F2937]"
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>

        <button className="hidden md:flex p-[12px_28px] md:p-[12px_32px] lg:p-[14px_40px] xl:p-[15px_46px] w-[120px] md:w-[130px] lg:w-[145px] xl:w-[160px] h-[46px] md:h-[48px] lg:h-[50px] xl:h-[54px] bg-[#FF7A18] rounded-[10px] font-semibold text-[14px] lg:text-[16px] leading-[24px] text-white justify-center items-center">
          Login
        </button>

        {/* Hamburger / X toggle — mobile only */}
        <button
          className="flex md:hidden flex-col justify-center items-center w-[40px] h-[40px] relative"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-[22px] h-[2px] bg-[#1F2937] rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] absolute ${
              menuOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-[13px]"
            }`}
          />
          <span
            className={`w-[22px] h-[2px] bg-[#1F2937] rounded-full transition-all duration-200 absolute top-1/2 -translate-y-1/2 ${
              menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
            }`}
          />
          <span
            className={`w-[22px] h-[2px] bg-[#1F2937] rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] absolute ${
              menuOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-[13px]"
            }`}
          />
        </button>
      </header>

      {/* Mobile slide-out menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-400 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <nav
          className={`absolute top-0 right-0 w-full h-full bg-white/95 backdrop-blur-md flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Spacer for header height */}
          <div className="h-[90px] shrink-0" />

          <ul className="flex flex-col px-[8px]">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.href}
                  className={`transition-all duration-300 ${
                    menuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-[20px]"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${150 + i * 60}ms` : "0ms",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block mx-[8px] px-[20px] py-[16px] text-[17px] rounded-[12px] transition-all duration-200 ${
                      isActive
                        ? "text-[#FF7A18] font-semibold bg-[#FF7A18]/8"
                        : "text-[#1F2937] font-medium hover:text-[#FF7A18] hover:bg-[#FF7A18]/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={`mt-auto p-[24px] transition-all duration-300 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[10px]"
            }`}
            style={{ transitionDelay: menuOpen ? "400ms" : "0ms" }}
          >
            <button className="w-full h-[52px] bg-[#FF7A18] hover:bg-[#E86B10] active:scale-[0.98] rounded-[12px] font-semibold text-[16px] leading-[24px] text-white transition-all duration-200 shadow-[0_4px_12px_rgba(255,122,24,0.3)]">
              Login
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
