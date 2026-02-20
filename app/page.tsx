import Image from "next/image";
import { chefsSpecials, popularCategories } from "../data.js";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="font-int bg-[#F3F4F6]">
      <Header />

      {/* ── Hero Section ── */}
      <section className="h-[765px] md:h-[620px] lg:h-[750px] xl:h-[941px] w-full relative">
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <Image
            src="/Home_hero.png"
            alt="hero image"
            fill
            className="object-cover xl:object-[0_-80px]"
          />
        </div>

        <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#000000]/45 pt-[263px] md:pt-[190px] lg:pt-[240px] xl:pt-[285px] pl-[8px] md:pl-[32px] lg:pl-[48px] xl:pl-[48px] pr-[8px] md:pr-[32px] lg:pr-0 flex flex-col gap-[24px] md:gap-[24px] lg:gap-[30px] xl:gap-[42px]">
          <h1 className="font-bold text-white text-[28px] md:text-[34px] lg:text-[40px] xl:text-[48px] leading-[1.27]">
            The Heart of Nigerian Home <br className="hidden md:block" />{" "}
            Cooking
          </h1>
          <p className="text-[16px] leading-[24px] font-medium md:text-[24px] lg:text-[28px] xl:text-[32px] md:leading-[1.32] md:font-bold text-white">
            Handcrafted with passion, delivered with care.
          </p>
          <button className="w-fit p-[12px_32px] lg:p-[15px_46px] bg-[#FF7A18] rounded-[10px] font-semibold text-[14px] lg:text-[16px] leading-[24px] text-white">
            Discover what&apos;s new
          </button>
        </div>

        <form className="bg-white absolute w-[90%] md:w-[85%] lg:w-[80%] xl:w-[1069px] h-[60px] md:h-[66px] lg:h-[72px] xl:h-[78px] z-20 left-1/2 -translate-x-1/2 bottom-[-30px] md:bottom-[-33px] lg:bottom-[-36px] xl:bottom-[-39px] rounded-[8px] p-[12px] md:p-[14px] lg:p-[16px] flex gap-[12px] md:gap-[14px] lg:gap-[16px] justify-center items-center shadow-[0px_6px_30px_5px_rgba(0,0,0,0.12)]">
          <div className="flex justify-center items-center size-[36px] md:size-[40px] lg:size-[44px] xl:size-[46px]">
            <img src="/search-icon.png" alt="search" />
          </div>
          <input
            type="text"
            placeholder="What are you craving today?"
            className="flex-1 text-[16px] md:text-[18px] lg:text-[21px] xl:text-[24px] font-semibold leading-[34px] text-[#1F2937] placeholder:text-[16px] md:placeholder:text-[18px] lg:placeholder:text-[21px] xl:placeholder:text-[24px] placeholder:font-semibold placeholder:leading-[34px] placeholder:text-[#1F2937] outline-none"
          />
        </form>
      </section>

      {/* ── Popular Categories ── */}
      <section className="py-[80px] md:py-[80px] lg:py-[100px] xl:py-[139px] px-[24px] md:px-[24px] lg:px-[48px] xl:px-[55px]">
        <h2 className="font-bold text-center text-[24px] md:text-[26px] lg:text-[30px] xl:text-[32px] leading-[1.32] text-[#1F2937] pb-[30px] md:pb-[32px] lg:pb-[40px] xl:pb-[50px]">
          Popular Categories
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-[16px] md:gap-[18px] lg:gap-[28px] xl:gap-[70px] md:justify-center">
          {popularCategories.map((category, index) => (
            <div
              key={index}
              className={`w-full md:w-[220px] lg:w-[280px] xl:w-[390px] h-auto md:h-[260px] lg:h-[330px] xl:h-[393px] bg-white rounded-[8px] flex flex-col items-center group hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${
                index >= 3 ? "hidden md:flex" : ""
              }`}
            >
              <div className="relative w-full h-[200px] md:h-[150px] lg:h-[190px] xl:h-[222px] overflow-hidden rounded-[8px_8px_0_0]">
                <Image
                  fill
                  src={category.img}
                  alt={category.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="flex-1 flex items-center justify-center text-[16px] md:text-[15px] lg:text-[18px] xl:text-[24px] font-medium leading-[1.42] text-center text-[#1F2937] p-[8px] md:p-[6px] lg:p-[8px]">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        <button className="md:hidden w-full mt-[20px] font-int font-normal text-[16px] leading-[140%] text-center tracking-[-0.02em] text-[#1E88E5]">
          View All Categories
        </button>
      </section>

      {/* ── Chef's Specials ── */}
      <section className="py-[80px] md:py-[80px] lg:py-[100px] xl:py-[139px] px-[24px] md:px-[24px] lg:px-[48px] xl:px-[55px]">
        <h2 className="font-bold text-center text-[24px] md:text-[26px] lg:text-[30px] xl:text-[32px] leading-[1.32] text-[#1F2937] pb-[30px] md:pb-[32px] lg:pb-[40px] xl:pb-[50px]">
          Chef&apos;s Specials
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-[16px] md:gap-[18px] lg:gap-[28px] xl:gap-[70px] md:justify-center">
          {chefsSpecials.map((special, index) => (
            <div
              key={index}
              className={`w-full md:w-[220px] lg:w-[280px] xl:w-[390px] h-auto md:h-[340px] lg:h-[410px] xl:h-[487px] bg-white rounded-[8px] flex flex-col items-center group hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${
                index >= 3 ? "hidden md:flex" : ""
              }`}
            >
              <div className="relative w-full h-[200px] md:h-[150px] lg:h-[190px] xl:h-[222px] overflow-hidden rounded-[8px_8px_0_0]">
                <Image
                  fill
                  src={special.img}
                  alt={special.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-[16px_12px_24px] md:p-[14px_12px_16px] lg:p-[20px_16px_28px] xl:p-[25px_17px_46px] flex-1 w-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] md:text-[14px] lg:text-[18px] xl:text-[24px] font-semibold leading-[1.42] text-left text-[#1F2937]">
                    {special.name}
                  </h3>
                  <p className="font-medium text-[13px] md:text-[12px] lg:text-[13px] xl:text-[16px] leading-normal text-[#6B7280]">
                    {special.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full mt-[16px] md:mt-[12px] lg:mt-[16px] xl:mt-[25px]">
                  <p className="font-semibold text-[14px] md:text-[13px] lg:text-[15px] leading-[24px] text-[#FF7A18]">
                    #3,500
                  </p>
                  <button className="w-[110px] md:w-[100px] lg:w-[120px] xl:w-[160px] h-[40px] md:h-[34px] lg:h-[40px] xl:h-[54px] bg-[#FF7A18] rounded-[8px] font-semibold text-[13px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-[24px] text-white flex justify-center items-center">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="md:hidden w-full mt-[20px] font-int font-normal text-[16px] leading-[140%] text-center tracking-[-0.02em] text-[#1E88E5]">
          View All Specials
        </button>
      </section>

      {/* ── CTA / New Menu Section ── */}
      <section className="w-full h-[656px] md:h-[480px] lg:h-[540px] xl:h-[610px] relative">
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <Image src="/beans.png" alt="beans" fill className="object-cover" />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#000000]/45 py-[60px] md:py-[110px] lg:py-[130px] xl:py-[164px] pl-[20px] md:pl-[32px] lg:pl-[48px] xl:pl-[48px] pr-[20px] md:pr-[32px] lg:pr-0 flex flex-col justify-center md:justify-start gap-[10px] md:gap-[12px] lg:gap-[14px]">
          <h2 className="font-bold md:font-extrabold text-[32px] leading-[40px] md:text-[34px] lg:text-[40px] xl:text-[48px] text-white md:leading-[140%]">
            Introducing Our New Menu Additions!
          </h2>
          <p className="font-semibold text-white text-[20px] leading-[28px] md:text-[20px] lg:text-[21px] xl:text-[24px] md:leading-[1.42]">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <button className="w-[180px] md:w-[190px] lg:w-[200px] xl:w-[215px] h-[50px] md:h-[48px] lg:h-[50px] xl:h-[54px] bg-[#FF7A18] rounded-[10px] font-semibold text-[14px] lg:text-[16px] leading-[24px] text-white flex justify-center items-center">
            Discover what&apos;s new
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
