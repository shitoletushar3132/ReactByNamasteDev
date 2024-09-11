import React, { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const ItemList = ({ items, dummy }) => {
  // console.log(dummy);
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <p>User Info = {loggedInUser}</p>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative h-28">
            <div className="absolute top-2/3 left-1/4">
              <button className="px-2 py-1 bg-white shadow-lg  rounded-full text-green-400">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
