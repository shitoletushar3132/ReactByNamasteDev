import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 px-3 mb-2 shadow-md shadow-black sm:bg-yellow-200">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-5">
          <li>Online status: {onlineStatus ? "online" : "offline"}</li>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
              }
            >
              Grocery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>Cart</li>
          <button
            className="px-2 py-1 bg-yellow-200"
            onClick={() => {
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
