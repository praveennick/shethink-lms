import React from "react";

function RecentActivityItem() {
  return (
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
  );
}

export default RecentActivityItem;
