import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex, dummy }) => {
  //   const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    // setShowItem(!showItem);
    setShowIndex();
  };
  return (
    <div>
      {/* header */}
      <div className="w-1/2 bg-gray-50 shadow-md p-4 my-4 m-auto">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="font-semibold text-lg">
            {data.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* accordian body */}
        <div>
          {showItem && <ItemList items={data.itemCards} dummy={dummy} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
