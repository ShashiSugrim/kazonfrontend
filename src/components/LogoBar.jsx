import React from "react";
import { useNavigate } from "react-router-dom";

const LogoBar = () => {
  let navigate = useNavigate();
  function goHome(event) {
    navigate("/");
  }
  return (
    <h2
      onClick={goHome}
      style={{
        textAlign: "center",
        color: "yellow",
        backgroundColor: "#3878f7",
      }}
    >
      Kazon{" "}
    </h2>
  );
};

export default LogoBar;
