import React, { useState, useEffect } from "react";
import "./CourseItem.css";
import { ReactComponent as LinkedinLogo } from "../../assets/icons/linkedin-square.svg";
import moment from "moment";
import { ROLES } from "../../constant/roles";
import Modal from "@mui/material/Modal";
import ViewCourse from "./ViewCourse";
import DeletePopup from "../DeletePopup";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function CourseItem({ data }) {
  const navigate = useHistory();
  const [deleteModal, setDeleteModal] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);

  //delete course
  const [open1, setOpen1] = useState(false);
  const handleClose1 = () => setOpen1(false);
  const handleDelete = () => {
    setOpen1(true);
    setDeleteModal(true);
  };
 

  return (
    <div className="courseItem">
      <div className="courseItem-upper">
        <div className="upper-left">
          <h3 className="courseItem-heading">{data.courseName}</h3>
          <p>Creation Date - {moment(data.createdAt).format("DD/MMM/Y")}</p>
        </div>
        <div className="upper-right">
          <h4>Created by-{data.author}</h4>
          <a href="www.google.com" className="coursesItem-linkedin">
            Follow <LinkedinLogo style={{ marginLeft: "5px" }} />
          </a>
          {userSignin.userInfo.desgination === ROLES.HR ? (
            <h4
              className="coursesItem-linkedin"
              style={{ color: "red" }}
              onClick={handleDelete}
            >
              Delete
            </h4>
          ) : (
            ""
          )}

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
      </div>
      <div className="courseItem-lower">
        <p className="courseItem-disc">discription- {data.courseDescription}</p>

        <p>
          <div
            className="viewcourse-btn"
            onClick={() =>
              navigate.push({
                pathname: "/viewcourse",
                state: {
                  courseID: data.courseID,
                },
              })
            }
          >
            View Course
          </div>
        </p>
      </div>
    </div>
  );
}

export default CourseItem;
