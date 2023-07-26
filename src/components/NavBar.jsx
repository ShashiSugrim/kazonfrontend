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
        <div>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button onClick={handleCust} className="btn btn-outline-primary">
              Customer Service
            </button>
            <button onClick={handleBest} className="btn btn-outline-primary">
              Best Sellers
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
