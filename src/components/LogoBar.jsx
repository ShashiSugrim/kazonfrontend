import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const LogoBar = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState([]);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem('username'));
    if (username) {
     setUsername(username);
    } else
    {
      setUsername("Guest");
    }
  }, []);
  function goHome(event) {
    navigate("/");
  }
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
          color: "yellow",
          marginRight: 40,
          textAlign: "right",
          flexGrow: 1,
        }}
      >
        Signed in as: {username}
      </div>
    </div>
  );
};

export default LogoBar;
