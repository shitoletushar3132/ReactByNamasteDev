import ResCard from "./ResCard";
import API_DATA from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(API_DATA);

  const [ratingFilter, SetRatingFilter] = useState(false);

  const handleRatingFilter = () => {
    if (ratingFilter) {
      const filterList = listOfRes.filter(
        (res) => res.card.card.info.avgRating > 4
      );
      setListOfRes(filterList);
    } else {
      setListOfRes(API_DATA);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            SetRatingFilter(!ratingFilter);
            handleRatingFilter();
          }}
        >
          Top Rated Res
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((res) => (
          <ResCard key={res.card.card.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
