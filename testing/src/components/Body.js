import ResCard, { withPromotedLabel } from "./ResCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(false);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(ResCard);

  const { setUserInfo, loggedInUser, updateData } = useContext(UserContext);

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dat = await data.json();

    // console.log(dat);

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
      <div className=" flex">
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

        <div>
          <label>Username:</label>
          <input
            type="text"
            className="border border-solid border-black rounded-md px-2 py-1 m-2"
            onChange={(e) => setUserInfo(e.target.value)}
            value={loggedInUser}
          />
        </div>
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
