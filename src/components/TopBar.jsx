import React from "react";
import { useNavigate } from "react-router-dom";
import shoppingCart from "../kazonShoppingCart.jpeg";

const TopBar = () => {
  const navigate = useNavigate();
  function handleClick(event) {
    console.log("Signed in");

    navigate("/about");
  }

  return (
    <>
      <div className="parent">
        <div className="child">
          <div className="Search-bar">
            <input
              type="text"
              id="name"
              name="name"
              required
              minlength="7"
              maxlength="50"
              size="30"
              placeholder="Search" // Add this line
            />
          </div>
        </div>
        <div className="child">
          <button>
            {" "}
            <h3 style={{ textAlign: "right" }}>Sign in</h3>
          </button>
          {/*  
         </div>
         <div className="child">
       <button> <img src = {shoppingCart} alt= 'shoppingCart'/></button> 
       */}
          <button className="shoppingCartButton">
            <img
              className="shoppingCartImage"
              src={shoppingCart}
              alt="shoppingCart"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
