import React from "react";
import "../assets/css/RecentActivity.css";

function RecentActivity() {
  return (
    <div className="recentActivity">
      <h3>Your Recent Activity</h3>
      <div className="recentActivity-items">
        <h4 className="recentActivity-items-heading">Recently Access Course</h4>
        <div className="recentActivity-item">
          <div className="recentActivity-item-header">
            <h4 className="recentActivity-item-header-heading">
              Fundamental of User Experince Design
            </h4>
            <div className="recentActivity-item-header-dateNTime">
              <p className="recentActivity-item-date">DATE-22 MARCH 2022</p>
              <p className="recentActivity-item-time">TIME- 5:40 PM</p>
            </div>
          </div>
          <p className="recentActivity-item-sign">By Praveen Kumar</p>
        </div>
        <div className="recentActivity-item">
          <div className="recentActivity-item-header">
            <h4 className="recentActivity-item-header-heading">
              Fundamental of User Experince Design
            </h4>
            <div className="recentActivity-item-header-dateNTime">
              <p className="recentActivity-item-date">DATE-22 MARCH 2022</p>
              <p className="recentActivity-item-time">TIME- 5:40 PM</p>
            </div>
          </div>
          <p className="recentActivity-item-sign">By Praveen Kumar</p>
        </div>
        <div className="recentActivity-item">
          <div className="recentActivity-item-header">
            <h4 className="recentActivity-item-header-heading">
              Fundamental of User Experince Design
            </h4>
            <div className="recentActivity-item-header-dateNTime">
              <p className="recentActivity-item-date">DATE-22 MARCH 2022</p>
              <p className="recentActivity-item-time">TIME- 5:40 PM</p>
            </div>
          </div>
          <p className="recentActivity-item-sign">By Praveen Kumar</p>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
