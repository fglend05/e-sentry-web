import React, { useEffect, useState } from "react";
import axios from "axios";
import Chartsre from "./Charts/Chartsre";
import PlotlyCharts from "./Charts/PlotlyCharts";

const Charts = () => {
  const [data, setData] = useState([]);
  const [predData, setPredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:3001/posts").then((res) => {
        setData(res.data);
      });
    };
    const fetchPredData = async () => {
      await axios.get("http://localhost:3001/loggertwo").then((res) => {
        setPredData(res.data);
      });
    };
    fetchData();
    fetchPredData();
  }, []);

  //Fetch parameters
  const date = data.map((data) => {
    return data.Date;
  });
  const temp = data.map((data) => {
    return data.Temperature;
  });

  //fetch pred data
  const predDate = predData.map((predData) => {
    return predData.Date;
  });
  const predTemp = predData.map((predData) => {
    return predData.Temp;
  });

  return (
    <div>
      <PlotlyCharts
        data={data}
        parameterX={date}
        parameterY={temp}
        predDataY={predTemp}
        predDataX={predDate}
      />
    </div>
  );
};

export default Charts;
