import React from "react";
import Plot from "react-plotly.js";

const PlotlyCharts = ({
  paramater,
  parameterX,
  parameterY,
  predX,
  predY,
  upperBound,
  lowerBound,
}) => {
  const data = [
    {
      x: parameterX,
      y: parameterY,
      type: "scatter",
      mode: "lines+markers",
      marker: {
        size: 4,
        // color: "red",
      },
      name: "Data",
    },
    {
      x: predX,
      y: predY,
      type: "scatter",
      mode: "lines",
      name: "Prediction",
    },
    {
      x: predX,
      y: upperBound,
      type: "scatter",
      mode: "lines",
      line: { color: "rgba(0, 0, 0, 0)" },
      name: "Upper Bound",
      fill: "tonexty",
      fillcolor: "rgba(0, 128, 0, 0.2)",
    },
    {
      x: predX,
      y: lowerBound,
      type: "scatter",
      mode: "lines",
      line: { color: "rgba(0, 0, 0, 0)" },
      fill: "tonexty",
      fillcolor: "rgba(128, 0, 0, 0.2)",
      name: "Lower Bound",
    },
  ];
  const layout = {
    title: paramater,
    xaxis: {
      title: "Date",
      range: [new Date() - 7 * 24 * 60 * 60 * 1000, new Date()],
    },
    yaxis: { title: "Value" },
    width: 500,
    height: 500,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
      pad: 4,
    },
    // legend: {
    //   xanchor: "left",
    //   yanchor: "top",
    //   y: 0.99,
    //   x: 0.01,
    // },
  };

  return (
    <div className="m-3">
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default PlotlyCharts;
