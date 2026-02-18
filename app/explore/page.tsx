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

export default function Explore() {
  return (
    <main className="font-int bg-[#F3F4F6]">
      <Header />

      {/* ── Hero Section ── */}
      <section className="h-[603px] w-full relative overflow-hidden">
        <Image
          src="/explore-hero.png"
          alt="hero image"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 bg-[#000000]/45 pl-[50px] pb-[200px] flex flex-col justify-end">
          <h1 className="font-bold text-white text-[48px] leading-[61px]">
            Chuks Kitchen
          </h1>
          <p className="text-[24px] leading-[34px] font-bold text-white">
            Chuks Kitchen Nigerian Home Cooking.
          </p>
        </div>
      </section>

      {/* ── Popular ── */}
      <section className="mt-[50px] px-[48px]">
        <h2 className="text-[32px] font-bold leading-[42px] text-[#1F2937] mb-[20px]">
          Popular
        </h2>

        <div className="flex flex-wrap gap-[63px_48px]">
          {explorePopular.map((item, index) => (
            <div
              key={index}
              className="w-[416px] h-[465px] bg-white rounded-[8px] flex flex-col items-center"
            >
              <div className="relative w-full h-[222px]">
                <Image
                  fill
                  src={item.img}
                  alt={item.name}
                  className="object-cover rounded-[8px_8px_0_0]"
                />
              </div>
              <div className="p-[39px_17px_46px] flex-1 w-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] font-semibold leading-[1.42] text-left text-[#1F2937]">
                    {item.name}
                  </h3>
                  <p className="font-medium text-[16px] leading-normal text-[#6B7280]">
                    {item.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="font-semibold text-[15px] leading-[24px] text-[#FF7A18]">
                    {item.price}
                  </p>
                  <button
                    className="w-[40px] h-[40px] bg-[#FF7A18] rounded-full flex justify-center items-center hover:bg-[#E86B10] active:scale-95 transition-all"
                    aria-label="Add to cart"
                  >
                    <img src="/plus.svg" alt="plus" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Jollof Rice & Entrees ── */}
      <section className="mt-[50px] px-[48px]">
        <h2 className="text-[32px] font-bold leading-[42px] text-[#1F2937] mb-[20px]">
          Jollof Rice &amp; Entrees
        </h2>

        <div className="flex flex-wrap gap-[63px_48px]">
          {entrees.map((item, index) => (
            <div
              key={index}
              className="w-[416px] h-[465px] bg-white rounded-[8px] flex flex-col items-center"
            >
              <div className="relative w-full h-[222px]">
                <Image
                  fill
                  src={item.img}
                  alt={item.name}
                  className="object-cover rounded-[8px_8px_0_0]"
                />
              </div>
              <div className="p-[39px_17px_46px] flex-1 w-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] font-semibold leading-[1.42] text-left text-[#1F2937]">
                    {item.name}
                  </h3>
                  <p className="font-medium text-[16px] leading-normal text-[#6B7280]">
                    {item.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="font-semibold text-[15px] leading-[24px] text-[#FF7A18]">
                    {item.price}
                  </p>
                  <button
                    className="w-[40px] h-[40px] bg-[#FF7A18] rounded-full flex justify-center items-center hover:bg-[#E86B10] active:scale-95 transition-all"
                    aria-label="Add to cart"
                  >
                    <img src="/plus.svg" alt="plus" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Swallow & Soups ── */}
      <section className="mt-[50px] px-[48px] mb-[232px]">
        <h2 className="text-[32px] font-bold leading-[42px] text-[#1F2937] mb-[20px]">
          Swallow &amp; Soups
        </h2>

        <div className="flex flex-wrap gap-[63px_48px]">
          {swallow.map((item, index) => (
            <div
              key={index}
              className="w-[416px] h-[465px] bg-white rounded-[8px] flex flex-col items-center"
            >
              <div className="relative w-full h-[222px]">
                <Image
                  fill
                  src={item.img}
                  alt={item.name}
                  className="object-cover rounded-[8px_8px_0_0]"
                />
              </div>
              <div className="p-[39px_17px_46px] flex-1 w-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] font-semibold leading-[1.42] text-left text-[#1F2937]">
                    {item.name}
                  </h3>
                  <p className="font-medium text-[16px] leading-normal text-[#6B7280]">
                    {item.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="font-semibold text-[15px] leading-[24px] text-[#FF7A18]">
                    {item.price}
                  </p>
                  <button
                    className="w-[40px] h-[40px] bg-[#FF7A18] rounded-full flex justify-center items-center hover:bg-[#E86B10] active:scale-95 transition-all"
                    aria-label="Add to cart"
                  >
                    <img src="/plus.svg" alt="plus" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
