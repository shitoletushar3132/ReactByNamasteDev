import React from "react";
import netflixLogo from "../assets/Netflix_Logo.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 top-0 -left-4">
      <img src={netflixLogo} alt="logo" className="w-44" />
    </div>
  );
};

export default Header;
