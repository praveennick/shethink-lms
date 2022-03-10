import React from "react";
import "../assets/css/Sidebar.css";
import logo from "../assets/images/logo.svg";
import gamer from "../assets/images/gamer.png";

import { ReactComponent as DashboardIcon } from "../assets/icons/dashboard.svg";
import { ReactComponent as CoursesIcon } from "../assets/icons/courses.svg";
import { ReactComponent as ModuleIcon } from "../assets/icons/module.svg";

import DashboardListItem from "./DashboardListItem";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <img src={logo} alt="" className="dashboard-logo" />
      </div>
      <div className="dashboard-profile-box">
        <img src={gamer} alt="" className="profile-pic" />
        <div className="dsb-profile-name">
          <h4>Praveen Kumar</h4>
          <p>React Developer</p>
        </div>
      </div>
      <div className="dsb-categories">
        <DashboardListItem name="Dashboard" icon={<DashboardIcon />} />
        <DashboardListItem name="Courses" icon={<CoursesIcon />} />
        <DashboardListItem name="Modules" icon={<ModuleIcon />} />
      </div>
    </div>
  );
}

export default Sidebar;
