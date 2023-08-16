import React from "react";
import ProductCartCSS from "../css/ProductCart.module.css";
import axios from "axios";

const ProductCart = ({ source, title, price, prodID }) => {

  const handleRemove = async() =>
  {

    await axios.delete("http://localhost:3001/deleteFromCart", { data: { id: prodID }, headers: { "Authorization": localStorage.getItem('accessToken')} }).then((response) => {
      console.log("Responses are " + JSON.stringify(response.data));
      window.location.reload(false);

    })
    .catch((err) => {
      if (err) {
        console.log("error" + err);
      }
    });
  }
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
            <button className="btn btn-primary" onClick={handleRemove}>Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
