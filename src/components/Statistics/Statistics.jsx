import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const marks = [
    {
      name: "one",
      uv: 57,
      pv: 7.5,
    },
    {
      name: "two",
      uv: 59,
      pv: 15,
    },
    {
      name: "three",
      uv: 58,
      pv: 22.5,
    },
    {
      name: "four",
      uv: 54,
      pv: 30,
    },
    {
      name: "five",
      uv: 60,
      pv: 37.5,
    },
    {
      name: "six",
      uv: 57,
      pv: 45,
    },
    {
      name: "seven",
      uv: 48,
      pv: 52.5,
    },
    {
      name: "eight",
      uv: 60,
      pv: 60,
    },
  ];
  return (
    <div className="My-Container">
      <h1 className="text-2xl py-4">Assignment Mark Chart</h1>

      <ComposedChart
        width={800}
        height={500}
        data={marks}
        margin={{
          top: 50,
        }}
      >
        <Bar dataKey="uv" barSize={30} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
      </ComposedChart>
    </div>
  );
};

export default Statistics;
