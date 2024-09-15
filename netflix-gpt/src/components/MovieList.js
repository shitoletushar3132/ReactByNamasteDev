import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies) return;
  return (
    <div className="px-6 text-white">
      <h1 className="text-3xl font-semibold py-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-custom">
        <div className="flex gap-3">
          {movies?.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
