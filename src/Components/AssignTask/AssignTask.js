import React from "react";
import "./AssignTask.css";

import { ReactComponent as Design1 } from "../../assets/images/assignTask-design.svg";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AssignTaskWeek from "./AssignTaskWeek";

function AssignTask() {
  const style = {
    border: "1px solid #E1E1E1",
    boxShadow: 0,
  };
  return (
    <div className="assignTask">
      <div className="assignTask-header">
        <div className="assignTask-header-left">
          <h3>Assign Task</h3>
          <p>You can seen your weekly assignment task here.</p>
        </div>
        <Design1 />
      </div>
      <div className="assignTask-nav">
        <a href="www.google.com">Current Month Task</a>
        <a href="www.google.com">Next Month Task</a>
      </div>
      <button className="assignTask-markTask-btn">March Task List</button>
      <div className="assignTask-content">
        <AssignTaskWeek weekNum={1} />
        <AssignTaskWeek weekNum={2} />
      </div>
    </div>
  );
}

export default AssignTask;
