import React from "react";
import { Profile, SignOut } from "./navbar-icons-svg";

const UserModal = () => {
  return (
    <div className="z-30 absolute ">
      <ul className="relative top-14 ml-2 right-0 bg-opacity-50 backdrop-filter backdrop-blur-xl p-3 shadow-2xl rounded-xl divide-y-2 text-base place-items-center">
        <li className="flex place-items-center gap-1 hover:bg-opacity-50">
          <Profile />
          <p>Profile</p>
        </li>
        <li className="flex place-items-center gap-1 hover:bg-opacity-50">
          <SignOut />
          <p>Sign Out</p>
        </li>
      </ul>
    </div>
  );
};

export default UserModal;
