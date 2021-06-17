import React from "react";
import { BiSearchAlt } from "react-icons/Bi";
import { VscBellDot } from "react-icons/Vsc";
import { BsChevronCompactDown } from "react-icons/Bs";
import Test from "../Test";
const Navbar = () => {
  return (
    <div className="w-full top-0  pt-2 h-screen space-y-10">
      <div className="px-10">
        <div className="flex m-auto justify-between">
          <div
            id="searchbar"
            className="w-96 border-2 rounded-full flex place-items-center px-2 space-x-2 overflow-hidden bg-gray-100"
          >
            <BiSearchAlt className="flex mt-1 text-2xl text-gray-500" />
            <div className="h-full w-full place-items-center">
              <input
                className=" flex-1 focus:outline-none h-full w-full bg-gray-100 font-semibold text-gray-500 p-0"
                type="text"
                placeholder="Type in to Search..."
              />
            </div>
          </div>
          <div id="" className="flex gap-4 justify-between place-items-center">
            <div id="bell" className="">
              <VscBellDot className="text-2xl" />
            </div>
            <div id="dropdown">
              <div className="w-max ring-2 ring-indigo-400 p-0.5 object-contain rounded-full">
                <img
                  id="userImage"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  className="rounded-full w-12  h-12  object-cover"
                />
              </div>
            </div>
            <div className="flex text-lg font-semibold place-items-center gap-1">
              Jane Doe
              <BsChevronCompactDown className="text-lg font-semibold" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <Test />
      </div>
    </div>
  );
};

export default Navbar;
