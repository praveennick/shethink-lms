import React, { useEffect, useState } from "react";
import "../assets/css/Navbar.css";
import { ReactComponent as Bell } from "../assets/icons/bell.svg";
import { ReactComponent as Setting } from "../assets/icons/setting.svg";
import Notification from "./Notification";

import { Link } from "react-router-dom";

function Navbar() {
  const [showNotification, setShowNotification] = useState(false);

  const [navName, setNavName] = useState("");

  useEffect(() => {
    setNavName(localStorage.getItem("name"));
    console.log(navName);
  }, [navName]);

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
            onClick={() => setShowNotification(!showNotification)}
          >
            {/* <img src={bell} alt="" /> */}
            <Bell />
          </div>
          <Link className="nav-notification-icon" to="/profile">
            {/* <img src={setting} alt="" className="settingIcon" /> */}
            <Setting />
          </Link>
          <div className="nav-logout-btn">
            <p>Logout</p>
          </div>
        </div>
      </div>
      {showNotification && <Notification />}
    </>
  );
}

export default Navbar;
