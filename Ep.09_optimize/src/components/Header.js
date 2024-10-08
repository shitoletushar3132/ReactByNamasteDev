import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status : {onlineStatus ? "online" : "offline"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>

          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>

          <button
            className="login"
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
