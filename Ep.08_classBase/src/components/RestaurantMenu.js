import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json?.data);
    // console.log(resInfo?.cards[2]?.card?.card?.info);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRatingString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid black",
          marginTop: "5px",
          padding: "0 15px",
        }}
      >
        <h1>{name}</h1>
        <h4 style={{ color: "green" }}>{avgRatingString}</h4>
      </div>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - {item.card.info.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
