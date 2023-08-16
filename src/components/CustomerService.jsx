import React, { useReducer } from "react";
import CustomerServiceCSS from "../css/CustomerService.module.css";
import { useNavigate } from "react-router-dom";

const CustomerService = () => {
  const navigate = useNavigate();

  function handleReport(event) {
    navigate("../report");
  }

  return (
    <>
      <h2 className={CustomerServiceCSS.cs}>Welcome to Customer Service</h2>
      <h3 className={CustomerServiceCSS.cs}>Call us at 1-800-888-KAZN</h3>
      <div className={CustomerServiceCSS.container}>
        <button className={CustomerServiceCSS.box}>
          A delivery, order, or return
        </button>
        <button onClick={handleReport} className={CustomerServiceCSS.box}>
          Report something suspicious
        </button>
      </div>
    </>
  );
};

export default CustomerService;
