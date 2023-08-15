import React, {useEffect} from "react";
import axios from "axios";

const Product = ({ source, title, price, prodID }) => {
  useEffect(()=>
  {
    console.log("This is " + title);
  }, [])

  const handleAdd = async() =>
  {

    await axios.post("http://localhost:3001/addToCart", {  id: prodID }, {headers: { "Authorization": localStorage.getItem('accessToken')} }).then((response) => {
      console.log("Responses are " + JSON.stringify(response.data));
      alert(`Added ${title} to cart!`);
      console.log("response status is " + response.status);

    })
    .catch((err) => {
      if(err.response.status ===408)
      {
        alert("Already in cart!");
      }
      if(localStorage.getItem('accessToken') === 'null')
      {
        console.log("not signed in!");
        alert("Not signed in!");
      }
      // if (err) {
      //   console.log("error" + err);
      // }
    });
  }
  return (
    <>
      <div className="card" style={{ width: "14rem" }}>
        <img src={source} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price: {price}</p>
          <a className="btn btn-primary" onClick={handleAdd}>
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Product;
