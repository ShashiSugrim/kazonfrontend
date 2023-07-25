import React from "react";
import reactLogo from "../logo192.png";

interface Props {
  imageSrc: string;
  title: string;
  price: string;
}

const Product = ({ source, title, price }) => {
  return (
    <>
      <div>
        <img
          className="flex-item"
          src={source ? source : reactLogo}
          alt="no image"
        />
        <li>{title}</li>
        <li>{price}</li>
        <button>Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
