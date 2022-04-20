import React from "react";
import "./SidebarListItem.css";
import { Link } from "react-router-dom";

function SidebarListItem({ icon, name, to }) {
  // localStorage.setItem("name", name);
  return (
    <Link
      className="sidebar-list-item"
      to={`${to}`}
      onClick={() => localStorage.setItem("name", name)}
    >
      {icon}
      {/* <div>{icon}</div> */}
      <h4 style={{ paddingLeft: "5px" }}>{name}</h4>
    </Link>
  );
}

export default SidebarListItem;
