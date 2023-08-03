import React from "react";
import LogoBar from "./LogoBar";
import ProductCart from "./ProductCart";
import CartCSS from "../css/Cart.module.css";

const Cart = () => {
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
