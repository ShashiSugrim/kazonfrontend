import React from "react";
import LogoBar from "./LogoBar";
import CreateAccountCSS from "../css/CreateAccount.module.css";

const CreateAccount = () => {
  return (
    <>
      <LogoBar />

      <form className={CreateAccountCSS.form}>
        <label for="fname">EMAIL</label>
        <br />
        <input type="text" id="email" name="email" />
        <br />

        <label for="fname">Username</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />

        <label for="lname">Password</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <button className={CreateAccountCSS.mainBut}>Create account</button>
      </form>
    </>
  );
};

export default CreateAccount;
