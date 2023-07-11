import React from "react";

// icons
import { TrashIcon } from "@heroicons/react/24/outline";

const CreatorCard = ({ item }) => {
  const formattedPlayers = item.players.toLocaleString();

  return (
    <div className="creator-card p-3 bg-white rounded-lg">
      <div className="flex items-center gap-2 justify-between">
        <div className="w-16 h-16 bg-light rounded-lg">
          <img
            className="block h-full w-full rounded-lg"
            src={item.mapImage}
            alt=".."
          />
        </div>
        <div>
          <h5 className="mb-1 font-medium text-lg capitalize text-body">
            {item.name}
          </h5>
          <h5 className="font-medium text-sm capitalize text-gray-400">
            {item.map}
          </h5>
        </div>
        <div>
          <h5 className="mb-1 font-medium text-lg capitalize text-body">
            {formattedPlayers}
          </h5>
          <h5 className="font-medium text-sm capitalize text-gray-400">
            Players
          </h5>
        </div>
        <button
          type="button"
          className="rounded-lg p-3 self-stretch text-orange-500 bg-orange-100 hover:bg-orange-500 hover:text-white active:scale-105"
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CreatorCard;
