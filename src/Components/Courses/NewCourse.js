import React from "react";
import { Link } from "react-router-dom";
import ViewModuleItem from "../Module/ViewModuleItem";
import "./NewCourse.css";

import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as ThreeDots } from "../../assets/icons/three-dots-vertical.svg";

function NewCourse() {
  return (
    <div className="newCourse">
      <div className="newCourse-back-btn">
        <Link className="newCourse-leftArrow-btn" to="/internHome">
          <LeftArrow />
        </Link>
        <h3>Back</h3>
      </div>
      <div className="newCourse-permission">
        <h3>Praveen wants to publish this course.</h3>
        <div className="newCourse-permission-btns">
          <button className="newCourse-permission-btn-1">
            Give Permission
          </button>
          <button className="newCourse-permission-btn-2">
            Deny Permission
          </button>
        </div>
      </div>
      <div className="newCourse-header">
        <h3>Fundamental of User Experince Design</h3>
        <p>Creation Date- 23/March/2022</p>
      </div>
      <ViewModuleItem hide={{ display: "none" }} />
      <div className="newCourse-previous-courses">
        <h3>Previous Courses</h3>
      </div>
      <div className="newCourse-access">
        <div>
          <h3>Fundamental of User Experince Design</h3>
          <p>Creation Date- 23/March/2022</p>
        </div>
        <ThreeDots />
      </div>
      <ViewModuleItem hide={{ display: "none" }} />
    </div>
  );
}

export default NewCourse;
