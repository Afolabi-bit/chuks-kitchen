/**
 * Onboarding Page (/onboarding)
 *
 * The landing page that introduces users to Chuks Kitchen.
 * Features a split layout with a hero image on the left (desktop only)
 * and a content panel on the right with the brand name, tagline,
 * feature highlights, and two CTA buttons.
 */

"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

export default function Onboarding() {
  return (
    <main className="font-int">
      {/* Hero split layout -- image on left, content on right */}
      <section className=" md:flex min-h-screen xl:h-[1024px]">
        {/* Left panel -- hero image, visible only on lg and above */}
        <div className="hidden lg:block lg:h-auto lg:w-[45%] xl:w-[50%] h-full relative">
          <Image
            src="/onboarding-desktop.png"
            alt="image of family feasting"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right panel -- brand name, mobile hero image, feature list, and CTAs */}
        <div className="w-full lg:w-[55%] xl:w-[50%] h-full relative flex flex-col  py-[28px]  lg:pl-[50px] lg:pr-[40px] xl:pl-[78px] xl:pr-[60px] ">
          <div className="flex justify-between items-center w-full px-[20px] lg:px-0 xl:w-[574px]">
            <h2 className="font-island font-medium text-[#FF7A18] leading-[41px] text-[32px] sm:text-[40.8px] ">
              Chuks Kitchen
            </h2>
            <button className=" text-[16px] font-semibold leading-[24px] w-[100px] h-[40px] md:w-[160px] md:h-[54px] border-2 rounded-[10px] text-[#1E88E5] text-center border-[#1E88E5] transition-all duration-150 hover:bg-[#1E88E5] hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5] focus-visible:ring-offset-2 cursor-pointer">
              Sign in
            </button>
          </div>

          {/* Mobile hero image -- shown below the logo on smaller screens, hidden on lg+ */}
          <div className="block lg:hidden mt-[28px] h-[300px] w-full relative">
            <img
              src="/onboarding-mobile.png"
              alt="image of family feasting"
              className="w-full h-full object-cover object-bottom-left"
            />
          </div>

          {/* main content */}
          <div className="w-full xl:w-[557px] mt-10 sm:mt-20 lg:mt-20 xl:mt-[168px] mb-16 lg:mb-24 xl:mb-[154px] px-[20px] md:px-10 lg:px-0">
            <h1 className="font-bold text-[24px] sm:text-[32px] leading-[32px] sm:leading-[42px] text-[#1F2937] mb-4  lg:mb-[18px] xl:mb-[24px] ">
              Your Authentic Taste of Nigeria
            </h1>
            <p className="font-medium lg:text-[15px] xl:text-[16px] leading-[24px] text-[#1F2937] mb-[36px] text-wr ">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
            {/* Feature highlights -- three selling points with icons */}
            <ul className="flex flex-wrap gap-[19px_32px] xl:gap-[19px_70px] items-center align-content-start mb-[36px]">
              <li className="flex items-center gap-[11px] p-[6px_9px] w-full h-[56px] bg-[#F3F4F6] rounded-[13px] ">
                <span className="w-[44px] h-[44px] bg-[#FFE1C4] rounded-[13px] flex items-center justify-center ">
                  <img
                    src="/fork-knife.png"
                    alt="fork"
                    className="object-contain"
                  />
                </span>
                <span className="font-medium text-[16px] leading-[24px] text-[#000000] ">
                  Freshly Prepared
                </span>
              </li>

              <li className="flex items-center gap-[11px] p-[6px_9px] w-full h-[56px] bg-[#F3F4F6] rounded-[13px] ">
                <span className="w-[44px] h-[44px] bg-[#FFE1C4] rounded-[13px] flex items-center justify-center ">
                  <FaCartShopping className="text-[#FF7A18]" />
                </span>
                <span className="font-medium text-[16px] leading-[24px] text-[#000000] ">
                  Support Local Business
                </span>
              </li>

              <li className="flex items-center gap-[11px] p-[6px_9px] w-full h-[56px] bg-[#F3F4F6] rounded-[13px] ">
                <span className="w-[44px] h-[44px] bg-[#FFE1C4] rounded-[13px] flex items-center justify-center ">
                  <img
                    src="/delivery-icon.png"
                    alt="fork"
                    className="object-contain"
                  />
                </span>
                <span className="font-medium text-[16px] leading-[24px] text-[#000000] ">
                  Fast & Reliable Delivery
                </span>
              </li>
            </ul>

            {/* CTA buttons -- primary (Start Your Order) and secondary (Learn More) */}
            <div className="flex flex-col gap-[31px]">
              <button className="w-full h-[50px] xl:h-[60px] bg-[#FF7A18] rounded-[10px] text-white font-semibold text-[16px] leading-[24px] transition-all duration-150 hover:bg-[#E56A0E] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A18] focus-visible:ring-offset-2 cursor-pointer ">
                Start Your Order
              </button>
              <button className="w-full h-[50px] xl:h-[60px] border-2 border-[#1E88E5] rounded-[10px] font-semibold text-[16px] leading-[24px] text-[#1E88E5] transition-all duration-150 hover:bg-[#1E88E5] hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5] focus-visible:ring-offset-2 cursor-pointer ">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
