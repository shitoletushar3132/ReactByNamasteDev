import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = ({ id }) => {
  const dispatch = useDispatch();
  const getVideoData = async () => {
    const url = "https://api.themoviedb.org/3/movie/" + id + "/videos";

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getVideoData();
  }, []);
};

export default useMovieTrailer;
