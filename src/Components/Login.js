import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../assets/css/Login.css";

import loginImage from "../assets/images/000.png";
import logo from "../assets/images/logo.svg";
import InputField from "./InputField";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const userSignin = useSelector((state) => state.userSignin);

  const loginUser = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="" className="login-image" />
        <div className="login-blur-content">
          <h3>
            "Study without desire spoils the memory, and it retains nothing that
            takes in."
          </h3>
          <h5>-Leonardo da Vinci</h5>
        </div>
      </div>
      <div className="login-right">
        <img src={logo} alt="" className="logo" />
        <form className="login-content">
          <h1 className="welcome-heading">welcome🖐</h1>
          <p className="login-welcome">
            Welcome User, Please Enter Your Valid Details.
          </p>
          <InputField
            label="Email"
            type="text"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="www.google.com" className="forget-pwd">
            Forget Password
          </a>
          <button className="login-btn" onClick={loginUser}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
