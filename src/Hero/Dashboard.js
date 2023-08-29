import React from "react";
import Body from "./Body";
import Charts from "./Charts";
import LoggerTwoChart from "./LoggerTwoChart";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex py-5">
        <div className="flex-[.5]">
          <Body />
        </div>
        <div className="flex-[.5]">
          <Charts />
          {/* <LoggerTwoChart /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
