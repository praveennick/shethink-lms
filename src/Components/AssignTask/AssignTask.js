import React from "react";
import "./AssignTask.css";

import { ReactComponent as Design1 } from "../../assets/images/assignTask-design.svg";
import { ReactComponent as TaskComplete } from "../../assets/icons/tast-complete.svg";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AssignTask() {
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
        <Accordion className="assignTask-week">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Week 1</Typography>
          </AccordionSummary>
          <AccordionDetails className="assignTask-week-item assignTask-complete">
            <div className="assignTask-week-item-header">
              <h3>Day 1 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
          <AccordionDetails className="assignTask-week-item assignTask-running">
            <div className="assignTask-week-item-header">
              <h3>Day 2 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
          <AccordionDetails className="assignTask-week-item assignTask-locked">
            <div className="assignTask-week-item-header">
              <h3>Day 3 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="assignTask-week">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Week 2</Typography>
          </AccordionSummary>
          <AccordionDetails className="assignTask-week-item assignTask-complete">
            <div className="assignTask-week-item-header">
              <h3>Day 1 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
          <AccordionDetails className="assignTask-week-item assignTask-running">
            <div className="assignTask-week-item-header">
              <h3>Day 2 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
          <AccordionDetails className="assignTask-week-item assignTask-locked">
            <div className="assignTask-week-item-header">
              <h3>Day 3 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="assignTask-week">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Week 3</Typography>
          </AccordionSummary>
          <AccordionDetails className="assignTask-week-item assignTask-complete">
            <div className="assignTask-week-item-header">
              <h3>Day 1 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
          <AccordionDetails className="assignTask-week-item assignTask-running">
            <div className="assignTask-week-item-header">
              <h3>Day 2 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
          <AccordionDetails className="assignTask-week-item assignTask-locked">
            <div className="assignTask-week-item-header">
              <h3>Day 3 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="assignTask-week">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Week 4</Typography>
          </AccordionSummary>
          <AccordionDetails className="assignTask-week-item assignTask-complete">
            <div className="assignTask-week-item-header">
              <h3>Day 1 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
          <AccordionDetails className="assignTask-week-item assignTask-running">
            <div className="assignTask-week-item-header">
              <h3>Day 2 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
          <AccordionDetails className="assignTask-week-item assignTask-locked">
            <div className="assignTask-week-item-header">
              <h3>Day 3 Task</h3>
              {/* <input type="checkbox" name="" id="" /> */}
              <TaskComplete />
            </div>
            <div className="assignTask-week-item-content">
              <p>
                Create a typography for news paper app. Also mentioned details
                about font and why you choose it.
              </p>
              <a href="">Refrence Link- www.youtube.com</a>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default AssignTask;
