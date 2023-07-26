import React from "react";
import Product from "./Product";

const BestSellers = () => {
  return (
    <>
      <h2>Kazon Best Sellers</h2>
      <ul className="flex-container">
        <Product
          source="https://target.scene7.com/is/image/Target/GUEST_84148b12-7ccd-451e-8bdd-247e4f803a30?qlt=85&fmt=webp&hei=325&wid=325"
          title="Pens"
          price="$5"
        />
        <Product
          source="https://pics.walgreens.com/prodimg/444200/900.jpg"
          title="Dove Soap"
          price="$3"
        >
          1
        </Product>
        <Product
          source="https://target.scene7.com/is/image/Target/GUEST_e87b36c4-eab2-461e-855b-241d55090888"
          title="5 pack socks"
          price="$16"
        />
      </ul>
    </>
  );
};

export default BestSellers;
