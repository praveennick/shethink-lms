import React from "react";
import moment from "moment";
import "./Calendar.css";

function Calendar() {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="calandar">
      <h3>{moment().format("MMM YYYY")}</h3>
      <div className="calandar-items">
        {console.log("today", moment().format("ddd"))}
        {week?.map((item, index) => {
          return (
            <>
              {/* <div className="calandar-item"> */}
              <div
                className={
                  moment().format("ddd") === item
                    ? "calandar-item-today"
                    : "calandar-item"
                }
              >
                <p className="calandar-item-week">{item}</p>
                <p className="calandar-item-day">
                  {moment().startOf("week").add(index, "day").date()}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
