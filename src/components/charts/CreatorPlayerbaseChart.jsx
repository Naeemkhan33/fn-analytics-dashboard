import React from "react";
import ReactApexChart from "react-apexcharts";

const CreatorPlayerbaseChart = () => {
  const series = [
    {
      name: "The Pit",
      data: [44, 55, 41, 67, 22],
    },
    {
      name: "Horror Map",
      data: [13, 23, 20, 8, 13],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    colors: ["#1B95A1", "#EB7255"],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
      ],
    },
    fill: {
      opacity: 1,
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default CreatorPlayerbaseChart;
