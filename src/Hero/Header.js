import React from "react";
import Buttons from "./Components/Buttons";

const Header = () => {
  const navTo = () => {};
  return (
    <div className="flex items-center justify-between flex-wrap bg-[#616161] p-1">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="" alt="E" className="fill-current h-8 w-8 mr-2" />
        <span className="font-semibold text-xl tracking-tight">E-Sentry</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Buttons title="Home" textColor="text-[#F5F5F5]" onClick={navTo} />
        </div>
      </div>
    </div>
  );
};

export default Header;
