import React from "react";
import "../assets/css/CourseItem.css";
import { ReactComponent as LinkedinLogo } from "../assets/icons/linkedin-square.svg";

function CourseItem({ title, name, discription }) {
  return (
    <div className="courseItem">
      <div className="courseItem-upper">
        <div className="upper-left">
          <h3 className="courseItem-heading">{title}</h3>
          <p>Creation Date - 23/March/2022</p>
        </div>
        <div className="upper-right">
          <h4>Created by-{name}</h4>
          <a href="www.google.com" className="coursesItem-linkedin">
            Follow <LinkedinLogo style={{ marginLeft: "5px" }} />
          </a>
        </div>
      </div>
      <div className="courseItem-lower">
        <p className="courseItem-disc">discription- {discription}</p>
        <button className="viewCourse-btn">View Course</button>
      </div>
    </div>
  );
}

export default CourseItem;
