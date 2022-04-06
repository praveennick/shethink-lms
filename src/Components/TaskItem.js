import React from "react";

import { ReactComponent as TaskPlayIcon } from "../assets/icons/task-play-icon.svg";

function TaskItem({ fill, statusColor }) {
  return (
    <div className={`candidateProfile-task ${statusColor}`}>
      <TaskPlayIcon className="taskplay-icon" fill={fill} />
      <div>
        <h4>Week 1</h4>
        <p>All 6 Day's Task Completed</p>
      </div>
    </div>
  );
}

export default TaskItem;
