import React from "react";

const Card = ({ cardDetails }) => {
  return (
    <div className="flex place-items-center w-64 md:w-1/3 xl:1/4 my-4 rounded-2xl bg-white bg-opacity-70 shadow-xl p-4 lg:px-7 justify-evenly md:justify-between xl:justify-evenly text-gray-900 antialiased transform transition duration-300 ease-in hover:scale-110">
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
