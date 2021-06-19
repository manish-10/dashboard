import { useState } from "react";
import Body from "../Body/Body";
import UserModal from "./UserModal";
import MobileSearchModal from "./MobileSearchModal";
import { Search, Chevron, ResponsiveSearch, Bell } from "./navbar-icons-svg";
const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isInputMode, setisInputMode] = useState(false);

  return (
    <div className="w-full flex-1 md:w-10/12 top-0 pt-5 h-screen space-y-10 overflow-hidden">
      <div className="px-2 md:px-10">
        <div className="flex m-auto justify-between">
          <button
            onClick={() => setisInputMode(true)}
            className="focus:outline-none md:hidden"
          >
            <ResponsiveSearch />
          </button>
          {isInputMode && <MobileSearchModal setisInputMode={setisInputMode} />}
          <div
            id="searchbar"
            className="hidden md:flex w-96 border-2 rounded-2xl place-items-center px-2 space-x-2 overflow-hidden bg-gray-100 focus-within:bg-gray-50"
          >
            <Search />
            <div className="h-full w-full place-items-center">
              <input
                className="flex-1 focus:outline-none h-full w-full bg-gray-100 focus-within:bg-gray-50 font-semibold text-gray-500 p-0"
                type="text"
                placeholder="Type in to Search..."
              />
            </div>
          </div>
          <div id="" className="flex gap-4 justify-between place-items-center">
            <a href="#" id="bell" className="flex">
              <Bell />
            </a>
            <div id="dropdown">
              <div className="w-max ring-2 ring-indigo-400 p-0.5 object-contain rounded-full">
                <img
                  id="userImage"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  className="rounded-full w-12  h-12  object-cover"
                />
              </div>
            </div>
            <button
              className="group flex text-lg font-semibold place-items-center gap-1 focus:outline-none"
              onClick={() => setModalOpen(!isModalOpen)}
            >
              <p className="group-hover:text-gray-500">Jane Doe</p>
              <Chevron />
              {isModalOpen && <UserModal />}
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen pb-28">
        <Body />
      </div>
    </div>
  );
};

export default Navbar;
