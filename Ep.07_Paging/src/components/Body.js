import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  // Conditional Rendering
  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button>Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => setRatingFilter(!ratingFilter)}
        >
          Top Rated Res
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <ResCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
