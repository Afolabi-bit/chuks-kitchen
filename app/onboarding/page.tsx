"use client";

import Footer from "@/components/Footer";
import Image from "next/image";

export default function Onboarding() {
  return (
    <main className="font-int">
      <section className=" md:flex min-h-screen xl:h-[1024px]">
        {/* image */}
        <div className="hidden lg:block lg:h-auto lg:w-[45%] xl:w-[50%] h-full relative">
          <Image
            src="/onboarding-desktop.png"
            alt="image of family feasting"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-[55%] xl:w-[50%] h-full relative flex flex-col  py-[28px]  lg:pl-[50px] lg:pr-[40px] xl:pl-[78px] xl:pr-[60px] ">
          <div className="flex justify-between items-center w-full px-[20px] lg:px-0 xl:w-[574px]">
            <h2 className="font-island font-medium text-[#FF7A18] leading-[41px] text-[32px] sm:text-[40.8px] ">
              Chuks Kitchen
            </h2>
            <button className=" text-[16px] font-semibold leading-[24px] w-[100px] h-[40px] md:w-[160px] md:h-[54px] border-2 rounded-[10px] text-[#1E88E5] text-center border-[#1E88E5]">
              Sign in
            </button>
          </div>

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

            {/* buttons */}
            <div className="flex flex-col gap-[31px]">
              <button className="w-full h-[50px] xl:h-[60px] bg-[#FF7A18] rounded-[10px] text-white font-semibold text-[16px] leading-[24px] ">
                Start Your Order
              </button>
              <button className="w-full h-[50px] xl:h-[60px] border-2 border-[#1E88E5] rounded-[10px] font-semibold text-[16px] leading-[24px] text-[#1E88E5] ">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* footer
          <div className="text-center">
            <p className="inline-flex gap-2 md:gap-[17px]">
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
          </div> */}
        </div>
      </section>
      <Footer />
    </main>
  );
}
/* Frame 1000004286 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 6px 9px;
// gap: 11px;

// width: 330px;
// height: 56px;

// background: #F3F4F6;
// border-radius: 8px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// align-self: stretch;
// flex-grow: 0;
