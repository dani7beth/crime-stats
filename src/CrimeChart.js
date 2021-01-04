import axios from "axios";
import { useEffect, useState } from "react";
import { normalizeData } from "./Format.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const CrimeChart = () => {
  const [chartData, setChartData] = useState([]);

  const getHomicides = () => {
    axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/homicide/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.data);
        let formatedData = normalizeData(res.data.data);
        console.log(formatedData);
        setChartData(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHomicides();
  }, []);

  return (
    <>
      <h3>Homicides</h3>
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data_year" height={60} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </>
  );
};
