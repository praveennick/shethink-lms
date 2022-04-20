import React from "react";
import "./RecentActivity.css";
import RecentActivityItem from "./RecentActivityItem";

function RecentActivity() {
  const recentActivity = null;

  return (
    <div className="recentActivity">
      <h3>Your Recent Activity</h3>
      <div className="recentActivity-items">
        <h4 className="recentActivity-items-heading">Recently Access Course</h4>
        {recentActivity?<div>
          <RecentActivityItem />
          <RecentActivityItem />
          
        </div>:<h2 className="no_data">You cannot access any course right now !!!</h2>}
        
      </div>
    </div>
  );
}

export default RecentActivity;
