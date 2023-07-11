import React from "react";
import Layout from "../components/layouts/Layout";
import FastestGrowingMapChart from "../components/charts/FastestGrowingMapChart";

const DashboardFour = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-3">
          <div className="bg-white rounded-xl p-6">
            <FastestGrowingMapChart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardFour;
