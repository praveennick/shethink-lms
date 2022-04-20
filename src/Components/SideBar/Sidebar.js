import React from "react";
import "./Sidebar.css";
// import logo from "../assets/images/logo.svg";
import gamer from "../../assets/images/gamer.png";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-icon.svg";
import { ReactComponent as InternModelIcon } from "../../assets/icons/intern-model-icon.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as TaskIcon } from "../../assets/icons/assigned-task-icon.svg";
import { ReactComponent as CoursesIcon } from "../../assets/icons/courses.svg";
import { ReactComponent as ModuleIcon } from "../../assets/icons/module.svg";

import SidebarListItem from "./SidebarListItem";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/home">
        {/* <img src={logo} alt="" className="sidebar-logo" /> */}
        <Logo className="sidebar-logo" />
      </Link>

      <Link className="sidebar-profile-box" to="/profile">
        <img src={gamer} alt="" className="sidebar-profile-pic" />
        <div className="sidebar-profile-name">
          <h4>Praveen Kumar</h4>
          <p>React Developer</p>
        </div>
      </Link>
      <div className="sidebar-categories">
        <h3 className="sidebar-categories-title">Candidate Details</h3>
        <SidebarListItem name="Home" icon={<HomeIcon />} to={"/home"} />
        <SidebarListItem
          name="Intern Model"
          icon={<InternModelIcon />}
          to={"/internModel"}
        />
        <h3 className="sidebar-categories-title">Your Dashboard</h3>
        <SidebarListItem
          name="Dashboard"
          icon={<DashboardIcon />}
          to={"/dashboard"}
        />
        <SidebarListItem
          name="Task Assigned"
          icon={<TaskIcon />}
          to={"/assignTask"}
        />
        <SidebarListItem
          name="Courses"
          icon={<CoursesIcon />}
          to={"/courses"}
        />
        <SidebarListItem name="Modules" icon={<ModuleIcon />} to={"/modules"} />
      </div>
    </div>
  );
}

export default Sidebar;
