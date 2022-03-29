import React from "react";

import "../assets/css/Calendar.css";

function Calendar() {
  return (
    <div className="calandar">
      <h3>March 2022</h3>
      <div className="calandar-items">
        <div className="calandar-item">
          <p className="calandar-item-week">Sun</p>
          <p className="calandar-item-day">1</p>
        </div>
        <div className="calandar-item">
          <p className="calandar-item-week">Mon</p>
          <p className="calandar-item-day">2</p>
        </div>
        <div className="calandar-item">
          <p className="calandar-item-week">Tue</p>
          <p className="calandar-item-day">3</p>
        </div>
        <div className="calandar-item">
          <p className="calandar-item-week">Wed</p>
          <p className="calandar-item-day">4</p>
        </div>
        <div className="calandar-item">
          <p className="calandar-item-week">Thu</p>
          <p className="calandar-item-day">5</p>
        </div>
        <div className="calandar-item">
          <p className="calandar-item-week">Fri</p>
          <p className="calandar-item-day">6</p>
        </div>
        <div className="calandar-item">
          <p className="calandar-item-week">Sat</p>
          <p className="calandar-item-day">7</p>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
