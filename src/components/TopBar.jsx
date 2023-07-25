import React from "react";
import { useNavigate } from "react-router-dom";
import shoppingCart from "../kazonShoppingCart.jpeg";

const TopBar = () => {
  const navigate = useNavigate();

  function handleSign(event) {
    console.log("Signed in");

    navigate("/signin");
  }

  function handleCreate(event) {
    navigate("/createAccount");
  }

  function handleBest(event) {
    navigate("/bestsellers");
  }
  function handleCart(event) {
    navigate("cart");
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
          <button onClick={handleSign}>
            {" "}
            <h3 style={{ textAlign: "right" }}>Sign in</h3>
          </button>
        </div>
        <div className="child">
          <button onClick={handleCreate}>
            {" "}
            <h3 style={{ textAlign: "right" }}>Create Account</h3>
          </button>
        </div>
        <button className="shoppingCartButton">
          <img
            className="shoppingCartImage"
            src={shoppingCart}
            alt="shoppingCart"
            onClick={handleCart}
          />
        </button>
      </div>
    </>
  );
};

export default TopBar;
