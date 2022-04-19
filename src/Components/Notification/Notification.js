import React from "react";
import "./Notification.css";
import { ReactComponent as NotificationBell } from "../../assets/icons/notification-bell.svg";
import { ReactComponent as NotificationDelete } from "../../assets/icons/delete-forever.svg";
import NotificationItem from "./NotificationItem";
import NotificationTime from "./NotificationTime";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function Notification({ open, handleClose }) {
  console.log("open", open);
  const style = {
    position: "absolute",
    top: "20%",
    right: "13%",
    width: "23%",
    // transform: "translate(-50%, -50%)",
    // width: "40%",
    backgroundColor: "transparent",

    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 0,
    borderRadius: 1,
    overFlow: "hidden",
    p: 0,
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <div className="notification">
          <div className="notification-header">
            <NotificationBell className="notification-bell" />
            <h3>Notification</h3>
            <NotificationDelete className="notification-delete" />
          </div>
          <div className="notification-content">
            <NotificationTime time={"Today"} />
            <NotificationItem />
            <NotificationTime time={"Yesterday"} />
            <NotificationItem />
            <NotificationTime time={"Older Notification"} />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
          </div>
        </div>
      </Box>
    </Modal>
    // <div className="notification">
    //   <div className="notification-header">
    //     <NotificationBell className="notification-bell" />
    //     <h3>Notification</h3>
    //     <NotificationDelete className="notification-delete" />
    //   </div>
    //   <div className="notification-content">
    //     <NotificationTime time={"Today"} />
    //     <NotificationItem />
    //     <NotificationTime time={"Yesterday"} />
    //     <NotificationItem />
    //     <NotificationTime time={"Older Notification"} />
    //     <NotificationItem />
    //     <NotificationItem />
    //     <NotificationItem />
    //   </div>
    // </div>
  );
}

export default Notification;
