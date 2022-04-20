import React from "react";
import Calandar from "../Calender/Calendar";
import "./Dashboard.css";
import { ReactComponent as LabelDesign } from "../../assets/images/dash-label-design.svg";
import HeaderDesign from "../../assets/images/dash-header-design.png";
import ProgressChart from "../ProgressChart/ProgressChart";
import RecentActivity from "../RecentActivity/RecentActivity";

function Dashboard() {
  const progress = null;
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
      <div className="dashboad-content">
        <div className="dashboard-left">
          <Calandar />
          {progress ? <ProgressChart /> : <h2 className="no_data">No Data Found</h2>}
        </div>
        
        <RecentActivity />
      </div>
    </div>
  );
}

export default Dashboard;
