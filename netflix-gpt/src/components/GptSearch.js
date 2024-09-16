import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { login_BG_Url } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src={login_BG_Url}
          alt="background-img"
          className="w-full h-full object-cover"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
