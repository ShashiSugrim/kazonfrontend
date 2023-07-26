import React from "react";
import Product from "./Product";

import "../components/css/ProductPage.css";

const ProductPage = () => {
  return (
    <div>
      <ul className="flex-container">
        <Product
          source="https://target.scene7.com/is/image/Target/GUEST_96690ddf-da77-486a-b504-877f71b49890?wid=1000&hei=1000&fit=constrain&qlt=80&fmt=webp"
          title="Ticonderoga Pencils"
          price="$5"
        ></Product>
        <Product
          source="https://target.scene7.com/is/image/Target/GUEST_20a158aa-78a9-4752-ac52-33d79b82ebab?wid=325&hei=325&qlt=80&fmt=pjpeg"
          title="Headphones"
          price="$500"
        />
        <Product
          source="https://target.scene7.com/is/image/Target/GUEST_857bae72-cbc4-420a-9a28-ee851c7f11ee?qlt=85&fmt=webp&hei=325&wid=325"
          title="Exercise Bike"
          price="$600"
        />
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
    </div>
  );
};

export default ProductPage;
