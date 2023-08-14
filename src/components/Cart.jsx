import React, { useState, useEffect} from "react";
import LogoBar from "./LogoBar";
import ProductCart from "./ProductCart";
import CartCSS from "../css/Cart.module.css";
import axios from "axios";

const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let ignore = false;

    if (!ignore) getProducts();

    return () => {
      ignore = true;
    };
  }, []);
  function getProducts() {
    axios
      .get("http://localhost:3001/cart", {
        headers:
        {
          Authorization: localStorage.getItem('accessToken')
        }
      })
      .then((response) => {
        console.log("Responses are " + JSON.stringify(response.data));
        setProducts(response.data);
      })
      .catch((err) => {
        if (err) {
          console.log("error" + err);
        }
      });
  }
  return (
    <>
      <LogoBar />
      <div className={CartCSS.productDiv}>
        <h2 className={CartCSS.heading}>Shopping Cart</h2>
        {products.map((data, index) => {
          return (
            <ProductCart
              source={data.imgurl}
              title={data.title}
              price={"$" + data.price}
              key={index}
              prodID = {data.id}
            />
          );
        })}
      </div>
      <div className={CartCSS.checkoutDiv}>
        <h3>Subtotal: $100</h3>
        <button className="btn btn-primary">Check out</button>
      </div>
    </>
  );
};

export default Cart;
