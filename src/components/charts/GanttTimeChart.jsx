import React from "react";
import ReactApexChart from "react-apexcharts";

const GanttTimeChart = () => {
  const series = [
    {
      name: "Bob",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-08").getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-07").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-03").getTime(),
            new Date("2019-03-09").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-11").getTime(),
          ],
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-11").getTime(),
            new Date("2019-03-16").getTime(),
          ],
        },
        {
          x: "Design",
          y: [
            new Date("2019-03-01").getTime(),
            new Date("2019-03-03").getTime(),
          ],
        },
      ],
    },
    {
      name: "Joe",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-06").getTime(),
            new Date("2019-03-16").getTime(),
          ],
          goals: [
            {
              name: "Break",
              value: new Date("2019-03-10").getTime(),
              strokeColor: "#CD2F2A",
            },
          ],
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-03").getTime(),
            new Date("2019-03-07").getTime(),
          ],
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-20").getTime(),
            new Date("2019-03-22").getTime(),
          ],
        },
        {
          x: "Design",
          y: [
            new Date("2019-03-10").getTime(),
            new Date("2019-03-16").getTime(),
          ],
        },
      ],
    },
    {
      name: "Dan",
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-03-10").getTime(),
            new Date("2019-03-17").getTime(),
          ],
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-09").getTime(),
          ],
          goals: [
            {
              name: "Break",
              value: new Date("2019-03-07").getTime(),
              strokeColor: "#CD2F2A",
            },
          ],
        },
      ],
    },
  ];

  const options = {
    chart: {
      height: 450,
      type: "rangeBar",
    },
    colors: ["#1B95A1", "#EB7255", "#BB225D"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    xaxis: {
      type: "datetime",
    },
    stroke: {
      width: 1,
    },
    fill: {
      type: "solid",
      opacity: 0.6,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h5 className="text-xl font-medium capitalize mr-auto">
          Gantt/Time Chart
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
          height={450}
        />
      </div>
    </div>
  );
};

export default GanttTimeChart;
