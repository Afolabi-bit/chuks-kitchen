/**
 * Auth Page (/auth)
 *
 * Handles both Login and Create Account flows on a single page.
 * Uses client-side state to toggle between the two forms.
 * Features a split layout with a branded hero panel on the left
 * (desktop only) and the active form on the right.
 */

"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function Auth() {
  // Tracks which form is displayed: "login" or "create"
  const [form, setForm] = useState("login");
  return (
    <main className="font-int">
      {/* Page wrapper -- split layout with hero image and form panel */}
      <section className=" md:flex min-h-screen xl:h-[1024px]">
        {/* Left panel -- hero image with orange overlay and welcome text (lg+ only) */}
        <div className="hidden lg:block lg:h-auto lg:w-[45%] xl:w-[50%] h-full relative">
          <Image
            src="/onboarding-desktop.png"
            alt="image of family feasting"
            fill
            className="w-full h-full object-cover z-0 absolute"
          />
          <div className="absolute w-full h-full top-0 left-0 z-10 bg-[#FF7A18]/70 flex flex-col items-center pt-[349px]">
            <div className="max-w-[410px] h-auti">
              <h1 className="font-bold text-[48px] leading-[61px] text-white text-center  ">
                Chuks Kitchen
              </h1>

              <p className="font-medium text-[24px] leading-[34px] text-center text-white ">
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </p>
            </div>
          </div>
        </div>

        {/* Right panel -- Login form (shown when form === "login") */}
        {form === "login" && (
          <div className="w-full bg-[#F3F4F6] lg:w-[55%] xl:w-[50%] h-full relative flex flex-col  pt-[60px] pb-[80px] px-[16px] md:pt-[140px] md:pb-[120px] md:px-[40px] lg:pt-[208px] lg:pb-[197px] lg:px-[40px] xl:pl-[133px] xl:pr-[127px] items-center xl:items-start ">
            {/*  */}
            <div className="w-full max-w-[470px] h-auto flex flex-col items-center">
              {/*  */}
              {/*  */}
              <div className="flex flex-col items-center w-full lg:px-0 xl:w-[574px]">
                <h2 className="font-island font-medium text-[#FF7A18] leading-[41px] text-[32px] sm:text-[40.8px] ">
                  Chuks Kitchen
                </h2>
                <h2 className="text-[24px] leading-[34px] font-medium  ">
                  Login your Account
                </h2>
              </div>

              {/*  */}
              <form className="w-full flex flex-col items-center gap-[16px]">
                <div className=" w-full flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[6px] ">
                    <label
                      htmlFor="Email"
                      className="font-inter font-medium text-[#3B4758] leading-[20px] text-[14px] "
                    >
                      Email
                    </label>
                    <div className="w-full h-[54px] border border-[#BDBDBD] p-[4px_16px] rounded-[8px] flex items-center gap-[15px] transition-colors duration-200 focus-within:border-[#FF7A18]">
                      <img src="/mail.svg" alt="lock icon" />
                      <input
                        type="email"
                        id="Email"
                        placeholder="name@gmail.com"
                        className=" placeholder:text-[#000000] placeholder:font-inter placeholder:font-normal placeholder:text-[16px] placeholder:leading-[140%] placeholder:tracking-[-0.02em] text-[#000000] font-inter font-normal text-[16px] leading-[140%] tracking-[-0.02em] flex-1 outline-none "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label
                      htmlFor="password"
                      className="font-inter font-medium text-[#3B4758] leading-[20px] text-[14px] "
                    >
                      Password
                    </label>
                    <div className="w-full h-[54px] border border-[#BDBDBD] p-[4px_16px] rounded-[8px] flex items-center gap-[15px] transition-colors duration-200 focus-within:border-[#FF7A18]">
                      <img src="/lock.svg" alt="lock icon" />
                      <input
                        type="password"
                        id="password"
                        placeholder="******"
                        className=" placeholder:text-[#000000] placeholder:font-inter placeholder:font-normal placeholder:text-[16px] placeholder:leading-[140%] placeholder:tracking-[-0.02em] flex-1 outline-none"
                      />
                      <img
                        src="/visibility_off.svg"
                        alt="visibility off icon"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-[12px] leading-[16px] text-[#1E88E5] self-end transition-colors duration-200 hover:text-[#1565C0] hover:underline active:text-[#0D47A1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] rounded-sm "
                >
                  Forgot Password?
                </a>
                <button
                  type="submit"
                  className="w-full py-[18px] rounded-[10px] bg-[#FF7A18] text-[16px] leading-[24px] font-semibold text-[#FFFFFF] transition-all duration-200 hover:bg-[#E56A0E] active:scale-[0.98] active:bg-[#CC5E0C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] cursor-pointer "
                >
                  Continue
                </button>
                <p className="text-[12px] leading-[16px] text-center ">
                  Or continue with
                </p>
                <div className="flex flex-col gap-[16px] w-full">
                  <button className="flex items-center gap-[15px] w-full bg-white justify-center border border-[#BDBDBD] rounded-[6px] px-[16px] h-[48px] transition-all duration-200 hover:bg-[#F5F5F5] hover:border-[#9E9E9E] active:scale-[0.98] active:bg-[#EEEEEE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] cursor-pointer ">
                    <img
                      src="/google.png"
                      alt="google icon"
                      className="size-[27px]"
                    />
                    <span className="text-[14px] leading-[16px] text-center text-[#3B4758] ">
                      Continue with Google
                    </span>
                  </button>
                  <button className="flex items-center gap-[15px] w-full bg-white justify-center border border-[#BDBDBD] rounded-[6px] px-[16px] h-[48px] transition-all duration-200 hover:bg-[#F5F5F5] hover:border-[#9E9E9E] active:scale-[0.98] active:bg-[#EEEEEE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] cursor-pointer ">
                    <img src="/facebook.svg" alt="facebook icon" />
                    <span className="text-[14px] leading-[16px] text-center text-[#3B4758] ">
                      Continue with Facebook
                    </span>
                  </button>
                </div>
                <p className="text-[12px] leading-[16px] text-center text-[#616161] ">
                  Don't have an account?{" "}
                  <span
                    onClick={() => setForm("create")}
                    className="text-[#1E88E5] cursor-pointer transition-colors duration-200 hover:text-[#1565C0] hover:underline active:text-[#0D47A1] "
                  >
                    Create an account
                  </span>
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Right panel -- Create Account form (shown when form === "create") */}
        {form === "create" && (
          <div className="w-full bg-[#F3F4F6] lg:w-[55%] xl:w-[50%] h-full relative flex flex-col pt-[60px] pb-[60px] px-[16px] md:pt-[80px] md:pb-[80px] md:px-[40px] lg:pt-[94px] lg:pb-[108px] lg:px-[40px] xl:pl-[133px] xl:pr-[127px] items-center xl:items-start ">
            {/*  */}
            <div className="w-full max-w-[470px] h-auto flex flex-col items-center">
              {/*  */}
              {/*  */}
              <div className="flex flex-col items-center w-full lg:px-0 xl:w-[574px]">
                <h2 className="font-island font-medium text-[#FF7A18] leading-[41px] text-[32px] sm:text-[40.8px] ">
                  Chuks Kitchen
                </h2>
                <h2 className="text-[24px] leading-[34px] font-medium  ">
                  Create Your Account
                </h2>
              </div>

              {/*  */}
              <form className="w-full flex flex-col items-center gap-[16px]">
                <div className=" w-full flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[6px] ">
                    <label
                      htmlFor="Email"
                      className="font-inter font-medium text-[#3B4758] leading-[20px] text-[14px] "
                    >
                      Email
                    </label>
                    <div className="w-full h-[54px] border border-[#BDBDBD] p-[4px_16px] rounded-[8px] flex items-center gap-[15px] transition-colors duration-200 focus-within:border-[#FF7A18]">
                      <img src="/mail.svg" alt="lock icon" />
                      <input
                        type="email"
                        id="Email"
                        placeholder="name@gmail.com"
                        className=" placeholder:text-[#000000] placeholder:font-inter placeholder:font-normal placeholder:text-[16px] placeholder:leading-[140%] placeholder:tracking-[-0.02em] text-[#000000] font-inter font-normal text-[16px] leading-[140%] tracking-[-0.02em] flex-1 outline-none "
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px] ">
                    <label
                      htmlFor="phone-number"
                      className="font-inter font-medium text-[#3B4758] leading-[20px] text-[14px] "
                    >
                      Phone Number
                    </label>
                    <div className="w-full h-[54px] border border-[#BDBDBD] p-[4px_16px] rounded-[8px] flex items-center gap-[15px] transition-colors duration-200 focus-within:border-[#FF7A18]">
                      <img src="/mail.svg" alt="lock icon" />
                      <input
                        type="number"
                        id="phone-number"
                        placeholder="8123340690"
                        className=" placeholder:text-[#000000] placeholder:font-inter placeholder:font-normal placeholder:text-[16px] placeholder:leading-[140%] placeholder:tracking-[-0.02em] text-[#000000] font-inter font-normal text-[16px] leading-[140%] tracking-[-0.02em] flex-1 outline-none "
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <label
                      htmlFor="password"
                      className="font-inter font-medium text-[#3B4758] leading-[20px] text-[14px] "
                    >
                      Password
                    </label>
                    <div className="w-full h-[54px] border border-[#BDBDBD] p-[4px_16px] rounded-[8px] flex items-center gap-[15px] transition-colors duration-200 focus-within:border-[#FF7A18]">
                      <img src="/lock.svg" alt="lock icon" />
                      <input
                        type="password"
                        id="password"
                        placeholder="******"
                        className=" placeholder:text-[#000000] placeholder:font-inter placeholder:font-normal placeholder:text-[16px] placeholder:leading-[140%] placeholder:tracking-[-0.02em] flex-1 outline-none"
                      />
                      <img
                        src="/visibility_off.svg"
                        alt="visibility off icon"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <label
                      htmlFor="password"
                      className="font-inter font-medium text-[#3B4758] leading-[20px] text-[14px] "
                    >
                      Confirm Password
                    </label>
                    <div className="w-full h-[54px] border border-[#BDBDBD] p-[4px_16px] rounded-[8px] flex items-center gap-[15px] transition-colors duration-200 focus-within:border-[#FF7A18]">
                      <img src="/lock.svg" alt="lock icon" />
                      <input
                        type="password"
                        id="password"
                        placeholder="******"
                        className=" placeholder:text-[#000000] placeholder:font-inter placeholder:font-normal placeholder:text-[16px] placeholder:leading-[140%] placeholder:tracking-[-0.02em] flex-1 outline-none"
                      />
                      <img
                        src="/visibility_off.svg"
                        alt="visibility off icon"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex self-start gap-[10px]">
                  <input
                    type="checkbox"
                    name="tandc"
                    id="tandc"
                    className="w-[18px] h-[18px]"
                  />
                  <label
                    htmlFor="tandc"
                    className="text-[#616161] font-medium leading-[20px] text-[14px] "
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#1E88E5] transition-colors duration-200 hover:text-[#1565C0] hover:underline active:text-[#0D47A1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] rounded-sm "
                    >
                      Terms &amp; Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#1E88E5] transition-colors duration-200 hover:text-[#1565C0] hover:underline active:text-[#0D47A1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] rounded-sm "
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-[18px] rounded-[10px] bg-[#FF7A18] text-[16px] leading-[24px] font-semibold text-[#FFFFFF] transition-all duration-200 hover:bg-[#E56A0E] active:scale-[0.98] active:bg-[#CC5E0C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] cursor-pointer "
                >
                  Continue
                </button>
                <p className="text-[12px] leading-[16px] text-center ">
                  Or continue with
                </p>
                <div className="flex flex-col gap-[16px] w-full">
                  <button className="flex items-center gap-[15px] w-full bg-white justify-center border border-[#BDBDBD] rounded-[6px] px-[16px] h-[48px] transition-all duration-200 hover:bg-[#F5F5F5] hover:border-[#9E9E9E] active:scale-[0.98] active:bg-[#EEEEEE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] cursor-pointer ">
                    <img
                      src="/google.png"
                      alt="google icon"
                      className="size-[27px]"
                    />
                    <span className="text-[14px] leading-[16px] text-center text-[#3B4758] ">
                      Continue with Google
                    </span>
                  </button>
                  <button className="flex items-center gap-[15px] w-full bg-white justify-center border border-[#BDBDBD] rounded-[6px] px-[16px] h-[48px] transition-all duration-200 hover:bg-[#F5F5F5] hover:border-[#9E9E9E] active:scale-[0.98] active:bg-[#EEEEEE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18] cursor-pointer ">
                    <img src="/facebook.svg" alt="facebook icon" />
                    <span className="text-[14px] leading-[16px] text-center text-[#3B4758] ">
                      Continue with Facebook
                    </span>
                  </button>
                </div>
                <p className="text-[12px] leading-[16px] text-center text-[#616161] ">
                  Already have an account?{" "}
                  <span
                    onClick={() => setForm("login")}
                    className="text-[#1E88E5] cursor-pointer transition-colors duration-200 hover:text-[#1565C0] hover:underline active:text-[#0D47A1] "
                  >
                    Sign in
                  </span>
                </p>
              </form>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
