import React from "react";
import "../components/css/NavBar.css";
const NavBar = () => {
  return (
    <>
      <div>
        <h3 className="myBackground">
          <button className="myButton">Customer Service</button>
          <button className="myButton">Best Sellers</button>
        </h3>
      </div>
    </>
  );
};

export default NavBar;
