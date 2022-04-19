import React, { useState } from "react";
import "./ModuleItem.css";

import { ReactComponent as ThreeDots } from "../../assets/icons/three-dots-vertical.svg";
import { Link } from "react-router-dom";

function ModuleItem({ banner }) {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <div className="moduleItem">
      <div className="moduleItem-left">
        <img src={banner} alt="" />
      </div>
      <div className="moduleItem-right">
        <div className="moduleItem-right-up">
          <h4>fundamental of user experince design</h4>
          <ThreeDots
            className="moduleItem-threeDots"
            onClick={() => setSubMenu(!subMenu)}
          />
          {subMenu && (
            <div className="moduleItem-menu">
              <Link
                to="/editModule"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>Edit</li>
              </Link>
              <li>Delete</li>
            </div>
          )}
        </div>
        <p className="moduleItem-right-date">creation date- 23/ march/2022</p>
        <p className="moduleItem-right-description">
          <b>description</b> - in this video lecture you get some basic idea of
          user experince design..
        </p>
        <Link className="moduleItem-btn" to="/viewModule">
          View Course
        </Link>
      </div>
    </div>
  );
}

export default ModuleItem;
