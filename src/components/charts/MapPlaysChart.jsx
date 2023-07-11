import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const MapPlaysChart = () => {
  const [series] = useState([
    {
      name: "1v1 Build Fights",
      data: [100, 29, 33, 36, 70, 32, 33],
    },
    {
      name: "The Pit",
      data: [12, 28, 50, 60, 40, 70, 60],
    },
  ]);

  const options = {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#1B95A1", "#EB7255"],
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h5 className="text-xl font-medium capitalize mr-auto">Map Plays</h5>
        <select className="font-medium border-0 text-gray-400 focus:text-body focus:ring-primary">
          <option value="today">Today</option>
          <option value="week">Week</option>
          <option selected value="month">
            Month
          </option>
          <option value="year">Year</option>
        </select>
      </div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default MapPlaysChart;
