import Image from "next/image";
import {
  chefsSpecials,
  entrees,
  explorePopular,
  popularCategories,
  swallow,
} from "../../data.js";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuCategories from "@/components/MenuCategories";

export default function Explore() {
  return (
    <main className="font-int bg-[#F3F4F6]">
      <Header />

      {/* ── Hero Section ── */}
      <section className="h-[603px] max-xl:h-[500px] max-lg:h-[420px] max-md:h-[400px] w-full relative overflow-hidden">
        <Image
          src="/explore-hero.png"
          alt="hero image"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 bg-[#000000]/45 pl-[50px] max-lg:pl-[24px] max-md:pl-[20px] max-md:pr-[20px] pb-[200px] max-xl:pb-[160px] max-lg:pb-[120px] max-md:pb-[120px] flex flex-col justify-end">
          <h1 className="font-bold text-white text-[48px] max-xl:text-[40px] max-lg:text-[32px] max-md:text-[28px] leading-[61px] max-xl:leading-[50px] max-lg:leading-[1.3] max-md:leading-[1.3]">
            Chuks Kitchen
          </h1>
          <p className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] leading-[34px] max-lg:leading-[28px] max-md:leading-[24px] font-bold max-md:font-medium text-white">
            Chuks Kitchen Nigerian Home Cooking.
          </p>
        </div>
      </section>

      {/* ── Menu Categories ── */}
      <section className="mt-[82px] px-[48px] max-lg:px-[24px] max-md:px-0 relative z-20">
        <MenuCategories />
      </section>

      {/* ── Popular ── */}
      <section className="mt-[50px] max-md:mt-[30px] px-[48px] max-lg:px-[24px] max-md:px-[16px]">
        <h2
          id="popular"
          className="text-[32px] max-lg:text-[26px] max-md:text-[22px] font-bold leading-[42px] text-[#1F2937] mb-[20px] max-md:mb-[16px] scroll-mt-[20px]"
        >
          Popular
        </h2>

        <div className="grid grid-cols-3 gap-[48px] max-xl:gap-[28px] max-lg:gap-[18px] max-md:grid-cols-1 max-md:gap-[12px]">
          {explorePopular.map((item) => (
            <div
              key={item.id}
              className="h-[465px] max-xl:h-[410px] max-lg:h-[340px] max-md:h-[111px] bg-white rounded-[8px] flex flex-col max-md:flex-row items-center group hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="relative w-full max-md:w-[111px] max-md:shrink-0 h-[222px] max-xl:h-[190px] max-lg:h-[150px] max-md:h-full overflow-hidden rounded-[8px_8px_0_0] max-md:rounded-[8px_0_0_8px]">
                <Image
                  fill
                  src={item.img}
                  alt={item.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-[39px_17px_46px] max-xl:p-[20px_16px_28px] max-lg:p-[14px_12px_16px] max-md:p-[10px_12px] flex-1 w-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[14px] font-semibold leading-[1.42] max-md:leading-[1.2] text-left text-[#1F2937]">
                    {item.name}
                  </h3>
                  <p className="font-medium text-[16px] max-xl:text-[13px] max-lg:text-[12px] max-md:text-[11px] leading-normal max-md:leading-[1.3] text-[#6B7280] max-md:line-clamp-1">
                    {item.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="font-semibold text-[15px] max-lg:text-[13px] max-md:text-[13px] leading-[24px] text-[#FF7A18]">
                    {item.price}
                  </p>
                  <button
                    className="w-[40px] h-[40px] max-lg:w-[34px] max-lg:h-[34px] max-md:w-[30px] max-md:h-[30px] bg-[#FF7A18] rounded-full flex justify-center items-center hover:bg-[#E86B10] active:scale-95 transition-all"
                    aria-label="Add to cart"
                  >
                    <img src="/plus.svg" alt="plus" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="hidden max-md:block w-full mt-[20px] font-int font-normal text-[16px] leading-[140%] text-center tracking-[-0.02em] text-[#1E88E5]">
          View All Categories
        </button>
      </section>

      {/* ── Jollof Rice & Entrees ── */}
      <section className="mt-[50px] max-md:mt-[30px] px-[48px] max-lg:px-[24px] max-md:px-[16px]">
        <h2
          id="entrees"
          className="text-[32px] max-lg:text-[26px] max-md:text-[22px] font-bold leading-[42px] text-[#1F2937] mb-[20px] max-md:mb-[16px] scroll-mt-[20px]"
        >
          Jollof Rice &amp; Entrees
        </h2>

        <div className="grid grid-cols-3 gap-[48px] max-xl:gap-[28px] max-lg:gap-[18px] max-md:grid-cols-1 max-md:gap-[12px]">
          {entrees.map((item) => (
            <div
              key={item.id}
              className="h-[465px] max-xl:h-[410px] max-lg:h-[340px] max-md:h-[111px] bg-white rounded-[8px] flex flex-col max-md:flex-row items-center group hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="relative w-full max-md:w-[111px] max-md:shrink-0 h-[222px] max-xl:h-[190px] max-lg:h-[150px] max-md:h-full overflow-hidden rounded-[8px_8px_0_0] max-md:rounded-[8px_0_0_8px]">
                <Image
                  fill
                  src={item.img}
                  alt={item.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-[39px_17px_46px] max-xl:p-[20px_16px_28px] max-lg:p-[14px_12px_16px] max-md:p-[10px_12px] flex-1 w-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[14px] font-semibold leading-[1.42] max-md:leading-[1.2] text-left text-[#1F2937]">
                    {item.name}
                  </h3>
                  <p className="font-medium text-[16px] max-xl:text-[13px] max-lg:text-[12px] max-md:text-[11px] leading-normal max-md:leading-[1.3] text-[#6B7280] max-md:line-clamp-1">
                    {item.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="font-semibold text-[15px] max-lg:text-[13px] max-md:text-[13px] leading-[24px] text-[#FF7A18]">
                    {item.price}
                  </p>
                  <button
                    className="w-[40px] h-[40px] max-lg:w-[34px] max-lg:h-[34px] max-md:w-[30px] max-md:h-[30px] bg-[#FF7A18] rounded-full flex justify-center items-center hover:bg-[#E86B10] active:scale-95 transition-all"
                    aria-label="Add to cart"
                  >
                    <img src="/plus.svg" alt="plus" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="hidden max-md:block w-full mt-[20px] font-int font-normal text-[16px] leading-[140%] text-center tracking-[-0.02em] text-[#1E88E5]">
          View All Entrees
        </button>
      </section>

      {/* ── Swallow & Soups ── */}
      <section className="mt-[50px] max-md:mt-[30px] px-[48px] max-lg:px-[24px] max-md:px-[16px] mb-[232px] max-md:mb-[60px]">
        <h2
          id="swallow"
          className="text-[32px] max-lg:text-[26px] max-md:text-[22px] font-bold leading-[42px] text-[#1F2937] mb-[20px] max-md:mb-[16px] scroll-mt-[20px]"
        >
          Swallow &amp; Soups
        </h2>

        <div className="grid grid-cols-3 gap-[48px] max-xl:gap-[28px] max-lg:gap-[18px] max-md:grid-cols-1 max-md:gap-[12px]">
          {swallow.map((item) => (
            <div
              key={item.id}
              className="h-[465px] max-xl:h-[410px] max-lg:h-[340px] max-md:h-[111px] bg-white rounded-[8px] flex flex-col max-md:flex-row items-center group hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="relative w-full max-md:w-[111px] max-md:shrink-0 h-[222px] max-xl:h-[190px] max-lg:h-[150px] max-md:h-full overflow-hidden rounded-[8px_8px_0_0] max-md:rounded-[8px_0_0_8px]">
                <Image
                  fill
                  src={item.img}
                  alt={item.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-[39px_17px_46px] max-xl:p-[20px_16px_28px] max-lg:p-[14px_12px_16px] max-md:p-[10px_12px] flex-1 w-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[14px] font-semibold leading-[1.42] max-md:leading-[1.2] text-left text-[#1F2937]">
                    {item.name}
                  </h3>
                  <p className="font-medium text-[16px] max-xl:text-[13px] max-lg:text-[12px] max-md:text-[11px] leading-normal max-md:leading-[1.3] text-[#6B7280] max-md:line-clamp-1">
                    {item.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="font-semibold text-[15px] max-lg:text-[13px] max-md:text-[13px] leading-[24px] text-[#FF7A18]">
                    {item.price}
                  </p>
                  <button
                    className="w-[40px] h-[40px] max-lg:w-[34px] max-lg:h-[34px] max-md:w-[30px] max-md:h-[30px] bg-[#FF7A18] rounded-full flex justify-center items-center hover:bg-[#E86B10] active:scale-95 transition-all"
                    aria-label="Add to cart"
                  >
                    <img src="/plus.svg" alt="plus" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="hidden max-md:block w-full mt-[20px] font-int font-normal text-[16px] leading-[140%] text-center tracking-[-0.02em] text-[#1E88E5]">
          View All Soups
        </button>
      </section>

      <Footer />
    </main>
  );
}
