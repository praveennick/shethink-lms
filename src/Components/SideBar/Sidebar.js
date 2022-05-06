import React, { useEffect, useState } from "react";
import "./Sidebar.css";
// import logo from "../assets/images/logo.svg";
import gamer from "../../assets/images/gamer.png";
import {ROLES} from "../../constant/roles"
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
  // let sidebar=[]
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
    }
   else  if (user_info && user_info?.desgination?.toString() === ROLES.INTERN) {
      let sideBarElement = [
        { name: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
        { name: "Assign Task", icon: <TaskIcon />, to: "/assigntask"},
        { name: "Courses", icon: <CoursesIcon />, to: "/courses" },
      ];
      setSidebar(sideBarElement);
    }
    else if (user_info && user_info?.desgination?.toString() === ROLES.FULL_TIME) {
      let sideBarElement = [
        { name: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
        { name: "Courses", icon: <CoursesIcon />, to: "/courses" },
        { name: "Modules", icon: <ModuleIcon />, to: "/modules" },
      ];
      setSidebar(sideBarElement);
    }
  };
  useEffect(() => {
    // console.log("User Info", typeof user_info.desgination);
    setTimeout(() => {
      Funn();
    }, 2000);
  }, []);

  // React.useEffect(()=>{
  //   TempFetch()
  // },[])
  // const TempFetch = async ()=>{
  //   await fetch('http://15.207.21.72:3211/shethink/v1/candidates?designation=intern',{
  //     headers: {
  //       'Accept': 'application/json',
  //       'Authrization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MjU0MjMzNmJiZTc2NTc3MDExODEzNmIiLCJyb2xlIjoiRlQtSFIiLCJ1c2VyTmFtZSI6IlByYWdhdGkiLCJpYXQiOjE2NDk2ODE0NTksImV4cCI6MTY1ODMyMTQ1OX0.9eYw6Ph5ZSU0vGFxR-e_mDzpnO4WO7rDVhtMrwgiD-E'
  //     }
  //   }).then((res)=>res.json())
  //   .then((json)=>{
  //     console.log('In Json',json)
  //   })
  //   .catch((err)=>{
  //     console.log('In Catch',err)
  //   })
  // }

  const HrSidebar = [
    { name: "Home", icon: <HomeIcon />, to: "/home" },
    { name: "Intern Model", icon: <TaskIcon />, to: "/internmodel" },
    { name: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
    { name: "Courses", icon: <CoursesIcon />, to: "/courses" },
    { name: "Modules", icon: <ModuleIcon />, to: "/modules" },
  ];
  const InternSidebar = [
    { name: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
    { name: "Assign Task", icon: <TaskIcon />, to: "/interntask" },
    { name: "Courses", icon: <CoursesIcon />, to: "/courses" },
    { name: "Modules", icon: <ModuleIcon />, to: "/modules" },
  ];
  const CandidateSidebar = [
    { name: "Dashboard", icon: <DashboardIcon />, to: "/dashboard" },
    { name: "Courses", icon: <CoursesIcon />, to: "/courses" },
    { name: "Modules", icon: <ModuleIcon />, to: "/modules" },
  ];
  return (
    <div className="sidebar">
      <Link to="/home">
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
        <SidebarMap sidebarArray={sidebar} />
        {/* {
          role == 'Intern' ?
          <Sidebarmap  sidebarArray={InternSidebar}/>
          : 
          role == 'Ft-Hr' ?

           <Sidebar sidebarArray={HrSidebar}/> 
          : nlll 
        } */}
        {/* {HrSidebar?.map((value, index) => {
          return (
            <>
              {index===0?(<h3 className="sidebar-categories-title">Candidate Details</h3>):null}
              {index === 2 ? (
                <h3 className="sidebar-categories-title">Your Dashboard</h3>
              ) : null}
              <SidebarListItem
                name={value.name}
                icon={value.icon}
                to={value.to}
              />
            </>
          );
        })} */}
      </div>
    </div>
  );
}

export default Sidebar;
