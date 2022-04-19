import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "./CandidateProfile.css";
import "react-calendar/dist/Calendar.css";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
import TaskItem from "../TaskItem";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { singleCandidate } from "../../redux/actions/user.actions";


function CandidateProfile() {
  const [value, onChange] = useState(new Date());
  const { id } = useParams();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const candidate = useSelector((state) => state.singleCandidate);
  console.log("candidate information",candidate)



  useEffect(() => {
    let obj = {
      id,
      token: userSignin.userInfo.token
    }
    dispatch(singleCandidate(obj));
  }, []);
  return (
    <div className="candidateProfile">
      <div className="candidateProfile-header-left">
        <Link className="candidateProfile-leftArrow-btn" to="/home">
          <LeftArrow />
        </Link>
        <div className="candidateProfile-name-designation">
          <h3 className="candidateProfile-name">{candidate?.candidateInfo?.username}</h3>
          <p className="candidateProfile-designation">
            Designation-{candidate?.candidateInfo?.username}
          </p>
        </div>
      </div>
      <div className="candidateProfile-header">
        <li>Email id - praveen@shethink.in</li>
        <li>Date of joining - 25/02/2022</li>
        <li>Task assign - 1 week schedule</li>
      </div>
      <div className="candidateProfile-content">
        <div className="candidateProfile-task-status">
          <h3>Task Status</h3>
          <div className="candidateProfile-task-status-box">
            <TaskItem statusColor={"task-completed"} />
            <TaskItem statusColor={"task-running"} />
            <TaskItem statusColor={"task-lock"} />
          </div>
        </div>
        <div className="candidateProfile-right">
          <div className="candidateProfile-attendance">
            <h3>Attendance</h3>
            <div className="candidateProfile-calendar">
              <div>
                <h2>{moment().format("DD")}</h2>
                <h2>{moment().format("MMMM YYYY")}</h2>
                {/* <h2>{monthName + " " + fullYear}</h2> */}
              </div>

              <Calendar
                onChange={onChange}
                value={value}
                className="full-calendar"
              />
            </div>
          </div>
          <div className="candidateProfile-recent-activity">
            <h3>Recent Activity</h3>
            <div className="candidateProfile-recent-activity-box">
              <h2 className="candidateProfile-recent-activity-week">Week 2</h2>
              <h2>Day 2</h2>
              <h4>Task Name - Fundamental of React js</h4>
              <ul>
                <li className="task-picked">Task pickup time - 11:00 am</li>
                <li className="task-ended">Task ended time - 7:00 pm</li>
              </ul>
              <div className="candidateProfile-down-btn">
                <DownArrow stroke="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
