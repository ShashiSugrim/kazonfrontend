import React from "react";
import { useNavigate } from "react-router-dom";
import shoppingCart from "../kazonShoppingCart.png";
import TopBarCSS from "../css/TopBar.module.css";

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
      <div className={TopBarCSS.parent}>
        <div className={TopBarCSS.child}>
          <nav>
            <div>
              <form role="search">
                <input
                  style={{ width: 1000, marginRight: 10 }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="Search-bar"
                />
                <button className={TopBarCSS.signCreate} type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
        <div className={TopBarCSS.child}>
          <button className={TopBarCSS.signCreate} onClick={handleSign}>
            {" "}
            Sign in
          </button>
        </div>
        <div className={TopBarCSS.child}>
          <button className={TopBarCSS.signCreate} onClick={handleCreate}>
            {" "}
            Create Account
          </button>
        </div>
      </div>
      <button onClick={handleCart} className={TopBarCSS.shoppingCartButton}>
        <img
          className={TopBarCSS.shoppingCartImage}
          src={shoppingCart}
          alt={TopBarCSS.shoppingCart}
        />
      </button>
    </>
  );
};

export default TopBar;
