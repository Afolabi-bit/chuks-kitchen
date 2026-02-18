import Image from "next/image";
import { chefsSpecials, popularCategories } from "../data.js";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-int bg-[#F3F4F6]">
      <header className="flex justify-between items-start h-[90px] w-full p-[18px_48px] gap-[45px]">
        <h2 className="font-island font-medium text-[#FF7A18] leading-[41px] text-[32px] sm:text-[40.8px] ">
          Chuks Kitchen
        </h2>

        <ul className="flex flex-1 items-center justify-center gap-[10px] p-[10px] ">
          <li className="flex-1 font-medium text-[16px] leading-[24px] text-[#1F2937] hover:text-[#FF7A18]">
            <a href="#">Home</a>
          </li>
          <li className="flex-1 font-medium text-[16px] leading-[24px] text-[#1F2937] hover:text-[#FF7A18]">
            <a href="#">Explore</a>
          </li>
          <li className="flex-1 font-medium text-[16px] leading-[24px] text-[#1F2937] hover:text-[#FF7A18]">
            <a href="#">My Orders</a>
          </li>
          <li className="flex-1 font-medium text-[16px] leading-[24px] text-[#1F2937] hover:text-[#FF7A18]">
            <a href="#">Account</a>
          </li>
        </ul>

        <button className="p-[15px_46px] w-[160px] h-[54px] bg-[#FF7A18] rounded-[10px] font-semibold text-[16px] leading-[24px] text-white ">
          Login
        </button>
      </header>

      <section className="h-[941px] w-full relative">
        <div className="w-full h-full absolute top-0 left-0 z-o">
          <Image
            src="/Home_hero.png"
            alt="hero image"
            fill
            className="object-cover object-[0_-80px]"
          />
        </div>

        <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#000000]/45 pt-[285px] pl-[48px] flex flex-col gap-[42px]">
          <h1 className="font-bold text-white text-[48px] leading-[61px]  ">
            The Heart of Nigerian Home <br /> Cooking
          </h1>
          <p className="text-[32px] leading-[42px] font-bold text-white ">
            Handcrafted with passion, delivered with care.
          </p>
          <button className="w-fit p-[15px_46px] bg-[#FF7A18] rounded-[10px] font-semibold text-[16px] leading-[24px] text-white ">
            Discover what’s new
          </button>
        </div>

        <form className="bg-white absolute w-[1069px] h-[78px] z-20 left-[calc(50%-1069px/2)] bottom-[-39px] rounded-[8px] p-[16px] flex gap-[16px] justify-center items-center shadow-[0px_6px_30px_5px_rgba(0,0,0,0.12)]">
          <div className="flex justify-center items-center size-[46px]">
            <img src="/search-icon.png" alt="search" />
          </div>
          <input
            type="text"
            placeholder="What are you craving today?"
            className="flex-1 text-[24px] font-semibold leading-[34px] text-[#1F2937] placeholder:text-[24px] placeholder:font-semibold placeholder:leading-[34px] placeholder:text-[#1F2937] outline-none"
          />
        </form>
      </section>

      <section className="py-[139px] px-[55px] ">
        <h2 className="font-bold text-center text-[32px] leading-[42px] text-[#1F2937] pb-[50px]">
          Popular Categories
        </h2>

        <div className="flex flex-wrap gap-[70px] justify-center">
          {popularCategories.map((category, index) => (
            <div
              key={index}
              className="w-[390px] h-[393px] bg-white rounded-[8px] flex flex-col items-center"
            >
              <div className="relative w-full h-[222px]">
                <Image
                  fill
                  src={category.img}
                  alt={category.name}
                  className="object-cover rounded-[8px_8px_0_0]"
                />
              </div>
              <p className="flex-1 flex items-center justify-center text-[24px] font-medium leading-[34px] text-center text-[#1F2937]">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[139px] px-[55px] ">
        <h2 className="font-bold text-center text-[32px] leading-[42px] text-[#1F2937] pb-[50px]">
          Chef’s Specials
        </h2>

        <div className="flex flex-wrap gap-[70px] justify-center">
          {chefsSpecials.map((special, index) => (
            <div
              key={index}
              className="w-[390px] h-[487px] bg-white rounded-[8px] flex flex-col items-center"
            >
              <div className="relative w-full h-[222px]">
                <Image
                  fill
                  src={special.img}
                  alt={special.name}
                  className="object-cover rounded-[8px_8px_0_0]"
                />
              </div>
              <div className="p-[25px_17px_46px] h-[265px] flex flex-col justify-between">
                <div>
                  <h3 className="flex-1  text-[24px] font-medium leading-[34px] text-left text-[#1F2937]">
                    {special.name}
                  </h3>
                  <p className="font-medium text-[16px] leading-[24px] text-[#1F2937]">
                    {special.desc}
                  </p>
                </div>

                <div className="flex justify-between w-full mt-[25px]">
                  <p className="font-medium text-[16px] leading-[24px] text-[#FF7A18] ">
                    #3,500
                  </p>
                  <button className="w-[160px] h-[54px] bg-[#FF7A18] rounded-[10px] font-semibold text-[16px] leading-[24px] text-white flex justify-center items-center">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-[610px] relative ">
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <Image src="/beans.png" alt="beans" fill className="object-cover" />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#000000]/45 py-[164px] pl-[48px] flex flex-col gap-[10px]">
          <h2 className="font-extrabold text-[48px] text-white leading-[140%] ">
            Introducing Our New Menu Additions!
          </h2>
          <p className="font-semibold text-white text-[24px] leading-[34px] ">
            Explore exciting new dishes, crafted with the freshest <br />{" "}
            ingredients and authentic Nigerian flavors. Limited time <br />{" "}
            offer!
          </p>
          <button className="w-[215px] h-[54px] bg-[#FF7A18] rounded-[10px] font-semibold text-[16px] leading-[24px] text-white flex justify-center items-center ">
            Discover what’s new
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
