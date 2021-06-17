import React from "react";
import { Card } from "./Card";
import { FaAppleAlt } from "react-icons/fa";

const CardDetails = {
  color: "green-600",
  title: "Calories",
  value: "2814",
  desc: "DAILY AVERAGE",
  icon: <FaAppleAlt className="text-green-400 h-32" />,
};

const DailyMonitoringSection = () => {
  return (
    <div>
      <h4>Daily Monitoring</h4>
      <p>Cards</p>
      <Card cardDetails={CardDetails} />
    </div>
  );
};

export default DailyMonitoringSection;
