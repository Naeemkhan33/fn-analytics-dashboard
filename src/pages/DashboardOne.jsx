import React from "react";
import Layout from "../components/layouts/Layout";
import InputOneText from "../components/inputs/InputOneText";
import CreatorCard from "../components/cards/CreatorCard";
import ConcurrentPlayersChart from "../components/charts/ConcurrentPlayersChart";
import GanttTimeChart from "../components/charts/GanttTimeChart";

// icons
import { PlusIcon } from "@heroicons/react/20/solid";

const DashboardOne = () => {
  const creator = [
    {
      name: "Geerzy",
      map: "The Pit",
      players: 12375,
      mapImage: "/assets/images/small-map.png",
    },
    {
      name: "Dude19",
      map: "Box Fight",
      players: 10209,
      mapImage: "/assets/images/small-map.png",
    },
    {
      name: "Central",
      map: "The Pit",
      players: 13450,
      mapImage: "/assets/images/small-map.png",
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <div className="bg-white rounded-xl p-6">
            <ConcurrentPlayersChart />
          </div>
        </div>
        <div className="order-first xl:order-none">
          <div className="bg-white rounded-xl p-6">
            <h5 className="mb-4 text-xl font-medium capitalize">Add Creator</h5>
            <div className="flex bg-light rounded-lg">
              <InputOneText />
              <button
                type="button"
                className="px-3 bg-secondary text-white rounded-e-lg active:scale-105"
              >
                <PlusIcon className="h-5 w-6" />
              </button>
            </div>
            <div className="bg-light rounded-lg mt-4 p-3 space-y-3">
              {creator.map((item, index) => (
                <CreatorCard key={`creator-card-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="xl:col-span-3">
          <div className="bg-white rounded-xl p-6">
            <GanttTimeChart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardOne;
