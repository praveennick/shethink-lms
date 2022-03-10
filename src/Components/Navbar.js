import React from "react";
import "../assets/css/Navbar.css";
import { ReactComponent as Bell } from "../assets/icons/bell.svg";
import { ReactComponent as Setting } from "../assets/icons/setting.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <h3>Dashboard</h3>
      </div>
      <div className="nav-right">
        <div className="nav-notification-icon">
          {/* <img src={bell} alt="" /> */}
          <Bell />
        </div>
        <div className="nav-notification-icon">
          {/* <img src={setting} alt="" className="settingIcon" /> */}
          <Setting />
        </div>
        <div className="nav-logout-btn">
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
