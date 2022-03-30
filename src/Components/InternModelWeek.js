import React from "react";

import InputField from "./InputField";

function InternModelWeek() {
  return (
    <div className="internModel-task-week-full">
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
  );
}

export default InternModelWeek;
