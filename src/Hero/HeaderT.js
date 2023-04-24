import React from "react";
import Buttons from "./Components/Buttons";

const HeaderT = () => {
  const navTo = () => {};
  return (
    <div>
      <div className="flex items-center justify-evenly  flex-wrap bg-[#EEEEEE] p-1">
        <div className="flex items-center flex-shrink-0 text-black mr-28 pl-6">
          <img src="" alt="E" className="fill-current h-8 w-10 mr-7" />
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight">
              Laguna State Polytechnic University - Los Baños Campus
            </span>
            <p className="font-bold text-s whitespace-pre tracking-tight">
              Enhanced Sensing Environmental Parameters through Telemetry
              <br />
              (E-Sentry): Integration of Predictive Environmental Models using
              <br />
              Deep Learning Analytics in the System Implementation-Design
            </p>
          </div>
        </div>
        <div className="w-full  block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow ">
            <Buttons
              title="Water Quality"
              textColor="text-black"
              onClick={navTo}
              textSize="font-semibold text-s"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderT;
