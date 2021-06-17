import React from "react";
import { BsDroplet } from "react-icons/Bs";
import { BiHome, BiRecycle, BiCalendarCheck } from "react-icons/Bi";
import { AiOutlineStock } from "react-icons/Ai";
import { ImEye } from "react-icons/Im";
import { CgClipboard, CgBowl } from "react-icons/Cg";
import { IoFootballOutline } from "react-icons/io5";
import { GiMeditation } from "react-icons/Gi";
import { RiBrushLine, RiHeartPulseLine } from "react-icons/Ri";
const DashboardItems = [
  { imgLink: <BiHome className="text-xl" />, title: "Overview" },
  { imgLink: <BiCalendarCheck className="text-xl" />, title: "Daily Plan" },
  { imgLink: <AiOutlineStock className="text-xl" />, title: "Progress" },
];
const PersonalTipsItems = [
  { imgLink: <CgBowl className="text-xl" />, title: "Nutrition" },
  { imgLink: <IoFootballOutline className="text-xl" />, title: "Sport" },
  { imgLink: <RiBrushLine className="text-xl" />, title: "Beauty" },
  { imgLink: <RiHeartPulseLine className="text-xl" />, title: "Health" },
  { imgLink: <GiMeditation className="text-xl" />, title: "Mindfulness" },
];
const DataSectionItems = [
  { imgLink: <BsDroplet className="text-xl" />, title: "Blood" },
  { imgLink: <ImEye className="text-xl" />, title: "DNA" },
  { imgLink: <BiRecycle className="text-xl" />, title: "Microbiome" },
  { imgLink: <CgClipboard className="text-xl" />, title: "Questionnaire" },
];

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="p-4 flex flex-col w-96 place-items-center gap-7 h-screen"
    >
      <div id="logo" className="">
        <img src="/asset/incubate-logo.svg" width={100} />
      </div>
      <div
        id="profileSection"
        className="flex flex-col place-items-center py-4"
      >
        <div className="w-max ring-4 ring-indigo-400 p-1 object-contain rounded-full">
          <img
            id="userImage"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            className="rounded-full w-24 h-24 object-cover"
          />
        </div>
        <p className="font-bold text-gray-500 mt-4 text-sm">Daily points</p>
        <h3 className="font-semibold text-3xl tracking-wide">2,466</h3>
      </div>
      <div className="bg-gray-200 h-0.5 w-3/4"></div>
      <div id="componentSection" className="space-y-3">
        <h4 className="text-gray-400 font-bold text-sm">DASHBOARD</h4>
        <div id="dashboardSection" className="font-semibold">
          {DashboardItems.map((item, key) => (
            <div
              key={key}
              className="flex space-x-3 text-lg place-items-center"
            >
              {item.imgLink}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <h4 className="text-gray-400 font-bold text-sm">PERSONAL TIPS</h4>
        <div id="personalTipsSection" className="font-semibold">
          {PersonalTipsItems.map((item, key) => (
            <div
              key={key}
              className="flex space-x-3 text-lg place-items-center"
            >
              {item.imgLink}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <h4 className="text-gray-400 font-bold text-sm">YOUR DATA</h4>
        <div id="dataSection" className="font-semibold">
          {DataSectionItems.map((item, key) => (
            <div
              key={key}
              className="flex space-x-3 text-lg place-items-center"
            >
              {item.imgLink}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
