import React from "react";
import "../assets/css/ViewModule.css";

import ViewModuleItem from "./ViewModuleItem";

import { ReactComponent as LeftArrow } from "../assets/icons/left-arrow.svg";

import ModuleHeader from "./ModuleHeader";
import { Link } from "react-router-dom";
// import { MenuItem, Select } from "@mui/material";

function ViewModule() {
  return (
    <div className="viewModule">
      <ModuleHeader />
      <div className="viewModule-allModules">
        <Link className="viewModule-leftArrow-btn" to="/modules">
          <LeftArrow />
        </Link>
        <h3>All Modules</h3>
      </div>
      <div className="viewModule-month-filter">
        <label for="month">Search By Month</label>
        <select name="month" id="month" className="viewModule-month">
          <option value="00">Select Month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <div className="viewModule-heading">
        <div>
          <h2 className="viewModule-heading-title">
            Fundamental Of user Experience Design
          </h2>
          <p className="viewModule-heading-time">
            Creation Date - 23/March/2022
          </p>
        </div>
        <Link className="viewModule-edit-btn">Edit</Link>
      </div>
      <ViewModuleItem />
      <ViewModuleItem />
      <ViewModuleItem />
      <ViewModuleItem />
    </div>
  );
}

export default ViewModule;
