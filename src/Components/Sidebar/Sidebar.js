import React from "react";
import { BsDroplet } from "react-icons/Bs";
import { BiHome, BiRecycle, BiCalendarCheck } from "react-icons/Bi";
import { AiOutlineStock } from "react-icons/Ai";
import { ImEye } from "react-icons/Im";
import { CgClipboard, CgBowl } from "react-icons/Cg";
import { IoFootballOutline } from "react-icons/io5";
import { GiMeditation, GiHamburgerMenu } from "react-icons/Gi";
import { RiBrushLine, RiHeartPulseLine } from "react-icons/Ri";

const DashboardItems = [
  {
    imgLink: (
      <BiHome className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Overview",
  },
  {
    imgLink: (
      <BiCalendarCheck className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Daily Plan",
  },
  {
    imgLink: (
      <AiOutlineStock className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Progress",
  },
];
const PersonalTipsItems = [
  {
    imgLink: (
      <CgBowl className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Nutrition",
  },
  {
    imgLink: (
      <IoFootballOutline className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Sport",
  },
  {
    imgLink: (
      <RiBrushLine className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Beauty",
  },
  {
    imgLink: (
      <RiHeartPulseLine className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Health",
  },
  {
    imgLink: (
      <GiMeditation className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Mindfulness",
  },
];
const DataSectionItems = [
  {
    imgLink: (
      <BsDroplet className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Blood",
  },
  {
    imgLink: (
      <ImEye className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "DNA",
  },
  {
    imgLink: (
      <BiRecycle className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Microbiome",
  },
  {
    imgLink: (
      <CgClipboard className="text-2xl md:text-xl text-gray-500 group-hover:text-pink-500" />
    ),
    title: "Questionnaire",
  },
];

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="md:p-4 flex flex-col min-w-sm w-2/12 place-items-center gap-7 h-screen"
    >
      <div id="logo" className="hidden md:block">
        <img src="/asset/incubate-logo.svg" width={100} />
      </div>
      <div
        id="profileSection"
        className="hidden md:flex md:flex-col place-items-center py-4"
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
      <div className="bg-gray-200 h-0.5 w-3/4 hidden md:block"></div>
      <div id="componentSection" className="space-y-3 mt-5 md:mt-0">
        <GiHamburgerMenu className="text-3xl mb-20 md:hidden " />
        <h4 className="text-gray-400 font-bold text-sm hidden md:block">
          DASHBOARD
        </h4>
        <div id="dashboardSection" className="font-semibold flex flex-col space-y-3 md:space-y-0">
          {DashboardItems.map((item, key) => (
            <a href="/">
              <div
                key={key}
                className="flex space-x-3 space-y-2 group text-lg place-items-center"
              >
                {item.imgLink}

                <p className="group-hover:text-pink-500 hidden md:block">
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="bg-gray-200 h-0.5 w-3/4 md:hidden"></div>
        <h4 className="text-gray-400 font-bold text-sm hidden md:block">
          PERSONAL TIPS
        </h4>
        <div id="personalTipsSection" className="font-semibold flex flex-col space-y-3 md:space-y-0">
          {PersonalTipsItems.map((item, key) => (
            <a href="/">
              <div
                key={key}
                className="flex space-x-3 space-y-2 group text-lg place-items-center"
              >
                {item.imgLink}
                <p className="group-hover:text-pink-500 hidden md:block">
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="bg-gray-200 h-0.5 w-3/4 md:hidden"></div>
        <h4 className="text-gray-400 font-bold text-sm hidden md:block">
          YOUR DATA
        </h4>
        <div id="dataSection" className="font-semibold flex flex-col space-y-3 md:space-y-0">
          {DataSectionItems.map((item, key) => (
            <a href="/">
              <div
                key={key}
                className="flex space-x-3 space-y-2 group text-lg place-items-center"
              >
                {item.imgLink}
                <p className="group-hover:text-pink-500 hidden md:block">
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
