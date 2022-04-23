import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { ReactComponent as TaskComplete } from "../../assets/icons/task-complete.svg";
import { ReactComponent as TaskRunning } from "../../assets/icons/task-running.svg";
import { ReactComponent as TaskLocked } from "../../assets/icons/task-locked.svg";

function AssignTaskWeek({ weekNum }) {
  const style = {
    border: "1px solid #E1E1E1",
    boxShadow: 0,
  };
  return (
    <Accordion className="assignTask-week" sx={style}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Week {weekNum}</Typography>
      </AccordionSummary>
      <AccordionDetails className="assignTask-week-item assignTask-complete">
        <div className="assignTask-week-item-header">
          <h3>Day 1 Task</h3>
          {/* <input type="checkbox" name="" id="" /> */}
          <TaskComplete />
        </div>
        <div className="assignTask-week-item-content">
          <p>
            Create a typography for news paper app. Also mentioned details about
            font and why you choose it.
          </p>
          <a href="">Refrence Link- www.youtube.com</a>
        </div>
      </AccordionDetails>
      <AccordionDetails className="assignTask-week-item assignTask-running">
        <div className="assignTask-week-item-header">
          <h3>Day 2 Task</h3>
          {/* <input type="checkbox" name="" id="" /> */}
          <TaskRunning />
        </div>
        <div className="assignTask-week-item-content">
          <p>
            Create a typography for news paper app. Also mentioned details about
            font and why you choose it.
          </p>
          <a href="">Refrence Link- www.youtube.com</a>
        </div>
      </AccordionDetails>
      <AccordionDetails className="assignTask-week-item assignTask-locked">
        <div className="assignTask-week-item-header">
          <h3>Day 3 Task</h3>
          {/* <input type="checkbox" name="" id="" /> */}
          <TaskLocked />
        </div>
        <div className="assignTask-week-item-content">
          <p>
            Create a typography for news paper app. Also mentioned details about
            font and why you choose it.
          </p>
          <a href="">Refrence Link- www.youtube.com</a>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AssignTaskWeek;
