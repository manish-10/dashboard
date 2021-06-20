import React from "react";
import { Close, ModalSearch } from "./navbar-icons-svg";

const MobileSearchModal = ({ setisInputMode }) => {
  return (
    <div className="inset-0 h-screen justify-center z-30 absolute flex bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-lg">
      <div
        onClick={() => {
          setisInputMode(false);
        }}
      >
        <Close />
      </div>
      <div
        id="searchbar"
        className="flex w-80 mt-20 h-14 m-auto place-items-center border-2 rounded-2xl px-2 space-x-2 overflow-hidden bg-gray-100 focus-within:bg-gray-50"
      >
        <ModalSearch />
        <input
          className="flex h-32 focus:outline-none bg-gray-100 focus-within:bg-gray-50 font-semibold text-gray-500"
          type="text"
          placeholder="Type in to Search..."
        />
      </div>
    </div>
  );
};

export default MobileSearchModal;
