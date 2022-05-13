import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import gamer from "../../assets/images/gamer.png";
import { ROLES } from "../../constant/roles";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-icon.svg";
import { ReactComponent as InternModelIcon } from "../../assets/icons/intern-model-icon.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as TaskIcon } from "../../assets/icons/assigned-task-icon.svg";
import { ReactComponent as CoursesIcon } from "../../assets/icons/courses.svg";
import { ReactComponent as ModuleIcon } from "../../assets/icons/module.svg";
import SidebarListItem from "./SidebarListItem";
import { Link } from "react-router-dom";
import SidebarMap from "./SidebarMap";
import { useDispatch, useSelector } from "react-redux";
import { userSigninAction } from "../../redux/actions/user.actions";

function Sidebar() {
  const userSignin = useSelector((state) => state.userSignin);
  const user_info = userSignin?.userInfo;
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState([]);
  const Funn = () => {
    if (user_info && user_info?.desgination?.toString() === ROLES.HR) {
      let sideBarElement = [
        { name: "Home", icon: <HomeIcon />, to: "/home" },
        { name: "Intern Model", icon: <TaskIcon />, to: "/internmodel" },
        { name: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
        { name: "Courses", icon: <CoursesIcon />, to: "/courses" },
        { name: "Modules", icon: <ModuleIcon />, to: "/modules" },
      ];
      setSidebar(sideBarElement);
    } else if (
      user_info &&
      user_info?.desgination?.toString() === ROLES.INTERN
    ) {
      let sideBarElement = [
        { name: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
        { name: "Assign Task", icon: <TaskIcon />, to: "/assigntask" },
        { name: "Courses", icon: <CoursesIcon />, to: "/courses" },
      ];
      setSidebar(sideBarElement);
    } else if (
      user_info &&
      user_info?.desgination?.toString() === ROLES.FULL_TIME
    ) {
      let sideBarElement = [
        { name: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
        { name: "Courses", icon: <CoursesIcon />, to: "/courses" },
        { name: "Modules", icon: <ModuleIcon />, to: "/modules" },
      ];
      setSidebar(sideBarElement);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      Funn();
    }, 2000);
  }, []);

  return (
    <div className="sidebar">
      <Link to="/home">
        <Logo className="sidebar-logo" />
      </Link>

      <Link className="sidebar-profile-box" to="/profile">
        <img src={gamer} alt="" className="sidebar-profile-pic" />
        <div className="sidebar-profile-name">
          <h4>{user_info.username}</h4>
          <p>{user_info?.desgination}</p>
        </div>
      </Link>
      <div className="sidebar-categories">
        <SidebarMap sidebarArray={sidebar} />
      </div>
    </div>
  );
}

export default Sidebar;
