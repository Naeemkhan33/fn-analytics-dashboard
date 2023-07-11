import React from "react";
import Layout from "../components/layouts/Layout";
import ConcurrentPlayersChartTwo from "../components/charts/ConcurrentPlayersChartTwo";
import TreemapCharts from "../components/charts/TreemapCharts";

const DashboardTwo = () => {
  return (
    <Layout>
      <div className="text-end mb-6">
        <select className="font-medium border-0 text-gray-500 focus:text-body focus:ring-primary rounded bg-white">
          <option selected value="Try out in UEFN">
            Try out in UEFN
          </option>
          <option value="one">One</option>
          <option value="two">Two</option>
        </select>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <div className="bg-white rounded-xl p-6">
            <ConcurrentPlayersChartTwo />
          </div>
        </div>
        <div className="order-first xl:order-none">
          <div className="bg-white rounded-xl p-6">
            <TreemapCharts />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardTwo;
