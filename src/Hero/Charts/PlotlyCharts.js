import React from "react";
import Plot from "react-plotly.js";

const PlotlyCharts = ({ parameterX, parameterY, predDataX, predDataY }) => {
  const data = [
    {
      x: parameterX,
      y: parameterY,
      type: "scatter",
      mode: "lines",
      name: "Data",
    },
    {
      x: predDataX,
      y: predDataY,
      type: "scatter",
      mode: "lines",
      name: "Prediction",
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
