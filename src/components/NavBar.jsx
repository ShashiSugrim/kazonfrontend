import React from "react";
import { useNavigate } from "react-router-dom";

import NavBarCSS from "../css/NavBar.module.css";

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
      <div className={NavBarCSS.navbare}>
        <button className={NavBarCSS.cusBest} onClick={handleCust}>
          Customer Service
        </button>
        <button className={NavBarCSS.cusBest} onClick={handleBest}>
          Best Sellers
        </button>
      </div>
    </>
  );
};

export default NavBar;
