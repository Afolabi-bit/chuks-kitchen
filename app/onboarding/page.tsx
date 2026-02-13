"use client";

import Footer from "@/components/Footer";
import Image from "next/image";

export default function Onboarding() {
  return (
    <main className="font-int">
      <section className="flex h-[1024px]">
        {/* image */}
        <div className="w-[50%] h-full relative">
          <Image
            src="/onboarding-desktop.png"
            alt="image of family feasting"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[50%] h-full relative flex flex-col  pl-[78px] pr-[60px] ">
          <div className="flex justify-between items-center w-[574px] mt-[28px]">
            <h2 className="font-island text-[#FF7A18] leading-[41px] text-[40.8px] ">
              Chuks Kitchen
            </h2>
            <button className=" text-[16px] font-semibold leading-[24px] w-[160px] h-[54px] border-2 rounded-[10px] text-[#1E88E5] text-center border-[#1E88E5]">
              Sign in
            </button>
          </div>

          {/* main content */}
          <div className="w-[557px] mt-[168px] mb-[154px]">
            <h1 className="font-bold text-[32px] leading-[42px] text-[#1F2937] mb-[24px] ">
              Your Authentic Taste of Nigeria
            </h1>
            <p className="font-medium text-[16px] leading-[24px] text-[#1F2937] mb-[36px] text-wr ">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
            <ul className="flex flex-wrap gap-[19px_70px] items-center align-content-start mb-[36px]">
              <li className="flex items-center gap-[11px] py-[4px]">
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

              <li className="flex items-center gap-[11px] py-[4px]">
                <span className="w-[44px] h-[44px] bg-[#FFE1C4] rounded-[13px] flex items-center justify-center ">
                  <img
                    src="/fork-knife.png"
                    alt="fork"
                    className="object-contain"
                  />
                </span>
                <span className="font-medium text-[16px] leading-[24px] text-[#000000] ">
                  Support Local Business
                </span>
              </li>

              <li className="flex items-center gap-[11px] py-[4px]">
                <span className="w-[44px] h-[44px] bg-[#FFE1C4] rounded-[13px] flex items-center justify-center ">
                  <img
                    src="/fork-knife.png"
                    alt="fork"
                    className="object-contain"
                  />
                </span>
                <span className="font-medium text-[16px] leading-[24px] text-[#000000] ">
                  Fast & Reliable Delivery
                </span>
              </li>
            </ul>

            {/* buttons */}
            <div className="flex flex-col gap-[31px]">
              <button className="w-full h-[60px] bg-[#FF7A18] rounded-[10px] text-white font-semibold text-[16px] leading-[24px] ">
                Start Your Order
              </button>
              <button className="w-full h-[60px] border-2 border-[#1E88E5] rounded-[10px] font-semibold text-[16px] leading-[24px] text-[#1E88E5] ">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* footer */}
          <div className="text-center">
            <p className="inline-flex gap-[17px]">
              <span className="font-medium text-[14px] leading-[20px] text-[#1F2937]">
                &copy; {new Date().getFullYear()} Chuk's Kitchen.
              </span>
              <a
                href="#"
                className="font-medium text-[14px] leading-[20px] text-[#64B5F6]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-medium text-[14px] leading-[20px] text-[#64B5F6]"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
