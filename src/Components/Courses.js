import React from "react";
import "../assets/css/Courses.css";
import { ReactComponent as CourseDesign } from "../assets/images/course-design.svg";
import { ReactComponent as CourseBook } from "../assets/images/Reading A Book.svg";
import CourseItem from "./CourseItem";

function Courses() {
  return (
    <div className="courses">
      <div className="coursesBanner">
        <div className="courseBanner-left">
          <CourseDesign className="courseDesign" />
          <div className="coursesBanner-text">
            <p className="courseBanner-text-1">
              “Change is the end result of all true <br /> learning.”
            </p>
            <p className="courseBanner-text-2">Leo Buscaglia</p>
          </div>
        </div>
        <CourseBook className="course-book" />
      </div>
      <div className="course-category">
        <a href="www.google.com">For Beginners</a>
        <a href="www.google.com">Advance Learning</a>
      </div>
      <div className="select-courses">
        <label htmlFor="courses" className="select-courses-label">
          Select Course
        </label>
        <select name="courses" className="select-courses-selectTag">
          <option value="select course">Select Course</option>
          <option value="react">React</option>
          <option value="node">Node</option>
          <option value="mongodb">Mongodb</option>
          <option value="express">Express</option>
          <option value="angular">Angular</option>
        </select>
      </div>
      <CourseItem
        title={"fundamental of user experince design"}
        name={"Praveen Kumar"}
        discription={
          "in this video lecture you get some basic idea of user experince design."
        }
      />
      <CourseItem
        title={"fundamental of user experince design"}
        name={"Praveen Kumar"}
        discription={
          "in this video lecture you get some basic idea of user experince design."
        }
      />
      <CourseItem
        title={"fundamental of user experince design"}
        name={"Praveen Kumar"}
        discription={
          "in this video lecture you get some basic idea of user experince design."
        }
      />
      <CourseItem
        title={"fundamental of user experince design"}
        name={"Praveen Kumar"}
        discription={
          "in this video lecture you get some basic idea of user experince design."
        }
      />
      <CourseItem
        title={"fundamental of user experince design"}
        name={"Praveen Kumar"}
        discription={
          "in this video lecture you get some basic idea of user experince design."
        }
      />
    </div>
  );
}

export default Courses;
