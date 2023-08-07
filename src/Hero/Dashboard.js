import React from "react";
import Body from "./Body";
import Header from "./Header";
import HeaderT from "./HeaderT";
import Charts from "./Charts";
import Overview from "./Overview";
import LoggerTwoChart from "./LoggerTwoChart";

const Dashboard = () => {
  return (
    <div className="">
      <Header />
      <HeaderT />
      <Overview />
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
