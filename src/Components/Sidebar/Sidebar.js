import { useState } from "react";
import {
  Overview,
  Calender,
  Progress,
  Nutrition,
  Sports,
  Beauty,
  Health,
  Mind,
  Blood,
  DNA,
  Recycle,
  Question,
  Hamburger,
  Close,
} from "./sidebar-icons-svg";

const DashboardItems = [
  {
    imgLink: <Overview />,
    title: "Overview",
  },
  {
    imgLink: <Calender />,
    title: "Daily Plan",
  },
  {
    imgLink: <Progress />,
    title: "Progress",
  },
];
const PersonalTipsItems = [
  {
    imgLink: <Nutrition />,
    title: "Nutrition",
  },
  {
    imgLink: <Sports />,
    title: "Sport",
  },
  {
    imgLink: <Beauty />,
    title: "Beauty",
  },
  {
    imgLink: <Health />,
    title: "Health",
  },
  {
    imgLink: <Mind />,
    title: "Mindfulness",
  },
];
const DataSectionItems = [
  {
    imgLink: <Blood />,
    title: "Blood",
  },
  {
    imgLink: <DNA />,
    title: "DNA",
  },
  {
    imgLink: <Recycle />,
    title: "Microbiome",
  },
  {
    imgLink: <Question />,
    title: "Questionnaire",
  },
];

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div
      id="sidebar"
      className={`md:p-4 flex flex-col ${
        isMenuOpen
          ? "w-full justify-start px-4 absolute bg-gradient-to-r from-white via-white to-transparent backdrop-filter backdrop-blur-sm z-20"
          : " w-10 md:w-14 place-items-center"
      } lg:w-2/12 lg:gap-7 h-screen transition duration-1000 ease-out `}
    >
      <a id="logo" href="#" className="hidden lg:block">
        <img src="/asset/incubate-logo.svg" width={100} />
      </a>
      <div
        id="profileSection"
        className="hidden lg:flex lg:flex-col place-items-center py-4"
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
      <div className="bg-gray-200 h-0.5 w-3/4 hidden lg:block"></div>
      <div
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="lg:hidden focus:outline-none mt-3"
      >
        {isMenuOpen ? <Close /> : <Hamburger />}
      </div>

      <div className={`${isMenuOpen ? "absolute mt-7 ml-10" : "hidden"}`}>
        <div
          className={`inline-flex place-content-center w-max ring-2 ring-indigo-400 p-1 object-contain rounded-full`}
        >
          <img
            id="userImage"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            className="rounded-full w-24 h-24 object-cover"
          />
        </div>
      </div>

      <div id="componentSection" className="space-y-3 lg:mt-5 md:mt-0">
        <h4 className="text-gray-400 font-bold text-sm hidden lg:block">
          DASHBOARD
        </h4>
        <div
          id="dashboardSection"
          className="font-semibold flex flex-col space-y-3 lg:space-y-0"
        >
          {DashboardItems.map((item, key) => (
            <div href="#" key={key}>
              <div className="flex space-x-3 space-y-2 group text-lg place-items-center">
                {item.imgLink}
                <p
                  className={`group-hover:text-pink-500 ${
                    isMenuOpen ? "block" : "hidden"
                  } lg:block`}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`bg-gray-200 h-0.5 ${
            isMenuOpen ? "w-1/4" : "w-3/4"
          } lg:hidden`}
        ></div>
        <h4 className="text-gray-400 font-bold text-sm hidden lg:block">
          PERSONAL TIPS
        </h4>
        <div
          id="personalTipsSection"
          className="font-semibold flex flex-col space-y-3 lg:space-y-0"
        >
          {PersonalTipsItems.map((item, key) => (
            <div href="#" key={key}>
              <div className="flex space-x-3 space-y-2 group text-lg place-items-center">
                {item.imgLink}
                <p
                  className={`group-hover:text-pink-500 ${
                    isMenuOpen ? "block" : "hidden"
                  } lg:block`}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`bg-gray-200 h-0.5 ${
            isMenuOpen ? "w-1/4" : "w-3/4"
          } lg:hidden`}
        ></div>
        <h4 className="text-gray-400 font-bold text-sm hidden lg:block">
          YOUR DATA
        </h4>
        <div
          id="dataSection"
          className="font-semibold flex flex-col space-y-3 lg:space-y-0"
        >
          {DataSectionItems.map((item, key) => (
            <div href="#" key={key}>
              <div className="flex space-x-3 space-y-2 group text-lg place-items-center">
                {item.imgLink}
                <p
                  className={`group-hover:text-pink-500 ${
                    isMenuOpen ? "block" : "hidden"
                  } lg:block`}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
