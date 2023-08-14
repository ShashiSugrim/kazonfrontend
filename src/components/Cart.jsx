import React, { useState, useEffect} from "react";
import LogoBar from "./LogoBar";
import ProductCart from "./ProductCart";
import CartCSS from "../css/Cart.module.css";
import axios from "axios";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [subTotal, setsubTotal] = useState(0);
  useEffect(() => {
    let ignore = false;

    if (!ignore) getProducts();

    return () => {
      ignore = true;
    };
  }, []);
  useEffect(()=>
  {
    let total=0;
    console.log("Products are " + JSON.stringify(products));
    for(let i=0;i<products.length;i++)
    {
      total += parseFloat(products[i].price);
    }
    setsubTotal(total);
  }, [products]);
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
        
        console.log("we just set products and they are now " + JSON.stringify(products));
        // window.location.reload(false);

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
        <h3>Subtotal: ${subTotal}</h3>
        <button className="btn btn-primary">Check out</button>
      </div>
    </>
  );
};

export default Cart;
