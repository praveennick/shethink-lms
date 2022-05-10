import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import {ROLES} from '../../constant/roles'
import loginImage from "../../assets/images/000.png";
import logo from "../../assets/images/logo.svg";
import { userSigninAction } from "../../redux/actions/user.actions";
import InputField from "../InputField/InputField";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const userSignin = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault();
    console.log(email, password);
    dispatch(userSigninAction({ emailID: email, password: password }));
  };

  useEffect(() => {
    if (userSignin && userSignin.userInfo && userSignin.userInfo?.desgination===ROLES.HR) {
      props.history.push("/home"); 
  
    }else
    if (userSignin && userSignin.userInfo && userSignin.userInfo?.desgination===ROLES.INTERN) {
      props.history.push("/dashbord"); 
  
    }else
    if(userSignin && userSignin.userInfo && userSignin.userInfo?.desgination===ROLES.FULL_TIME){
      props.history.push("/dashboard"); 
    }
    console.log("userSignin.userInfo", userSignin);
  }, [userSignin, props.history]);

  return (
    <>
      {userSignin && userSignin.loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className="login-container">
          <div className="login-left">
            <img src={loginImage} alt="" className="login-image" />
            <div className="login-blur-content">
              <h3>
                "Study without desire spoils the memory, and it retains nothing
                that takes in."
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
      )}
    </>
  );
}

export default Login;
