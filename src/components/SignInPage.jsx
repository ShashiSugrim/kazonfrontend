import React from "react";

const SignInPage = () => {
  return (
    <>
      <form>
        <label for="fname">Username</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label for="lname">Password</label>
        <br />
        <input type="text" id="lname" name="lname" />
      </form>
      <button>Sign In</button>
    </>
  );
};

export default SignInPage;
