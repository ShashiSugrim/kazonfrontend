import React, { useState } from "react";
import LogoBar from "./LogoBar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
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

  return (
    <>
      <LogoBar />
      <h2>This is the shopping Cart!</h2>
      <div>
        <h3>Cart Items:</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Dynamically render buttons for each item */}
      {items.map((item, index) => (
        <button key={index} onClick={() => addItemToCart(item.name)}>
          {item.name}
        </button>
      ))}
    </>
  );
};

export default Cart;
