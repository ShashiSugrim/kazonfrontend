import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoBar = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState([]);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("username"));
    if (username) {
      setUsername(username);
    } else {
      setUsername("Guest");
    }
  }, []);
  function goHome(event) {
    navigate("/");
  }

  let handleSignOut = (event) => {
    localStorage.setItem("accessToken", "null");
    localStorage.setItem("username", JSON.stringify("Guest"));
    alert("Signed out!");
    window.location.reload(false);
  };

  return (
    <div style={{ backgroundColor: "#3878f7", display: "flex" }}>
      <h2
        onClick={goHome}
        style={{
          textAlign: "right",
          color: "yellow",
          width: "53%",
        }}
      >
        Kazon
      </h2>
      <div
        style={{
          textAlign: "right",
          color: "yellow",
          width: "20%",
        }}
      >
        <button
          onClick={handleSignOut}
          style={{
            marginTop: 10,
            marginRight: 20,
          }}
        >
          Sign out
        </button>
      </div>
      <div
        style={{
          textAlign: "right",
          color: "yellow",
          width: "20%",
        }}
      >
        Signed in as: {username}
      </div>
    </div>
  );
};

export default LogoBar;
