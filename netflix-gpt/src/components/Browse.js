import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

import { useSelector } from "react-redux";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    console.log("call");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDQ3ZThkYjliYjIyOTA1YzMyMjNhZjg4OGRmNzk5NCIsIm5iZiI6MTcyNjM4MjM2Mi40NDU5MjgsInN1YiI6IjY2ZTY3ZjY1ZDdiY2NhNTI0ZGIwNjZlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hvufFQcyNuu6wE78vmdlT11eCNP326OXZDciiHo3ilc",
      },
    };
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    const json = await data.json();

    console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
