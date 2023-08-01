import React, { useState } from "react";
import LogoBar from "./LogoBar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart using functional update
  const addItemToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  // Array of objects representing items
  const items = [
    { name: "Ticonderoga Pencils" },
    { name: "Headphones" },
    { name: "Exercise Bike" },
    { name: "Pens" },
    { name: "Dove Soap" },
    { name: "5 pack socks" },
    // You can add more items here
  ];

  // Inline styles for cart container and buttons
  const cartContainerStyle = {
    border: "2px solid #ccc",
    padding: "10px",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "8px 16px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <>
      <LogoBar />
      <h2>This is the shopping Cart!</h2>
      <div style={cartContainerStyle}>
        <h3>Cart Items:</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Dynamically render buttons for each item */}
      <div style={buttonContainerStyle}>
        {items.map((item, index) => (
          <button key={index} onClick={() => addItemToCart(item.name)} style={buttonStyle}>
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Cart;
