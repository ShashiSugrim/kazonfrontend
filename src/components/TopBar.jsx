import React from "react";
import { useNavigate } from "react-router-dom";
import shoppingCart from "../kazonShoppingCart.jpeg";
import "../components/css/TopBar.css";

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
          <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
        <div className="child">
          <button className="btn btn-outline-secondary" onClick={handleSign}>
            {" "}
            <h3 style={{ textAlign: "right" }}>Sign in</h3>
          </button>
        </div>
        <div className="child">
          <button className="btn btn-outline-secondary" onClick={handleCreate}>
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
