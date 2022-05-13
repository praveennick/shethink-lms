import React, { useState, useEffect } from "react";
import "./Modules.css";
import ModuleItem from "./ModuleItem";
import ModuleHeader from "./ModuleHeader";
import { useDispatch, useSelector } from "react-redux";
import { courseList } from "../../redux/actions/user.actions";

function Modules() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const allModules = useSelector((state) => state.courseList);
  const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    dispatch(courseList(userSignin.userInfo));
  }, []);

  return (
    <div className="modules">
      <ModuleHeader />
      <div className="module-content">
        <h3 className="module-content-heading">My Module</h3>
        <div className="viewmodule-month-filter">
          <label for="month">Search By Month</label>
          <select name="month" id="month" className="viewmodule-month">
            <option value="00">Select Month</option>
            {MONTH?.map((month) => {
              return <option value={month}>{month}</option>;
            })}
          </select>
        </div>

        <div className="module-content-modules">
          {allModules.userInfo?.map((module) => {
            return <ModuleItem  data={module} />;
          })}
        </div>
      </div>
      <div className="module-loadMore-btn-container">
        <button className="module-loadMore-btn">Load More</button>
      </div>
    </div>
  );
}

export default Modules;
