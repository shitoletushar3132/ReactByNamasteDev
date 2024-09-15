import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="w-screen bg-black">
      <div className="-mt-56 pl-12 relative z-10 ">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.trendingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Horror movies"} movies={movies?.nowPlayingMovies} />
      </div>

      {/* MovieList - Popular
    MovieList - Now playing
    MovieList - Trending
    MovieList - Hrror
     */}
    </div>
  );
};

export default SecondaryContainer;
