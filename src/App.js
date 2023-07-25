import React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import shoppingCart from "../src/kazonShoppingCart.jpeg"; // Adjust the path to match your project structure
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";

function App() {
  const navigate = useNavigate();

  function handleLogo(event) {
    navigate("/");
  }
  return (
    <>
      <div className="App">
        <h2
          style={{
            textAlign: "center",
            color: "yellow",
            backgroundColor: "#3878f7",
          }}
        >
          Kazon{" "}
        </h2>

        <TopBar />
        <NavBar />
        {/* <nav>
          <Link to="/signin">Sign in</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="about" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
