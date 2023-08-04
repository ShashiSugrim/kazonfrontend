import React, { useState } from "react";
import LogoBar from "./LogoBar";
import ProductCart from "./ProductCart";
import CartCSS from "../css/Cart.module.css";

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
      <div className={CartCSS.productDiv}>
        <h2 className={CartCSS.heading}>Shopping Cart</h2>
        <ProductCart
          source="https://target.scene7.com/is/image/Target/GUEST_96690ddf-da77-486a-b504-877f71b49890?wid=1000&hei=1000&fit=constrain&qlt=80&fmt=webp"
          title="Ticonderoga Pencils"
          price="$5"
        />
        <ProductCart
          source="https://target.scene7.com/is/image/Target/GUEST_20a158aa-78a9-4752-ac52-33d79b82ebab?wid=325&hei=325&qlt=80&fmt=pjpeg"
          title="Headphones"
          price="$500"
        />
        <ProductCart
          source="https://target.scene7.com/is/image/Target/GUEST_857bae72-cbc4-420a-9a28-ee851c7f11ee?qlt=85&fmt=webp&hei=325&wid=325"
          title="Exercise Bike"
          price="$600"
        />
      </div>
      <div className={CartCSS.checkoutDiv}>
        <h3>Subtotal: $100</h3>
        <button className="btn btn-primary">Check out</button>
      </div>
    </>
  );
};

export default Cart;
