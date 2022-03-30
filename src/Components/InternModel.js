import React from "react";
import "../assets/css/InternModel.css";

import InputField from "./InputField";

import { ReactComponent as EditIcon } from "../assets/icons/edit-icon.svg";

function InternModel() {
  return (
    <div className="internModel">
      <div className="internModel-btns">
        <a href="www.google.com" className="internModel-btn-1">
          Create Manually
        </a>
        <a href="www.google.com" className="internModel-btn-2">
          History
        </a>
      </div>
      <div className="internModel-task-header">
        <a href="www.google.com" className="internModel-export-btn">
          Export Excel Sheet
        </a>
        <label htmlFor="" className="internModel-task-header-label">
          {" "}
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
          <p className="internModel-task-week">Week 1</p>
          <div className="internModel-task-day-item">
            <label htmlFor="" className="internModel-task-label">
              Day 1
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"type task"}
            />
            <label htmlFor="" className="internModel-task-label">
              Add Reference Link
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"paste here"}
            />
          </div>
          <div className="internModel-task-day-item">
            <label htmlFor="" className="internModel-task-label">
              Day 2
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"type task"}
            />
            <label htmlFor="" className="internModel-task-label">
              Add Reference Link
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"paste here"}
            />
          </div>
          <div className="internModel-task-day-item">
            <label htmlFor="" className="internModel-task-label">
              Day 3
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"type task"}
            />
            <label htmlFor="" className="internModel-task-label">
              Add Reference Link
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"paste here"}
            />
          </div>
          <div className="internModel-task-day-item">
            <label htmlFor="" className="internModel-task-label">
              Day 4
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"type task"}
            />
            <label htmlFor="" className="internModel-task-label">
              Add Reference Link
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"paste here"}
            />
          </div>
          <div className="internModel-task-day-item">
            <label htmlFor="" className="internModel-task-label">
              Day 5
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"type task"}
            />
            <label htmlFor="" className="internModel-task-label">
              Add Reference Link
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"paste here"}
            />
          </div>
          <div className="internModel-task-day-item">
            <label htmlFor="" className="internModel-task-label">
              Day 6
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"type task"}
            />
            <label htmlFor="" className="internModel-task-label">
              Add Reference Link
            </label>
            <InputField
              style={{ width: "30%", margin: "0 20px" }}
              placeholder={"paste here"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternModel;
