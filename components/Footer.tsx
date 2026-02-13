import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" footer hidden md:flex flex-col items-center text-center w-full h-auto xl:h-[449px] py-[65px] gap-[4px] ">
      <div className="flex flex-row lg:justify-between xl:justify-center items-start px-6 md:px-10 lg:px-20 gap-8 lg:gap-[60px] xl:gap-[101px] ">
        <div className="flex flex-col items-start w-full lg:w-[22%]  xl:w-[229.25px] h-auto xl:h-[218px] ">
          <h2 className="font-island text-[#FF7A18] leading-[37px] text-[37px] ">
            Chuks Kitchen
          </h2>
          <p className="font-jost text-[#FFFFFF] lg:text-[20px] xl:text-[24px] leading-[36px] text-left ">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>

        <div className="flex flex-col items-start w-full lg:w-fit  xl:w-[229.25px] h-auto xl:h-[218px] ">
          <h2 className="font-jost text-[#FFFFFF] text-[24px] leading-[36px] text-left ">
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

        <div className="flex flex-col items-start w-full lg:w-fit  xl:w-[229.25px] h-auto xl:h-[218px] ">
          <h2 className="font-jost text-[#FFFFFF] text-[24px] leading-[36px] text-left ">
            Contact Us
          </h2>
          <ul className="flex flex-col items-start w-full xl:w-[229.25px] h-auto xl:h-[218px] ">
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
                className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF] "
              >
                123 Taste Blvd, Lagos, Nigeria
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start w-full lg:w-fit  xl:w-[229.25px] h-auto xl:h-[218px] ">
          <h2 className="font-jost text-[#FFFFFF] text-[24px] leading-[36px] text-left ">
            Follow Us
          </h2>
          <ul className="flex flex-col items-start w-full xl:w-[229.25px] h-auto xl:h-[218px] ">
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

      <div className="mt-[36px] flex justify-between items-center w-full px-6 md:px-10 lg:px-20 xl:px-[110px] ">
        <p className="font-poppins text-[12px] leading-[20px] text-[#FFFFFF]/65 ">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <button className="text-white size-[52px] rounded-full bg-[#0081FE] flex items-center justify-center cursor-pointer  ">
          <FaArrowUp className="size-[20px]" />
        </button>
      </div>
    </footer>
  );
}
