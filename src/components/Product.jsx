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
      <div className="card" style={{ width: "14rem" }}>
        <img src={source} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price: {price}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Product;
