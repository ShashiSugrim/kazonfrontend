import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import shoppingCart from "../kazonShoppingCart.png";
import TopBarCSS from "../css/TopBar.module.css";

const TopBar = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");

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

  async function handleSearch(event) {
    await console.log('from top bar our search query is ' + inputText);
    navigate("searchResults/" + inputText);
  }

  return (
    <>
      <div className={TopBarCSS.parent}>
        <div className={TopBarCSS.child}>
          <nav>
            <div>
              <form role="search">
                <input
                  className={TopBarCSS.searchBar}
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(input) => {setInputText(input.target.value)}}
                />
                <button
                  onClick={handleSearch}
                  className={TopBarCSS.signCreate}
                  type="submit"
                >
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
