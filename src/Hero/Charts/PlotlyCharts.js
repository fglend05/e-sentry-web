import React from "react";
import Plot from "react-plotly.js";

const PlotlyCharts = ({
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
      mode: "lines",
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
      fill: "tonexty",
      fillcolor: "rgba(128, 0, 0, 0.2)",
      name: "Lower Bound",
    },
  ];
  const layout = {
    title: "Temperature",
    xaxis: { title: "Date" },
    yaxis: { title: "Value" },
    legend: {
      xanchor: "left",
      yanchor: "top",
      y: 0.99,
      x: 0.01,
    },
  };
  return (
    <div>
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default PlotlyCharts;
