import React, { useEffect, useState } from "react";
import Product from "./Product";
import ProductPageCSS from "../css/ProductPage.module.css";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const SearchResults = ({}) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  //  let searchQuery = location.state.searchQuery;
   const { state } = useParams();
   let searchQuery = state;
   console.log("This is state in searchResults: " + state);
  function getProducts() {
    console.log("query is " + process.env.REACT_APP_BACKEND_URL+"search/" + searchQuery);
    // let searchQuery1 = 'pencils';
    axios
      .get(process.env.REACT_APP_BACKEND_URL+"search/" + searchQuery)
      .then((response) => {
        console.log("Responses are " + JSON.stringify(response.data));
        setProducts(response.data);
      })
      .catch((err) => {
        if (err) {
          console.log("error" + err);
        }
      });
  }
 useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h4 style={{ marginLeft: 20 }}>SearchResults for: {searchQuery}</h4>
      <div>
      <ul className={ProductPageCSS.flexcontainer}>
        {products.map((data, index) => {
          return (
            <Product
              source={data.imgurl}
              title={data.title}
              price={"$" + data.price}
              key={index}
            />
          );
        })}
      </ul>
    </div>
    </>
  );
};

export default SearchResults;
