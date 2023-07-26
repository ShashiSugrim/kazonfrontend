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
      <div class="card" style={{ width: "14rem" }}>
        <img src={source} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">Price: {price}</p>
          <a href="#" class="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Product;
