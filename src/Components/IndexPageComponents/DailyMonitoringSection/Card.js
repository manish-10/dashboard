import React from "react";

const Card = ({ cardDetails }) => {
  return (
    <div className="flex place-items-center w-64 md:w-80 my-4 rounded-2xl bg-white bg-opacity-70 shadow-xl p-2 lg:p-7 lg:px-10 gap-7 justify-evenly text-gray-900 antialiased">
      <div
        id="iconBg"
        className={`relative flex bg-${cardDetails.color} bg-opacity-20 h-14 w-14 place-items-center rounded-full`}
      >
        {cardDetails.icon}
      </div>
      <div className="justify-start">
        <h3 className="font-bold text-lg">{cardDetails.title}</h3>
        <h2 className="text-xl font-semibold">{cardDetails.value}</h2>
        <p className="text-gray-400 font-semibold text-base">
          {cardDetails.desc}
        </p>
      </div>
    </div>
  );
};

export { Card };
