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

      <section className="flex flex-col lg:flex-row w-full lg:min-h-screen xl:h-[1061px]">
        <div className="relative w-full lg:w-[45%] xl:w-[661px] h-[300px] md:h-[400px] lg:h-auto shrink-0">
          <Image
            src={food.img}
            alt={food.name}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Food details */}
        <div className="flex-1 bg-[#F3F4F6] p-[14px] md:p-[15px_24px_24px] lg:p-[15px_30px_24px_30px] xl:p-[15px_55px_24px_41px] flex items-start lg:items-center justify-center">
          <div className="w-full xl:max-w-[683px] lg:max-h-[1031px] flex flex-col items-end p-[19px_17px] max-md:p-[14px] gap-[4px] bg-white rounded-[4px] overflow-y-auto">
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
