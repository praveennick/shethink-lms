import React, { useEffect, useState } from "react";
import "../assets/css/ViewCourse.css";

import { ReactComponent as LeftArrow } from "../assets/icons/left-arrow.svg";
import { ReactComponent as ThreeDotsVertical } from "../assets/icons/three-dots-vertical.svg";
import { ReactComponent as LinkedinLogo } from "../assets/icons/linkedin-square.svg";
import { ReactComponent as HeartLogo } from "../assets/icons/heart.svg";
import { ReactComponent as CommentLogo } from "../assets/icons/comment-icon.svg";
import { ReactComponent as SmileLogo } from "../assets/icons/smile.svg";
import { ReactComponent as SendLogo } from "../assets/icons/send-icon.svg";
import viewCourseMedia1 from "../assets/images/viewCourse-banner-1.png";
import CommentItem from "./CommentItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCourseComment } from "../redux/actions/user.actions";

function ViewCourse({ hello }) {
  const [comment, setComment] = useState();

  let courseID = localStorage.getItem("courseID");
  console.log(courseID, "hai");

  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const comments = useSelector((state) => state.addCourseComment);

  const postComment = (event) => {
    event.preventDefault();
    // console.log("comment", comment);
    dispatch(
      addCourseComment(
        { message: comment, courseID: courseID },
        userSignin.userInfo
      )
    );
    setComment("");
  };

  useEffect(() => {
    console.log("comments", comments);
  }, []);
  return (
    <div className="viewCourse">
      <div className="viewCourse-content">
        <div className="viewCourse-header">
          <div className="viewCourse-left">
            <Link className="viewCourse-leftArrow-btn" to="/courses">
              <LeftArrow />
            </Link>
            <div className="viewCourse-title">
              <h3>fundamental of user experince design</h3>
            </div>
          </div>
          <div className="viewCourse-right">
            <ThreeDotsVertical />
          </div>
        </div>
        <div className="viewCourse-time">
          <p>creation date- 23/ march/2022</p>
        </div>
        <div className="viewCourse-media-box">
          <img src={viewCourseMedia1} alt="" className="viewCourseMediaImg" />
          <a
            href="https://www.youtube.com/watch?v=h3sxUR6i8tc"
            className="viewCourseMediaLink"
          >
            https://www.youtube.com/watch?v=h3sxUR6i8tc
          </a>
        </div>
        <div className="viewCourse-name">
          <h5>Created By - Praveen Kumar</h5>
          <LinkedinLogo />
        </div>
        <div className="viewCourse-description">
          <p>
            <b>description</b>- in this video lecture you get some basic idea of
            user exoerince design.f user exoerince designf user exoerince
            designf user exoerince designf user exoerince designf user exoerince
            designf user exoerince design
          </p>
        </div>
        <hr className="viewCourse-line" />
        <div className="viewCourse-likeComment-box">
          <div className="viewCourse-likes">
            <HeartLogo className="viewCourse-heartlogo" />
            <p>24 Likes</p>
          </div>
          <div className="viewCourse-comments">
            <CommentLogo className="viewCourse-commentlogo" />
            <p>4 Comments</p>
          </div>
        </div>
      </div>
      <div className="viewCourse-comment-box">
        <div className="viewCourse-comment-field">
          <label htmlFor="" className="viewCourse-label">
            Comment
          </label>
          <div className="viewCourse-inputField-with-icon">
            <div className="viewCourse-inputField-icons">
              <SmileLogo className="viewCourse-smileLogo" />
              <SendLogo className="viewCourse-sendLogo" onClick={postComment} />
            </div>
            <input
              type="text"
              className="viewCourse-inputField"
              placeholder="Type a message..."
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </div>
        </div>

        <CommentItem />
      </div>
    </div>
  );
}

export default ViewCourse;
