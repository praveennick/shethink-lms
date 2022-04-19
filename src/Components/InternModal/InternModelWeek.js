import React, { useEffect, useState } from "react";

import InputField from "../InputField/InputField";

function InternModelWeek({week=1}) {
  const [weekDays, setWeekDays] = useState([
    { day1: null },
    { day2: null },
    { day3: null },
    { day4: null },
    { day5: null },
    { day6: null },
  ]);

  const handleTaskInput = (e, index) => {
    const task = e.target.value;
    const tempState = [...weekDays];
    tempState[index][`day${index + 1}`] = task;
    setWeekDays(tempState);
  };
  useEffect(() => {
    console.log("weekdays", weekDays);
  });
  return (
    <div className="internModel-task-week-full">
            <p className="internModel-task-week">Week {week}</p>
      {weekDays?.map((value, index) => {
        return (
          <>
            <div className="internModel-task-day-item">
              <label htmlFor="" className="internModel-task-label">
                day {index + 1}
              </label>
              <InputField
                style={{ width: "30%", margin: "0 20px" }}
                placeholder={"type task"}
                onChange={(e) => handleTaskInput(e, index)}
              />
              <label htmlFor="" className="internModel-task-label">
                Add Reference Link
              </label>
              <InputField
                style={{ width: "30%", margin: "0 20px" }}
                placeholder={"paste here"}
              />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default InternModelWeek;
