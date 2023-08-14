import React, {useState} from "react";
import SignInCSS from "../css/SignIn.module.css";
import axios from "axios";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (event) =>
  {
    // localStorage.setItem('username', JSON.stringify('signedin'));
    // console.log("username " + username);
    await axios.post("http://localhost:3001/login", {email: username, password:password}).then((response)=>
    {
      if(response.data.accessToken === undefined)
      {
        localStorage.setItem('accessToken', 'null');
        localStorage.setItem('username', JSON.stringify('Guest'));
        }
      else
      {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('username', JSON.stringify(username));
  
      }
      console.log("response is " + JSON.stringify(response.data))
    }).catch((err) => {
      if (err) {
        console.log("error" + err);
      }
    });
    console.log('localstorage auth is ' + localStorage.getItem('accessToken'));
    window.location.reload(false);
  }
  
  return (
    <>
      <form className={SignInCSS.form} onsubmit="return false">
        <label for="fname">Email</label>
        <br />
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name="fname" />
        <br />
        <label for="lname">Password</label>
        <br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  name="lname" />
        <br />
        <button className={SignInCSS.signIn} type="button" onClick={handleSignIn}>Sign In</button>
      </form>
    </>
  );
};

export default SignInPage;
