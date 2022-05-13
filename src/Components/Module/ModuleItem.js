import React, { useState, useEffect } from "react";
import "./ModuleItem.css";
import moment from "moment";
import { ReactComponent as ThreeDots } from "../../assets/icons/three-dots-vertical.svg";
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";
import DeletePopup from "../DeletePopup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ModuleItem({ data }) {
  const HISTORY=useHistory()
  const RANDOM_COLOR = [
    { text_color: "#258FF1", bg_color: "#258FF1" },
    { text_color: "#1C1B1F", bg_color: "#1C1B1F" },
    { text_color: "#FF866E", bg_color: "#FF866E" },
    { text_color: "#470FA3", bg_color: "#470FA3" },
    { text_color: "#1A959D", bg_color: "#1A959D" },
    { text_color: "#E5C175", bg_color: "#E5C175" },
  ];
  const TRY = RANDOM_COLOR[Math.floor(Math.random() * RANDOM_COLOR.length)]
  console.log({TRY})
  const [subMenu, setSubMenu] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const handleClose1 = () => {
    setOpen1(false);
    setSubMenu(false);
  };
  const handleDeleteCourse = () => {
    setOpen1(true);
    setDeleteModal(true);
  };

const handleView =()=>{
  HISTORY.push({
    pathname: "/viewmodule",
    state: {
      courseID: data.courseID,
    },
  })
}

  return (
    <div className="moduleItem">
      <div className="moduleItem-left">
        <div
          className="module_logo"
          style={{
            backgroundColor:
            TRY.bg_color,

          }}
        >
          <p
            className="module_logo_latter"
            style={{
              color:
              TRY.text_color,

            }}
          >
            {data.courseName.charAt(0)}
          </p>
        </div>
      </div>

      <div className="moduleItem-right">
        <div className="moduleItem-right-up">
          <h4>{data.courseName}</h4>
          <ThreeDots
            className="moduleItem-threeDots"
            onClick={() => setSubMenu(!subMenu)}
          />
          {subMenu && (
            <div className="moduleItem-menu">
              <Link
                to="/editModule"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>Edit</li>
              </Link>
              <li onClick={handleDeleteCourse}>Delete</li>
              {deleteModal ? (
                <Modal
                  open={open1}
                  onClose={handleClose1}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <DeletePopup func={handleClose1} data={data} />
                </Modal>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        <p className="moduleItem-right-date">
          creation date- {moment(data.createdAt).format("DD/MMM/Y")}
        </p>
        <p className="moduleItem-right-description">
          <b>description</b> - {data.courseDescription.slice(0, 30) + "..."}
        </p>
        <button className="moduleItem-btn" onClick={handleView}>
          View Course
        </button>
      </div>
    </div>
  );
}

export default ModuleItem;
