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
import Cart from "./components/Cart";
import CreateAccount from "./components/CreateAccount";

function App() {
  const navigate = useNavigate();

  function handleLogo(event) {
    navigate("/");
  }
  return (
    <>
      <div className="App">
        {/* <Home /> */}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="/createaccount" element={<CreateAccount />} />

          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
