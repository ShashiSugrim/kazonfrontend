import React from "react";
import SignInCSS from "../css/SignIn.module.css";

const SignInPage = () => {
  return (
    <>
      <form className={SignInCSS.form}>
        <label for="fname">Username</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label for="lname">Password</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <button className={SignInCSS.signIn}>Sign In</button>
      </form>
    </>
  );
};

export default SignInPage;
