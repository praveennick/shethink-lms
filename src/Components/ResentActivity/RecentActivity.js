import React from "react";
import "../assets/css/RecentActivity.css";
import RecentActivityItem from "./RecentActivityItem";

function RecentActivity() {
  return (
    <div className="recentActivity">
      <h3>Your Recent Activity</h3>
      <div className="recentActivity-items">
        <h4 className="recentActivity-items-heading">Recently Access Course</h4>
        <div>
          <RecentActivityItem />
          <RecentActivityItem />
          <RecentActivityItem />
          <RecentActivityItem />
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
