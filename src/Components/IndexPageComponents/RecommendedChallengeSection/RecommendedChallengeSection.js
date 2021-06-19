import React from "react";
import {
  Plus,
  Dumbell,
  ShinyApple,
  HeartBeat,
  Drop,
  ChevronRightDark,
  ChevronLeft,
} from "../indexpage-icons-svg";

const CardDetails = [
  {
    bgGrad: "bg-gradient-to-br from-pink-300 to-indigo-500",
    imgLink: "/asset/running.png",
    icon: <Dumbell />,
    title: "High Intensity Training",
    desc: "Running in the nature",
  },
  {
    bgGrad: "bg-gradient-to-br from-green-300 to-blue-400",
    imgLink: "/asset/eating.png",
    icon: <ShinyApple />,
    title: "Colorful evening meal",
    desc: "Vegetables for recovery",
  },
  {
    bgGrad: "bg-gradient-to-br from-pink-400 to-red-500",
    imgLink: "/asset/yoga.png",
    icon: <HeartBeat />,
    title: "Meditate for 5 min",
    desc: "Train your mind",
  },
  {
    bgGrad: "bg-gradient-to-br from-blue-400 to-indigo-600",
    imgLink: "/asset/drinking.png",
    icon: <Drop />,
    title: "Skin hydration",
    desc: "Drink spinach smoothie",
  },
];

const RecommendedChallengeSection = () => {
  return (
    <div className="space-y-5">
      <div className="flex justify-between place-items-center">
        <h2 className="font-semibold text-xl tracking-wide">
          Recommended Challenges
        </h2>
        <div className="flex font-semibold space-x-1">
          <ChevronLeft />
          <ChevronRightDark />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 place-items-center md:justify-between">
        {CardDetails.map((card, key) => (
          <div
            key={key}
            className={`flex-grow md:flex relative justify-center overflow-hidden w-full max-w-sm lg:w-1/4 h-60 rounded-2xl shadow-lg hover:shadow-none ${card.bgGrad}`}
          >
            <a
              href="#"
              className="h-10 w-10 absolute bg-white bg-opacity-30 rounded-full right-4 top-4 flex place-items-center transform transition duration-300 ease-linear hover:scale-125"
            >
              <Plus />
            </a>
            <img
              src={card.imgLink}
              className="absolute mt-4 filter saturate-125 contrast-125 object-center"
              width={200}
              height={200}
            />
            <div
              id="cardInfo"
              className="absolute h-16 bottom-0 w-full backdrop-filter backdrop-blur-xl bg-opacity-20 bg-gray-200 flex place-items-center p-2 rounded-b-2xl"
            >
              <div className="rounded-xl bg-white h-10 w-10 flex place-items-center">
                {card.icon}
              </div>
              <div className="p-3 text-white">
                <h4 className="font-bold text-sm">{card.title}</h4>
                <p className="text-xs">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedChallengeSection;
