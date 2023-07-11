import React from "react";
import ReactApexChart from "react-apexcharts";

const ConcurrentPlayersChartTwo = () => {
  const series = [
    {
      name: "Really Cool Map",
      data: [
        {
          x: "Position #1",
          y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },

    {
      name: "1v1 Build Flights",
      data: [
        {
          x: "Position #1",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: "Position #2",
          y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    {
      name: "The Pit",
      data: [
        {
          x: "Position #1",
          y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
        },
        {
          x: "Position #2",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: "Position #3",
          y: [
            new Date(1790, 2, 22).getTime(),
            new Date(1793, 11, 31).getTime(),
          ],
        },
      ],
    },

    {
      name: "Horror Map",
      data: [
        {
          x: "Position #2",
          y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()],
        },
      ],
    },
    {
      name: "Box PVP",
      data: [
        {
          x: "Position #2",
          y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()],
        },
      ],
    },
  ];

  const options = {
    chart: {
      height: 400,
      type: "rangeBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        rangeBarGroupRows: true,
      },
    },
    colors: ["#1B95A1D9", "#EB7255D9", "#272D6BD9", "#BB225DD9", "#FAD28AD9"],
    fill: {
      type: "solid",
    },
    xaxis: {
      type: "datetime",
    },
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h5 className="text-xl font-medium capitalize mr-auto">
          Concurrent Players across time
        </h5>
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
          type="rangeBar"
          height={400}
        />
      </div>
    </div>
  );
};

export default ConcurrentPlayersChartTwo;
