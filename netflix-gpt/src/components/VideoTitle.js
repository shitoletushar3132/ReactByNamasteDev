import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-14 absolute text-white bg-gradient-to-r from-black">
      <div className="relative w-full h-full">
        <div className="absolute bottom-28">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="py-6 text-lg w-1/2">{overview}</p>
          <div className="flex gap-4">
            <button className="bg-white  text-black p-2 px-10 text-lg rounded-md font-semibold hover:bg-opacity-80 duration-300">
              ▶️Play
            </button>
            <button className="bg-gray-400 bg-opacity-15 text-white p-2 px-10 text-lg rounded-md font-semibold">
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
