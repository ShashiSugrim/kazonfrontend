import React from "react";
import LogoBar from "./LogoBar";

const CreateAccount = () => {
  return (
    <>
      <LogoBar />

      <form>
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
      </form>
      <button>Create account</button>
    </>
  );
};

export default CreateAccount;
