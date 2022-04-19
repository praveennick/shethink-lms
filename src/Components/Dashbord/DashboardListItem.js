import React from "react";
import "./DashboardListItem.css";

function DashboardListItem({ icon, name }) {
  return (
    <div className="dsb-list-item">
      {/* <img src={dashboardIcon} alt="" className="dashboardIcon" /> */}
      {/* <FontAwesomeIcon icon={faColumns} /> */}
      {icon}
      <h4 style={{ paddingLeft: "10px" }}>{name}</h4>
    </div>
  );
}

export default DashboardListItem;
