import React from "react";
import "../assets/css/Login.css";

import loginImage from "../assets/images/000.png";
import logo from "../assets/images/logo.svg";
import InputField from "./InputField";

function Login() {
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
        <div className="login-content">
          <h1 className="welcome-heading">welcome🖐</h1>
          <p className="login-welcome">
            Welcome User, Please Enter Your Valid Details.
          </p>
          <InputField
            label="Email"
            type="text"
            placeholder="example@gmail.com"
          />
          <InputField label="Password" type="password" placeholder="*******" />
          <a href="www.google.com" className="forget-pwd">
            Forget Password
          </a>
          <button className="login-btn">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
