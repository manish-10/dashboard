import React from "react";
import { Card } from "./Card";
import { FaAppleAlt } from "react-icons/Fa";
import { RiFootprintFill, RiMoonFill } from "react-icons/Ri";
import { GiWeightLiftingUp } from "react-icons/Gi";
import { FiChevronRight } from "react-icons/Fi";

const CardDetails = [
  {
    color: "green-300",
    title: "Calories",
    value: "2814",
    desc: "DAILY AVERAGE",
    icon: <FaAppleAlt className="text-green-400 text-3xl m-auto" />,
  },
  {
    color: "pink-300",
    title: "Steps",
    value: "7234",
    desc: "DAILY AVERAGE",
    icon: <RiFootprintFill className="text-pink-400 text-3xl m-auto" />,
  },
  {
    color: "blue-300",
    title: "Workouts",
    value: "1h 23min",
    desc: "ACTIVE",
    icon: <GiWeightLiftingUp className="text-blue-400 text-3xl m-auto" />,
  },
  {
    color: "red-300",
    title: "Sleeping Analysis",
    value: "7h 35 min",
    desc: "IN BED AVERAGE",
    icon: <RiMoonFill className="text-red-400 text-3xl m-auto" />,
  },
];
const DailyMonitoringSection = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h4 className="font-bold">Daily Monitoring</h4>
        <div className="flex text-gray-400 text-sm font-bold place-items-center">
          See Programs <FiChevronRight />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap w-full place-content-center md:justify-between m-auto">
        {CardDetails.map((itemDetail, key) => (
          <Card key={key} cardDetails={itemDetail} />
        ))}
      </div>
    </div>
  );
};
export default DailyMonitoringSection;
