import React from "react";
import {
  Apple,
  Foot,
  WeightLifting,
  Moon,
  ChevronRight,
} from "../indexpage-icons-svg";
import { Card } from "./Card";

const CardDetails = [
  {
    color: "green-300",
    title: "Calories",
    value: "2814",
    desc: "DAILY AVERAGE",
    icon: <Apple />,
  },
  {
    color: "pink-300",
    title: "Steps",
    value: "7234",
    desc: "DAILY AVERAGE",
    icon: <Foot />,
  },
  {
    color: "blue-300",
    title: "Workouts",
    value: "1h 23min",
    desc: "ACTIVE",
    icon: <WeightLifting />,
  },
  {
    color: "red-300",
    title: "Sleeping Time ",
    value: "7h 35 min",
    desc: "IN BED AVERAGE",
    icon: <Moon />,
  },
];
const DailyMonitoringSection = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h4 className="font-semibold text-xl tracking-wide">
          Daily Monitoring
        </h4>
        <a
          href="#"
          className="hidden md:flex text-gray-400 text-sm font-bold place-items-center hover:text-gray-600"
        >
          See Programs <ChevronRight />
        </a>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap w-full place-content-center justify-evenly lg:justify-between m-auto  space-x-3 md:space-x-1 lg:space-x-4">
        {CardDetails.map((itemDetail, key) => (
          <Card key={key} cardDetails={itemDetail} />
        ))}
      </div>
    </div>
  );
};
export default DailyMonitoringSection;
