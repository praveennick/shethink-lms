import React from "react";
import "../assets/css/InternModel.css";

import InputField from "./InputField";

import { ReactComponent as EditIcon } from "../assets/icons/edit-icon.svg";
import { ReactComponent as AddMoreIcon } from "../assets/icons/add-more-icon.svg";
import InternModelWeek from "./InternModelWeek";
import { Link } from "react-router-dom";

function InternModel() {
  return (
    <div className="internModel">
      <div className="internModel-btns">
        <Link to="/internModel" className="internModel-btn-1">
          Create Manually
        </Link>
        <Link to="/internHistory" className="internModel-btn-2">
          History
        </Link>
      </div>
      <div className="internModel-task-header">
        <a href="www.google.com" className="internModel-export-btn">
          Export Excel Sheet
        </a>
        <label htmlFor="" className="internModel-task-header-label">
          Title of Task
        </label>
        <InputField
          style={{ width: "50%", margin: "10px 0" }}
          placeholder={"e.g.- react task"}
        />
      </div>
      <div className="internModel-task-content">
        <div className="internModel-task-content-header">
          <h3 className="internModel-task-content-title">
            Schedule task by week
          </h3>
          <EditIcon className="internModel-edit-icon" />
        </div>
        <div className="internModel-task-week-form">
          <InternModelWeek />
          <a href="" className="internModel-addMore">
            Add more <AddMoreIcon />
          </a>
        </div>
      </div>
      <div className="internModel-footer">
        <label htmlFor="" className="internModel-task-candidate-label">
          Assigned Task To
        </label>
        <br />
        <InputField
          style={{ width: "50%", margin: "10px 0" }}
          placeholder={"Name of candidate"}
        />
      </div>
      <a href="" className="internModel-footer-btn">
        Save
      </a>
    </div>
  );
}

export default InternModel;
