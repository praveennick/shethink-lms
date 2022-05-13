import React from "react";
import "./ViewModule.css";
import ViewModuleItem from "./ViewModuleItem";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import ModuleHeader from "./ModuleHeader";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function ViewModule(props) {
  const LOCATION = useLocation()
  const ID = LOCATION.state.courseID
 
  return (
    <div className="viewmodule">
      <ModuleHeader />
      <div className="viewmodule-allModules">
        <Link className="viewmodule-leftArrow-btn" to="/modules">
          <LeftArrow />
        </Link>
        <h3>All Modules</h3>
      </div>
    
      <div className="viewmodule-heading">
        <div>
          <h2 className="viewmodule-heading-title">
            Fundamental Of user Experience Design
          </h2>
          <p className="viewmodule-heading-time">
            Creation Date - 23/March/2022
          </p>
        </div>
        <Link className="viewmodule-edit-btn">Edit</Link>
      </div>
      <ViewModuleItem />
      
    </div>
  );
}

export default ViewModule;
