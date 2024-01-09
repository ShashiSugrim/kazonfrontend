import React, {useState} from "react";
import LogoBar from "./LogoBar";
import CreateAccountCSS from "../css/CreateAccount.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleCreate = async (event) =>
  {
    // localStorage.setItem('username', JSON.stringify('signedin'));
    // console.log("username " + username);
    await axios.post(process.env.REACT_APP_BACKEND_URL+"createAccount", {email: email, password:password}).then((response)=>
    {
      
      console.log("response is " + JSON.stringify(response.data))
      alert("Created your account!");
      navigate("/");
    }).catch((err) => {
      if (err) {
        console.log("error" + err);
      }
    });
    let accessToken = await axios.post(process.env.REACT_APP_BACKEND_URL+"login", {email:email, password:password});
    console.log("accessToken is returning " + accessToken);
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("accessToken", accessToken.data.accessToken);

    console.log('localstorage auth is ' + localStorage.getItem('accessToken'));
    window.location.reload(false);
  }
  return (
    <>
      <LogoBar />

      <form className={CreateAccountCSS.form}>
        <label for="fname">EMAIL</label>
        <br />
        <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" />
        <br />

        <label for="fname">Username</label>
        <br />
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name="fname" />
        <br />

        <label for="lname">Password</label>
        <br />
        <input  value={password} onChange={(e)=>setPassword(e.target.value)}  name="lname" />
        <br />
        <button type="button" onClick={handleCreate} className={CreateAccountCSS.mainBut}>Create account</button>
      </form>
    </>
  );
};

export default CreateAccount;
