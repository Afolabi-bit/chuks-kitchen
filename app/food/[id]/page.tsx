import Image from "next/image";
import Link from "next/link";
import {
  chefsSpecials,
  explorePopular,
  entrees,
  swallow,
} from "../../../data.js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoodDetailsForm from "@/components/FoodDetailsForm";

// Combine all food arrays into one lookup
const allFoods = [...chefsSpecials, ...explorePopular, ...entrees, ...swallow];

function getFoodById(id: string) {
  return allFoods.find((item) => item.id === id);
}

export default async function FoodDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const food = getFoodById(id);

  if (!food) {
    return (
      <main className="font-int bg-[#F3F4F6] min-h-screen">
        <Header />
        <div className="flex flex-col items-center justify-center py-[200px] px-[24px]">
          <h1 className="text-[32px] font-bold text-[#1F2937] mb-[16px]">
            Food Not Found
          </h1>
          <p className="text-[16px] text-[#6B7280] mb-[32px]">
            Sorry, we couldn&apos;t find the dish you&apos;re looking for.
          </p>
          <Link
            href="/explore"
            className="px-[32px] py-[14px] bg-[#FF7A18] text-white font-semibold rounded-[10px] hover:bg-[#E56A0E] transition-colors"
          >
            Back to Menu
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="font-int bg-[#F3F4F6] min-h-screen">
      <Header bg="white" />

      <section className="flex  w-full h-[1061px]">
        <div className="relative w-[661px] h-full">
          <Image
            src={food.img}
            alt={food.name}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Food details */}
        <div className="flex-1 h-full bg-[#F3F4F6] p-[15px_55px_24px_41px] flex items-center justify-center">
          <div className="w-[683px] h-[1031.09px] flex flex-col items-end p-[19px_17px] gap-[4px] bg-white rounded-[4px] overflow-y-auto">
            <FoodDetailsForm
              name={food.name}
              price={food.price}
              desc={food.desc}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
