import React from "react";
import { FaChevronRight } from "react-icons/Fa";

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
          <p className="">See all</p>
          <FaChevronRight className="text-xs"/>
        </div>
      </div>
      <div className="flex flex-col divide-y-4 bg-white bg-opacity-70 shadow-xl p-7 rounded-2xl gap-4">
        {DailyTips.map((tip, key) => (
          <div key={key} className="space-y-2 mt-2">
            <h2 className="font-bold text-lg">{tip.title}</h2>
            <p className="text-sm font-semibold">{tip.desc}</p>
            <button>
              <div className="text-green-500 font-semibold flex place-items-center text-sm">
                <FaChevronRight className="text-xs"/>
                <p>Find out more</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyTipsSection;
