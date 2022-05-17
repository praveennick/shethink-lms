import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Setting } from "../../assets/icons/setting.svg";
import Notification from "../Notification/Notification";

import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { USER_SIGNIN_SUCCESS } from "../../constants";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();

  // const [showNotification, setShowNotification] = useState(false);

  const [navName, setNavName] = useState("Dashbord");

  useEffect(() => {
    // setNavName(localStorage.getItem("name"))
    console.log("11111111",localStorage.getItem("name"))
    setNavName(localStorage.getItem("name"));
    // window.addEventListener('storage', storageEventHandler, false);
  }, [navName]);

  const logoutUser = () => {
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: null,
    });
    // localStorage.clear();
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="navbar">
        {/* {console.log(showNotification)} */}
        <div className="nav-left">
          <h3>{navName}</h3>
        </div>
        <div className="nav-right">
          <div
            className="nav-notification-icon"
            // onClick={() => setShowNotification(!showNotification)}
            onClick={handleOpen}
          >
            {/* <img src={bell} alt="" /> */}
            <Bell />
          </div>
          <Link className="nav-notification-icon" to="/profile">
            {/* <img src={setting} alt="" className="settingIcon" /> */}
            <Setting />
          </Link>
          <div className="nav-logout-btn" onClick={logoutUser}>
            <p>Logout</p>
          </div>
        </div>
      </div>
      <Notification open={open} handleClose={handleClose} />
      {/* {showNotification && <Notification />} */}
    </>
  );
}

export default Navbar;
