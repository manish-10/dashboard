import React from "react";
import { ChevronRightGreen } from "../indexpage-icons-svg";

const DailyTips = [
  {
    title: "Mindfulness",
    desc: "Do one-hour yoga for improving your body balance, flexibility and strength.",
  },
  {
    title: "Get more of your day",
    desc: "Wake up 40 min before the usual and go for a morning walk in the park.",
  },
  {
    title: "Early Bedtime",
    desc: "Go to sleep more at the same the same hour everytimme.",
  },
];

const DailyTipsSection = () => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between px-2 pb-2">
        <h3 className="font-semibold text-xl tracking-wide">Daily Tips</h3>
        <div className="flex place-items-center text-gray-700 space-x-1">
          <a
            href="#"
            className="flex text-gray-400 text-sm font-bold place-items-center hover:text-gray-600"
          >
            See all <ChevronRightGreen />
          </a>
        </div>
      </div>
      <div className="flex flex-col bg-white bg-opacity-70 shadow p-7 rounded-2xl gap-4 font-semibold">
        {DailyTips.map((tip, key) => (
          <div key={key} className="space-y-2 mt-2">
            <h2 className="font-bold text-lg">{tip.title}</h2>
            <p className="text-sm font-semibold">{tip.desc}</p>
            <div className="space-y-5 2xl:space-y-1">
              <a href="/#">
                <div className="text-green-500 hover:text-green-700 font-semibold flex place-items-center text-sm">
                  <ChevronRightGreen />
                  <p>Find out more</p>
                </div>
              </a>
              <div className="bg-gray-400 w-full h-0.5 bg-opacity-50"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyTipsSection;
