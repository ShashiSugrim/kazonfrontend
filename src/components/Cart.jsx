import React, { useState } from "react";
import LogoBar from "./LogoBar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart using functional update
  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === item);
    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.name === item
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { name: item, quantity: 1 }]);
    }
  };

  // Array of objects representing items with prices
  const items = [
    { name: "Ticonderoga Pencils", price: 5 },
    { name: "Headphones", price: 500 },
    { name: "Exercise Bike", price: 600 },
    { name: "Pens", price: 5 },
    { name: "Dove Soap", price: 3 },
    { name: "5 pack socks", price: 16 },
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

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * items.find((item) => item.name === cartItem.name).price,
      0
    );
  };

  return (
    <>
      <LogoBar />
      <h2>This is the shopping Cart!</h2>
      <div style={cartContainerStyle}>
        <h3>Cart Items:</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} {item.quantity > 1 ? `(${item.quantity}x)` : null}
            </li>
          ))}
        </ul>
        <h3>Total Price: ${calculateTotalPrice()}</h3>
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
