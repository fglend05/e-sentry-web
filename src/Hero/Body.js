import React, { useEffect, useState } from "react";
import HeatmapLegend from "./Heatmap/Heatmaplegends";
import Heatmap from "./Heatmap/Heatmap";
import axios from "axios";

const Body = () => {
  const colorRanges = [
    { label: "Excellent", color: "#00FF00" },
    { label: "Good", color: "#FFFF00" },
    { label: "Poor", color: "#FF0000" },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchWQI = async () => {
      await axios
        .get(process.env.REACT_APP_LOCAL_API + "/getWQI")
        .then((res) => {
          const sortedData = res.data.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );
          setData(sortedData);
        });
    };

    fetchWQI();
  }, []);

  const extractData = (dataArray, key) => {
    return dataArray.map((data) => data[key]);
  };

  const wqipred = extractData(data, "Prediction");
  const wqiResult = wqipred.slice(-1)[0];

  return (
    <div className="flex justify-center">
      <div className="item-center w-full p-5">
        <svg
          className="fill-[#0099ff]"
          xmlns="http://www.w3.org/2000/svg"
          version="1.2"
          baseProfile="tiny"
          width="w-full"
          height="h-full"
          viewBox="0 0 800 825"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g id="tadlac-bound">
            <path d="M 2.94 524.63 393.07 428.61 537.66 756.68 533 757.39 490.88 757.39 475.37 776.73 444.33 811.11 395.57 824 309.12 817.55 253.7 808.96 229.32 811.11 189.42 821.85 120.7 791.77 105.18 770.28 85.23 744.49 63.07 705.81 47.55 656.39 36.47 622.01 27.6 594.07 12.08 557.54 3.22 531.76 2.94 524.63 Z" />
            <path
              className={
                wqiResult === "Excellent"
                  ? "fill-[#00FF00]"
                  : wqiResult === "Good"
                  ? "fill-[#FFFF00]"
                  : wqiResult === "Poor"
                  ? "fill-[#FF0000]"
                  : ""
              }
              d="M 541.88 756.04 399.17 429.69 356.13 61.17 382.27 56.87 504.18 41.83 661.57 1 705.9 31.08 723.63 108.44 732.5 140.67 754.67 172.9 765.75 198.69 781.27 237.37 787.92 271.75 794.57 323.32 799 379.19 790.13 420.02 790.13 441.51 785.7 480.19 783.48 493.08 779.05 514.57 761.32 566.14 723.63 604.82 719.2 634.9 712.55 658.54 692.6 705.81 688.17 705.81 663.78 733.75 630.53 742.34 603.93 746.64 541.88 756.04 Z"
            />
            <path d="M 349.14 62.32 390.58 425.66 2.8 520.79 1 473.74 16.52 387.79 56.42 308.28 74.15 258.86 147.3 196.54 169.47 101.99 264.78 76.21 349.14 62.32 Z" />
          </g>
        </svg>
      </div>
      <div className="ml-auto p-5">
        <div className="pb-5 text-center">
          <p className="font-bold ">Legends </p>
        </div>
        <div className="justify-center">
          <HeatmapLegend colorRanges={colorRanges} />
        </div>
        <div className="mt-5">
          <Heatmap wqi={wqiResult} />
        </div>
      </div>
    </div>
  );
};

export default Body;
