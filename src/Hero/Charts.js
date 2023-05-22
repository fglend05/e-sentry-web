import React, { useEffect, useState } from "react";
import axios from "axios";
import Chartsre from "./Charts/Chartsre";
import PlotlyCharts from "./Charts/PlotlyCharts";

const Charts = () => {
  const [data, setData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [predictedData, setPredictedData] = useState([]);

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
    const fetchPrediction = async () => {
      await axios.get("http://localhost:3001/getPrediction").then((res) => {
        setPredictedData(res.data);
      });
    };
    fetchPrediction();
    fetchData();
    fetchSecondData();
  }, []);

  const extractData = (dataArray, key) => {
    return dataArray.map((data) => data[key]);
  };

  //Fetch parameters from Logger 1
  const date = extractData(data, "Date");
  const temp = extractData(data, "Temperature");
  const ph = extractData(data, "PH");
  const SPCond = extractData(data, "SPCond");
  const CHL = extractData(secondData, "CHL");
  const NTR = extractData(data, "NITRATE");
  const TURB = extractData(data, "TURBIDITY");

  //Start Prediction
  const predDate = extractData(predictedData, "Date");
  //temp
  const predTemp = extractData(predictedData, "temp_pred");
  const upperTemp = extractData(predictedData, "temp_upper");
  const lowerTemp = extractData(predictedData, "temp_lower");
  //PH
  const predPh = extractData(predictedData, "ph_pred");
  const upperPh = extractData(predictedData, "ph_upper");
  const lowerPh = extractData(predictedData, "ph_lower");
  //SPCond
  const predSc = extractData(predictedData, "sc_pred");
  const upperSc = extractData(predictedData, "sc_upper");
  const lowerSc = extractData(predictedData, "sc_lower");
  //SPCond
  const predCl = extractData(predictedData, "cl_pred");
  const upperCl = extractData(predictedData, "cl_upper");
  const lowerCl = extractData(predictedData, "cl_lower");
  //Nitrate
  const predNt = extractData(predictedData, "nt_pred");
  const upperNt = extractData(predictedData, "nt_upper");
  const lowerNt = extractData(predictedData, "nt_lower");
  //Turbidity
  const predTurb = extractData(predictedData, "turb_pred");
  const upperTurb = extractData(predictedData, "turb_upper");
  const lowerTurb = extractData(predictedData, "turb_lower");

  return (
    <div>
      <div className="flex m-3">
        <PlotlyCharts
          data={data}
          paramater="Temperature"
          parameterX={date}
          parameterY={temp}
          predY={predTemp}
          predX={predDate}
          upperBound={upperTemp}
          lowerBound={lowerTemp}
        />
        <PlotlyCharts
          data={data}
          paramater="PH"
          parameterX={date}
          parameterY={ph}
          predY={predPh}
          predX={predDate}
          upperBound={upperPh}
          lowerBound={lowerPh}
        />
      </div>
      <div className="flex m-3">
        <PlotlyCharts
          data={data}
          paramater="Specific Conductance"
          parameterX={date}
          parameterY={SPCond}
          predY={predSc}
          predX={predDate}
          upperBound={upperSc}
          lowerBound={lowerSc}
        />
        <PlotlyCharts
          data={data}
          paramater="Chlorine"
          parameterX={date}
          parameterY={CHL}
          predY={predCl}
          predX={predDate}
          upperBound={upperCl}
          lowerBound={lowerCl}
        />
      </div>
      <div className="flex m-3">
        <PlotlyCharts
          data={data}
          paramater="Nitrate"
          parameterX={date}
          parameterY={NTR}
          predY={predNt}
          predX={predDate}
          upperBound={upperNt}
          lowerBound={lowerNt}
        />
        <PlotlyCharts
          data={data}
          paramater="Turbidity"
          parameterX={date}
          parameterY={TURB}
          predY={predTurb}
          predX={predDate}
          upperBound={upperTurb}
          lowerBound={lowerTurb}
        />
      </div>
    </div>
  );
};

export default Charts;
