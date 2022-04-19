import React, { useState } from "react";
import "./InternHistoryItem.css";
import { ReactComponent as ThreeDots } from "../../assets/icons/three-dots-vertical.svg";
import { ReactComponent as CalandarIcon } from "../../assets/icons/calendar-icon.svg";
import { Link } from "react-router-dom";

function InternHistoryItem() {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <div className="internHistoryItem">
      <div className="internHistoryItem-header">
        <h3>React Js Test</h3>
        <ThreeDots
          className="internHistoryItem-threedots"
          onClick={() => setSubMenu(!subMenu)}
        />
        {subMenu && (
          <div className="internHistoryItem-menu">
            <Link
              to="/internModel"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>Reschedule</li>
            </Link>
            <li>Delete Task</li>
          </div>
        )}
      </div>
      <p className="internHistoryItem-task-detail">Task Detail</p>
      <div className="internHistoryItem-footer">
        <CalandarIcon />
        <p className="internHistoryItem-footer2">4 week task</p>
      </div>
    </div>
  );
}

export default InternHistoryItem;
