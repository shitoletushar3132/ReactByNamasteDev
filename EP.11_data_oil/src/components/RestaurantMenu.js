import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestarantMenU from "../utils/useResturantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestarantMenU(resId);

  const [showIndex, setShowIndex] = useState(null);

  const dummy = "dummy data";

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   // console.log(json);
  //   setResInfo(json?.data);
  //   // console.log(resInfo?.cards[2]?.card?.card?.info);
  // };

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

  // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>

      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {/* categories accordions */}

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.["@type"] + index}
          data={category?.card?.card}
          showItem={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
