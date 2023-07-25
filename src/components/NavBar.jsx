import React from "react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();

  function handleBest(event) {
    navigate("bestsellers");
  }

  function handleCust(event) {
    navigate("customerservice");
  }
  return (
    <>
      <div>
        <h3 className="myBackground">
          <button onClick={handleCust} className="myButton">
            Customer Service
          </button>
          <button onClick={handleBest} className="myButton">
            Best Sellers
          </button>
        </h3>
      </div>
    </>
  );
};

export default NavBar;
