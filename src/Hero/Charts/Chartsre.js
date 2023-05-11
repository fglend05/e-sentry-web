import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chartsre = ({ data, parameter }) => {
  return (
    <div>
      {data && (
        <LineChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="Date" height={60} axisLine={false} tickLine={false} />
          <YAxis
            domain={["dataMin", "dataMax"]}
            allowDataOverflow={true}
            axisLine={false}
            tickLine={false}
            tickCount={8}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={parameter}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      )}
    </div>
  );
};

export default Chartsre;
