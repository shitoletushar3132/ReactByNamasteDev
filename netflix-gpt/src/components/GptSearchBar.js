import React from "react";
import languageConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center z-10">
      <form className="p-2 bg-black w-1/2 grid grid-cols-12 rounded-lg gap-4">
        <input
          type="text"
          className="p-3 col-span-9 rounded-lg"
          placeholder={languageConstants[langKey].gptSearchPlaceholder}
        />
        <button className="bg-red-700 text-white rounded-lg col-span-3">
          {languageConstants[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
