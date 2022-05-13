import React, { useEffect, useState } from "react";
import "./Courses.css";
import { ReactComponent as CourseDesign } from "../../assets/images/course-design.svg";
import { ReactComponent as CourseBook } from "../../assets/images/Reading A Book.svg";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import {
  courseList,
  pageNameAction,
  getTechnology,
} from "../../redux/actions/user.actions";

function Courses() {
  const userSignin = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();
  const listOfCourses = useSelector((state) => state.courseList);
  const pageName = useSelector((state) => state.pageNameAction);
  const getSkills = useSelector((state) => state.getTechnology);
  const levels = ["Beginners", "Advance"];
  const [level, setLevel] = useState("Beginner");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [fetchedSkills, setfetchedSkills] = useState([]);

  useEffect(() => {
    dispatch(courseList(userSignin.userInfo));
    dispatch(getTechnology(userSignin.userInfo));
  }, []);

  useEffect(() => {
    let skill = [];
    if (getSkills.commentInfo) {
      getSkills.commentInfo?.map((item) => {
        return skill.push(item.title);
      });
    }
    setfetchedSkills(skill);
  });

  const handleBeginners = () => {
    setLevel("Beginner");
    setCurrentLevel(0);
  };
  const handleAdvance = () => {
    setLevel("Advance");
    setCurrentLevel(1);
  };

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
        {levels?.map((value, index) => {
          return (
            <div
              className={
                index === currentLevel
                  ? "active-course-category"
                  : "course-category"
              }
              onClick={index === 0 ? handleBeginners : handleAdvance}
            >
              For{value}
            </div>
          );
        })}
      </div>
      <div className="select-courses">
        <label htmlFor="courses" className="select-courses-label">
          Select Course
        </label>
        <select name="courses" className="select-courses-selectTag">
          <option value="select course">Select Course</option>
          {fetchedSkills?.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>

      {listOfCourses.userInfo?.map((item, index) => {
        return (
          <>
            {item.level === level ? (
              <CourseItem key={item.courseID} data={item} />
            ) : null}
          </>
        );
      })}
    </div>
  );
}

export default Courses;
