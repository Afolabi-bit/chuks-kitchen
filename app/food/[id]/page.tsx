/**
 * Food Detail Page (/food/[id])
 *
 * Displays detailed information about a specific food item.
 * Looks up the item by id across all data arrays. If the item
 * is not found, a 404-style fallback with a "Back to Menu" link is shown.
 *
 * Layout:
 * - Mobile / tablet: stacked vertically (image on top, form below)
 * - Laptop (lg+): side-by-side (image left, form right)
 * - Desktop (xl): fixed 661px image, max 683px form panel
 */

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

// Merge all food data arrays so any item can be found by its unique id
const allFoods = [...chefsSpecials, ...explorePopular, ...entrees, ...swallow];

// Finds a food item by its id string, returns undefined if not found
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

  // If the food item does not exist, show a friendly 404 message
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

      {/* Main layout -- stacks on mobile/tablet, side-by-side on lg+ */}
      <section className="flex flex-col lg:flex-row w-full lg:min-h-screen xl:h-[1061px]">
        {/* Food image -- full-width on smaller screens, partial width on lg+ */}
        <div className="relative w-full lg:w-[45%] xl:w-[661px] h-[300px] md:h-[400px] lg:h-auto shrink-0">
          <Image
            src={food.img}
            alt={food.name}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Form panel -- contains the white card with FoodDetailsForm */}
        <div className="flex-1 bg-[#F3F4F6] p-[14px] md:p-[15px_24px_24px] lg:p-[15px_30px_24px_30px] xl:p-[15px_55px_24px_41px] flex items-start lg:items-center justify-center">
          {/* White card wrapper with scrollable overflow */}
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
