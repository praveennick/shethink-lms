import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/CandidateProfile.css";

import { ReactComponent as LeftArrow } from "../assets/icons/left-arrow.svg";
import { ReactComponent as DownArrow } from "../assets/icons/down-arrow.svg";
import TaskItem from "./TaskItem";

function CandidateProfile() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let monthName = month[d.getMonth()];
  let fullYear = d.getFullYear();
  return (
    <div className="candidateProfile">
      <div className="candidateProfile-header-left">
        <Link className="candidateProfile-leftArrow-btn" to="/home">
          <LeftArrow />
        </Link>
        <div className="candidateProfile-name-designation">
          <h3 className="candidateProfile-name">Praveen Kumar</h3>
          <p className="candidateProfile-designation">
            Designation-React js Developer
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
                <h2>{d.getDate()}</h2>
                <h2>{monthName + " " + fullYear}</h2>
              </div>
              <table className="full-calendar">
                <tr>
                  <th>S</th>
                  <th>S</th>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                </tr>
                <tr>
                  <td>29</td>
                  <td>30</td>
                  <td className="bg-color">1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="candidateProfile-recent-activity">
            <h3>Recent Activity</h3>
            <div className="candidateProfile-recent-activity-box">
              <h2 className="candidateProfile-recent-activity-week">Week 2</h2>
              <h2>Day 2</h2>
              <h4>Task Name - Fundamental of React js</h4>
              <ul>
                <li>Task pickup time - 11:00 am</li>
                <li>Task ended time - 7:00 pm</li>
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
