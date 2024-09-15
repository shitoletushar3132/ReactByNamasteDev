import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hoooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopularMovies from "../hoooks/useNowPopularMovies";
import useTrendingMovies from "../hoooks/useTrendingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
