import React, { useEffect } from "react";
import "./Courses.css";
import { ReactComponent as CourseDesign } from "../../assets/images/course-design.svg";
import { ReactComponent as CourseBook } from "../../assets/images/Reading A Book.svg";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { courseList, pageNameAction } from "../../redux/actions/user.actions";

function Courses() {
  const userSignin = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();
  const listOfCourses = useSelector((state) => state.courseList);
  const pageName = useSelector((state) => state.pageNameAction);

  
  useEffect(() => {
    dispatch(courseList(userSignin.userInfo));
  }, []);

  useEffect(() => {
    console.log("listOfCourses", listOfCourses);
  }, [listOfCourses]);

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

      {listOfCourses.userInfo?.map((item, index) => {
        return <CourseItem key={item.courseID} data={item} />;
      })}
    </div>
  );
}

export default Courses;
