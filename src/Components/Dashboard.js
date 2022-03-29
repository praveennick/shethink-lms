import React from "react";
import Calandar from "./Calendar";

import "../assets/css/Dashboard.css";

import { ReactComponent as LabelDesign } from "../assets/images/dash-label-design.svg";
// import { ReactComponent as HeaderDesign } from "../assets/images/dash-header-design.svg";
import HeaderDesign from "../assets/images/dash-header-design.png";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-label">
          <LabelDesign className="dashboard-label-design" />
          <div className="dashboard-label-headings">
            <h2>Nil</h2>
            <p>Your Total Course</p>
          </div>
        </div>
        <div className="dashboard-label">
          <LabelDesign className="dashboard-label-design" />
          <div className="dashboard-label-headings">
            <h2>03</h2>
            <p>Total Course Liked By You</p>
          </div>
        </div>
        <div>
          <img src={HeaderDesign} alt="" className="dashboard-header-design" />
          {/* <HeaderDesign className="dashboard-header-design" /> */}
        </div>
      </div>
      <Calandar />
    </div>
  );
}

export default Dashboard;
