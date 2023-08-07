// src/HeatmapLegend.js

import React from "react";

const HeatmapLegend = ({ colorRanges }) => {
  const legendWidth = 150;
  const legendHeight = 150;

  return (
    <svg width={legendWidth} height={legendHeight}>
      {colorRanges.map((colorRange, index) => {
        const rectHeight = legendHeight / colorRanges.length;
        const rectY = index * rectHeight;

        return (
          <g key={index}>
            <rect
              x={0}
              y={rectY}
              width={20}
              height={rectHeight}
              fill={colorRange.color}
            />
            <text x={25} y={rectY + rectHeight / 2} alignmentBaseline="middle">
              {colorRange.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default HeatmapLegend;
