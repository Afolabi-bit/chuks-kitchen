/**
 * Footer Component
 *
 * Site-wide footer displayed at the bottom of every page.
 * Contains four columns: brand description, quick links, contact info,
 * and social media links. Below the columns is a copyright bar with
 * legal links and a back-to-top button.
 */

"use client";

import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" footer flex flex-col items-center text-center w-full h-auto xl:h-[449px] py-[40px] md:py-[65px] gap-[4px] ">
      {/* Four-column layout -- brand, quick links, contact, social */}
      <div className="flex flex-row flex-wrap  md:flex-nowrap lg:justify-between xl:justify-center items-start px-6 md:px-10 lg:px-20 gap-8 lg:gap-[60px] xl:gap-[101px] ">
        {/* Column 1: Brand name and tagline */}
        <div className="flex flex-col items-start w-full lg:w-[22%]  xl:w-[229.25px] h-auto xl:h-[218px] ">
          <h2 className="font-island text-[#FF7A18] leading-[37px] text-[32px] md:text-[24px] lg:text-[37px] ">
            Chuks Kitchen
          </h2>
          <p className="font-jost text-[#FFFFFF] md:text-[12px] lg:text-[20px] xl:text-[24px] xl:leading-[36px] text-left ">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>

        {/* Column 2: Quick navigation links */}
        <div className="flex flex-col items-start w-full lg:w-fit  xl:w-[229.25px] h-auto xl:h-[218px] ">
          <h2 className="font-jost text-[#FFFFFF] md:text-[16px] lg:text-[24px] leading-[36px] text-left ">
            Quick Links
          </h2>
          <ul className="flex flex-col items-start w-full xl:w-[229.25px] h-auto xl:h-[218px] ">
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                Explore{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                My Order
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                Account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact information */}
        <div className="flex flex-col items-start w-full lg:w-fit  xl:w-[229.25px] h-auto xl:h-[218px] ">
          <h2 className="font-jost text-[#FFFFFF]  md:text-[16px] lg:text-[24px] leading-[36px] text-left ">
            Contact Us
          </h2>
          <ul className="flex flex-col items-start text-left w-full xl:w-[229.25px] h-auto xl:h-[218px] ">
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                +234 801 234 5678
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                hello@chukskitchen.com
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] text-wrap leading-[20px] text-[#FFFFFF] "
              >
                123 Taste Blvd, Lagos, Nigeria
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social media links */}
        <div className="flex flex-col items-start w-full lg:w-fit  xl:w-[229.25px] h-auto xl:h-[218px] ">
          <h2 className="font-jost text-[#FFFFFF] text-[16px] lg:text-[24px] leading-[36px] text-left ">
            Follow Us
          </h2>
          <ul className="flex flex-col items-start w-full xl:w-[229.25px] h-auto xl:h-[218px] ">
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar -- copyright text, legal links, and back-to-top button */}
      <div className="mt-[36px] flex justify-between items-center w-full px-6 md:px-10 lg:px-20 xl:px-[110px] ">
        <p className=" text-[10px] text-left ">
          <span className="font-poppins lg:text-[12px] leading-[20px] text-[#FFFFFF]/65">
            &copy; {new Date().getFullYear()} Lift Media. All rights reserved.
          </span>
          <span className="flex flex-col">
            <a
              href="#"
              className="font-medium  leading-[20px] text-[#64B5F6] hover:text-[#288ff7]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-medium  leading-[20px] text-[#64B5F6] hover:text-[#288ff7]"
            >
              Terms of Service
            </a>
          </span>
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="text-white size-[30px] md:size-[40px] lg:size-[52px] rounded-full bg-[#0081FE] flex items-center justify-center cursor-pointer transition-all duration-150 hover:bg-[#0070E0] active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0081FE] focus-visible:ring-offset-2 "
        >
          <FaArrowUp className="size-[15px] md:size-[20px]" />
        </button>
      </div>
    </footer>
  );
}
