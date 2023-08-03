import React from "react";
import ProductCartCSS from "../css/ProductCart.module.css";

const ProductCart = ({ source, title, price }) => {
  return (
    <>
      <div className={ProductCartCSS.productCartDiv}>
        <div>
          <div className={ProductCartCSS.imageDiv}>
            <img className={ProductCartCSS.imageCS} src={source} alt="..." />
          </div>

          <div>
            <h5>
              <p style={{ textOverflow: "clip" }}>{title}</p>
            </h5>
            <p>Price: {price}</p>
            <button className="btn btn-primary">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
