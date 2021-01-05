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
  const [chartData1, setChartData1] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [chartData3, setChartData3] = useState([]);
  const [chartData4, setChartData4] = useState([]);
  const [chartData5, setChartData5] = useState([]);
  const [chartData6, setChartData6] = useState([]);
  const [chartData7, setChartData7] = useState([]);
  const [chartData8, setChartData8] = useState([]);
  const [chartData9, setChartData9] = useState([]);
  const [chartData10, setChartData10] = useState([]);

  const getOffenses = () => {

    //Aggravated assault call
    axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/aggravated-assault/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let formatedData = normalizeData(res.data.data);
        console.log(formatedData);
        setChartData1(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

      //burglary call
      axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/burglary/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let formatedData = normalizeData(res.data.data);
        console.log(formatedData);
        setChartData2(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

      //larceny call
      axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/larceny/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let formatedData = normalizeData(res.data.data);
        console.log(formatedData);
        setChartData3(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

      //motor-vehicle-theft call
      axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/motor-vehicle-theft/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let formatedData = normalizeData(res.data.data);
        console.log(formatedData);
        setChartData4(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

      //homicides call
      axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/homicide/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let formatedData = normalizeData(res.data.data);
        setChartData5(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

      //rapes call
      axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/rape/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let formatedData = normalizeData(res.data.data);
        setChartData6(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

      //robberies call
      axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/robbery/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let formatedData = normalizeData(res.data.data);
        setChartData7(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

      //arsons call
      axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/arson/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let formatedData = normalizeData(res.data.data);
        setChartData8(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

      //violent crime call
      axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/violent-crime/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let formatedData = normalizeData(res.data.data);
        setChartData9(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

      //property crime call
      axios
      .get(
        `https://api.usa.gov/crime/fbi/sapi/api/nibrs/property-crime/offense/states/TX/count?API_KEY=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let formatedData = normalizeData(res.data.data);
        setChartData10(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

      
  };

  useEffect(() => {
    getOffenses();
  }, []);

  const renderCharts = () => {
    return (
      <>
        <h3>Aggravated Assaults</h3>
        <LineChart
          width={500}
          height={300}
          data={chartData1}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h3>Burglaries</h3>
        <LineChart
          width={500}
          height={300}
          data={chartData2}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h3>Larcenies</h3>
        <LineChart
          width={500}
          height={300}
          data={chartData3}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h3>Motor Vehicle Thefts</h3>
        <LineChart
          width={500}
          height={300}
          data={chartData4}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h3>Homicides</h3>
        <LineChart
          width={500}
          height={300}
          data={chartData5}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h3>Rapes</h3>
        <LineChart
          width={500}
          height={300}
          data={chartData6}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h3>Robberies</h3>
        <LineChart
          width={500}
          height={300}
          data={chartData7}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h3>Arsons</h3>
        <LineChart
          width={500}
          height={300}
          data={chartData8}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h3>Violent Crimes</h3>
        <LineChart
          width={500}
          height={300}
          data={chartData9}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h3>Property Crimes</h3>
        <LineChart
          width={500}
          height={300}
          data={chartData10}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </>
    );
  };

  return (
    <>
      {renderCharts()}
    </>
  );
};
