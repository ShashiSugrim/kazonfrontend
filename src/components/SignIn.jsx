import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import LogoBar from "./LogoBar";
import SignInPage from "./SignInPage";
import CreateAccount from "./CreateAccount";

const SignIn = () => {
  let navigate = useNavigate();

  return (
    <>
      <LogoBar />
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </>
  );
};

export default SignIn;
