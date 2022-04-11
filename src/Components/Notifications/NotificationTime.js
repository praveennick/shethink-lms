import React from "react";
import "../assets/css/NotificationTime.css";

function NotificationTime({ time }) {
  return <h6 className="notificationTime">{time}</h6>;
}

export default NotificationTime;
