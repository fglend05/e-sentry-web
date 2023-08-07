import React, { useEffect, useState } from "react";
import Buttons from "./Components/Buttons";
import { setDate } from "date-fns";

const HeaderT = () => {
  const [clock, setClock] = useState(new Date());

  const navTo = () => {};

  const refreshClock = () => {
    setClock(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  const options = { month: "long", year: "numeric", day: "numeric" };
  return (
    <div>
      <div className="flex items-center justify-evenly  flex-wrap bg-wave-pattern-two bg-cover bg-center p-1">
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
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow ">
            <Buttons
              title="Water Quality"
              textColor="text-black"
              onClick={navTo}
              textSize="font-semibold text-s"
            />
            <Buttons
              title="About E-SENTRY"
              textColor="text-black"
              onClick={navTo}
              textSize="font-semibold text-s"
            />
            <Buttons
              title="About Us"
              textColor="text-black"
              onClick={navTo}
              textSize="font-semibold text-s"
            />
          </div>
        </div>
        <div className="flex flex-col p-6 px-10">
          <div className="mb-3">{clock.toLocaleTimeString()}</div>
          <div>{clock.toLocaleDateString(undefined, options)}</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderT;
