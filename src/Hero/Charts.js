import React, { useEffect, useState } from "react";
import axios from "axios";
import Chartsre from "./Charts/Chartsre";
import PlotlyCharts from "./Charts/PlotlyCharts";

const Charts = () => {
  const [data, setData] = useState([]);
  const [secondData, setSecondData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:3001/posts").then((res) => {
        setData(res.data);
      });
    };
    const fetchSecondData = async () => {
      await axios.get("http://localhost:3001/loggertwo").then((res) => {
        setSecondData(res.data);
      });
    };
    fetchData();
    fetchSecondData();
  }, []);

  //Fetch parameters for Logger 1
  const date = data.map((data) => {
    return data.Date;
  });
  const temp = data.map((data) => {
    return data.Temperature;
  });

  //fetch pred data
  // const predDate = secondData.map((secondData) => {
  //   return secondData.Date;
  // });
  // const predTemp = secondData.map((secondData) => {
  //   return secondData.Temp;
  // });
  //2023-05-08T12:05:00.0000Z
  const predDate = [
    "2023-05-08T00:05:00.000Z",
    "2023-05-08T04:05:00.000Z",
    "2023-05-08T08:05:00.000Z",
    "2023-05-08T12:05:00.000Z",
    "2023-05-08T16:05:00.000Z",
    "2023-05-08T20:05:00.000Z",
  ];
  const predTemp = [30.8398, 30.8616, 30.8774, 30.8701, 30.8886, 30.894];
  const upperBound = [30.9538, 30.9828, 31.0035, 31.0156, 31.0429, 31.0555];
  const lowerBound = [30.7258, 30.7405, 30.7245, 30.7512, 30.7343, 30.7325];

  return (
    <div>
      <PlotlyCharts
        data={data}
        parameterX={date}
        parameterY={temp}
        predY={predTemp}
        predX={predDate}
        upperBound={upperBound}
        lowerBound={lowerBound}
      />
    </div>
  );
};

export default Charts;
