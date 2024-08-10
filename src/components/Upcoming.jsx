import React, { useState } from "react";
import CardFlip from './CardFlip'
import MarqueeText from "./MarqueeText";
import Photo1 from "../assets/Photo1.png";
import Photo1Bg from "../assets/Diabetes.svg";
import Photo2 from "../assets/Photo2.jpg";
import Photo2BG from '../assets/PCOS.svg'
import Photo3 from "../assets/Photo3.jpg";
import Photo3Bg from "../assets/Keto Diet.svg";
import Thyroid from "../assets/Thyroid.svg";
import KetoDiet from "../assets/Keto Diet.svg";


const Upcoming = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900">
      <div className="mx-20 flex flex-wrap items-center justify-between gap-4 bg-none p-10">
        <div className="flex flex-col">
          <h1 className="text-md font-bold text-red-500">WHY DIET IS IMPORTANT</h1>
          <h2 className="text-4xl text-gray-600 dark:text-gray-200">HOW A HEALTHY DIET CAN IMPROVE YOUR HEALTH</h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center bg-none px-3">
        <div className="flex max-w-7xl flex-wrap justify-center">
          {/* First Line of Boxes */}
          <div className="flex flex-wrap w-full justify-center">

            {
              cardRow1.map((data, index) => (<CardFlip key={index} title={data.title} coverImage={data.coverImage} content={data.content} bgImage={data.bgImage} />))
            }

          </div>

          {/* Second Line of Boxes */}
          <div className="flex flex-wrap w-full justify-center">

            {
              cardRow2.map((data, index) => (<CardFlip key={index} title={data.title} coverImage={data.coverImage} content={data.content} bgImage={data.bgImage} />))
            }

          </div>
        </div>
      </div>
      <MarqueeText />
    </div>
  );
};


const cardRow1 = [
  {
    title: "Diabetes",
    coverImage: Photo1,
    content: "Manage diabetes with a diet low in glycemic index foods, rich in fiber, and balanced in macronutrients. Include whole grains, vegetables, and fruits. Stay hydrated, control portions, and avoid sugary foods. Combine this with regular exercise for optimal health.",
    bgImage: Photo1Bg
  },
  {
    title: "PCOS",
    coverImage: Photo2,
    content: "For PCOS, eat whole foods like fruits, vegetables, lean proteins, and whole grains. Reduce processed foods and sugars. Anti-inflammatory foods like fatty fish, nuts, and leafy greens help. Balanced meals with essential nutrients support hormonal health",
    bgImage: Photo2BG
  },
  {
    title: "Obesity",
    coverImage: Photo3,
    content: "Manage weight with a diet of fruits, vegetables, lean proteins, and whole grains, while limiting sugary drinks and high-calorie snacks. Regular exercise, mindful eating, and portion control enhance efforts. Nutrient-dense foods support weight loss and health.",
    bgImage: Photo3Bg
  },

]


const cardRow2 = [
  {
    title: "Thyroid",
    coverImage: Photo1,
    content: "MaSupport thyroid function with iodine-rich foods, selenium, and zinc. Avoid goitrogens in certain raw cruciferous vegetables and soy. Balanced nutrients aid thyroid hormone production and metabolism, helping manage symptoms and promote health.",
    bgImage: Thyroid
  },
  {
    title: "Keto Diet",
    coverImage: Photo2,
    content: "The keto diet reduces carbs and increases fats, promoting ketosis to burn fat for fuel. It aids weight loss, blood sugar control, and mental clarity. Include healthy fats and moderate protein for a balanced keto lifestyle.",
    bgImage: KetoDiet
  }

]


export default Upcoming;
