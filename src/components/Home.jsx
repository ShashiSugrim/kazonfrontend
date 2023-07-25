import * as React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import ProductPage from "../components/ProductPage";
import shoppingCart from "../kazonShoppingCart.jpeg"; // Adjust the path to match your project structure
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import SignIn from "../components/SignIn";
import BestSellers from "./BestSellers";
import LogoBar from "./LogoBar";
import CustomerService from "./CustomerService";

export default function Home() {
  return (
    <>
      <LogoBar />
      <TopBar />
      <NavBar />
      {/* <nav>
          <Link to="/signin">Sign in</Link>
        </nav> */}
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="bestsellers" element={<BestSellers />} />
        <Route path="customerservice" element={<CustomerService />} />
      </Routes>
    </>
  );
}
