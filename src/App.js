import React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import shoppingCart from './kazonShoppingCart.jpeg'; // Adjust the path to match your project structure


function App() {
  return (
    <>
    <div>
        <h2 style={{textAlign: "center", color:'yellow',backgroundColor:'#3878f7'}}>Kazon </h2>
        </div>
      <div className="parent" >
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
        <button> <h3 style = {{textAlign: "right"}}>Sign in</h3></button> 
        </div>
        <div className="child">
        <button> <img src = {shoppingCart} alt= 'shoppingCart'/></button> 
        </div>
      </div>
      <h3 style={{ backgroundColor: '#3878f7' }}>
        <button> Customer Service</button>
        <button>Best Sellers</button>
      </h3>
      <div>
      <ul class="flex-container">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
      </div>
    </>
  );
}

export default App;
