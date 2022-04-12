import React from "react";
import "../assets/css/CourseItem.css";
import { ReactComponent as LinkedinLogo } from "../assets/icons/linkedin-square.svg";
import moment from "moment";

import { Link } from "react-router-dom";

function CourseItem({ data }) {
  console.log(data.courseID, "courseID");
  localStorage.setItem("courseID", data.courseID);
  return (
    <div className="courseItem">
      <div className="courseItem-upper">
        <div className="upper-left">
          <h3 className="courseItem-heading">{data.courseName}</h3>
          <p>Creation Date - {moment(data.createdAt).format("d/MMM/Y")}</p>
        </div>
        <div className="upper-right">
          <h4>Created by-{data.author}</h4>
          <a href="www.google.com" className="coursesItem-linkedin">
            Follow <LinkedinLogo style={{ marginLeft: "5px" }} />
          </a>
        </div>
      </div>
      <div className="courseItem-lower">
        <p className="courseItem-disc">discription- {data.courseDescription}</p>
        <Link className="viewCourse-btn" to="/viewCourse" hello={"hello"}>
          View Course
        </Link>
      </div>
    </div>
  );
}

export default CourseItem;
