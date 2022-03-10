import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import "../assets/css/Dashboard.css";
import Courses from "./Courses";
import Notification from "./Notification";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Navbar />
      {/* <Notification /> */}
      <div className="dashboard-content">
        <Courses />
      </div>
    </div>
  );
}

export default Dashboard;
