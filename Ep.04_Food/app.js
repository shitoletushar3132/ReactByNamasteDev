import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResCard name={"Meghana food"} cuisins={"Pizza, North Indian"} />
        <ResCard name={"KFC food"} cuisins={"Burgur, Fast Food"} />
      </div>
    </div>
  );
};

const ResCard = ({ name, cuisins }) => {
  return (
    <div className="res-card" style={{ color: "green" }}>
      <img
        className="res-logo"
        alt="res-log"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gnveo9nwpyh6sgvqbqnx"
      />
      <div>
        <h3>{name}</h3>
        <h4>{cuisins}</h4>
        <h4>4.4 stars</h4>
        <h4>38 mins</h4>
      </div> 
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
