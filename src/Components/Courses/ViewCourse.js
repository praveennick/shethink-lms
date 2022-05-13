import React, { useEffect, useState } from "react";
import "./ViewCourse.css";
import axiosInstance  from "../../api";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as ThreeDotsVertical } from "../../assets/icons/three-dots-vertical.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/icons/linkedin-square.svg";
import { ReactComponent as HeartLogo } from "../../assets/icons/heart.svg";
import { ReactComponent as CommentLogo } from "../../assets/icons/comment-icon.svg";
import { ReactComponent as SmileLogo } from "../../assets/icons/smile.svg";
import { ReactComponent as SendLogo } from "../../assets/icons/send-icon.svg";
import viewcourseMedia1 from "../../assets/images/viewCourse-banner-1.png";
import CommentItem from "../Comments/CommentItem";
import { Link,useHistory,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCourseComment } from "../../redux/actions/user.actions";
import moment from "moment";


function ViewCourse(props) {
  const history = useHistory();
  const [comment, setComment] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const addComments = useSelector((state) => state.addCourseComment);
  console.log("comments", addComments);

  const comments = useSelector((state) => state.addCourseComment);

  const postComment = (event) => {
    event.preventDefault();
    dispatch(addCourseComment({ message: comment }, userSignin.userInfo));
    setComment("");
  };
  const ID = location.state.courseID?location.state.courseID:"";
 
  const [courseDetail, setCourseDetail] = useState([])
  const getCourseViewData=()=>{
    try {
      axiosInstance.get(`/listcourseById?id=${ID}`,{
        headers:{ Authorization: `Bearer ${userSignin.userInfo.token}` }
      }).then((res) => {
      console.log(res.data.data,"API data From Course view")
      setCourseDetail(res.data.data[0])
      });
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => { 
    getCourseViewData();
  },[]);


  return (
    <div className="viewcourse">
      <div className="viewcourse-content">
        <div className="viewcourse-header">
          <div className="viewcourse-left">
            <Link className="viewcourse-leftArrow-btn" to="/courses">
              <LeftArrow />
            </Link>
            <div className="viewcourse-title">
              <h3>{courseDetail.courseName}</h3>
            </div>
          </div>
          <div className="viewcourse-right">
            <ThreeDotsVertical />
          </div>
        </div>
        <div className="viewcourse-time">
          <p>creation date-{moment(courseDetail.createdAt).format("d/MMM/Y")}</p>
        </div>
        <div className="viewcourse-media-box">
          <img src={viewcourseMedia1} alt="" className="viewcourseMediaImg" />
          <a
            href="https://www.youtube.com/watch?v=h3sxUR6i8tc"
            className="viewcourseMediaLink"
          >
           {console.log(courseDetail.refType?.video,"aaaaaaaaaaaaa")}
           {courseDetail.refType?.video}
          </a>
        </div>
        <div className="viewcourse-name">
          <h5>Created By - {courseDetail.author}</h5>
          <LinkedinLogo />
        </div>
        <div className="viewcourse-description">
          <p>
            <b>description</b>- {courseDetail.courseDescription}
          </p>
        </div>
        <hr className="viewcourse-line" />
        <div className="viewcourse-likeComment-box">
          <div className="viewcourse-likes">
            <HeartLogo className="viewcourse-heartlogo" />
            <p>24 Likes</p>
          </div>
          <div className="viewcourse-comments">
            <CommentLogo className="viewcourse-commentlogo" />
            <p>4 Comments</p>
          </div>
        </div>
      </div>
      <div className="viewcourse-comment-box">
        <div className="viewcourse-comment-field">
          <label htmlFor="" className="viewcourse-label">
            Comment
          </label>
          <div className="viewcourse-inputField-with-icon">
            <div className="viewcourse-inputField-icons">
              <SmileLogo className="viewcourse-smileLogo" />
              <SendLogo className="viewcourse-sendLogo" onClick={postComment} />
            </div>
            <input
              type="text"
              className="viewcourse-inputField"
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
