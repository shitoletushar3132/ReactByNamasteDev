import ResCard, { withPromotedLabel } from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(false);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let filteredList = listOfRes;

    if (ratingFilter) {
      filteredList = filteredList.filter((res) => res.info.avgRating > 4);
    }

    if (searchText) {
      filteredList = filteredList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredRes(filteredList);
  }, [listOfRes, ratingFilter, searchText]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.97210&lng=72.82460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dat = await data.json();
    const restaurants =
      dat?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRes(restaurants);
    setFilteredRes(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline</h1>;
  }

  // Conditional Rendering
  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            className="border border-solid border-black rounded-md px-2 py-1 m-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="search"
          />
          <button className="px-3 bg-green-300 rounded-full shadow-md hover:scale-110 duration-200">
            Search
          </button>
        </div>

        <button
          className="bg-red-200 m-2 rounded-md px-2 hover:scale-110 duration-300"
          onClick={() => setRatingFilter(!ratingFilter)}
        >
          Top Rated Res
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res?.info?.promoted ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <ResCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
