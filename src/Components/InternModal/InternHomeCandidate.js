import React, { useState } from "react";
import "./InternHomeCandidate.css";

import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete-icon.svg";
import { Link } from "react-router-dom";

function InternHomeCandidate({ courses }) {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <tr className="internHomeCandidate">
      <td>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/candidateProfile"
        >
          Praveen Kumar
        </Link>
      </td>

      <td>Developer</td>
      <td>React Js</td>
      <td>Week 2 Completed</td>
      <td>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/newCourse"
        >
          <div className="internHomeCandidate-new-icon">
            {courses}
            <p className="internHomeCandidate-new">New</p>
          </div>
        </Link>
      </td>
      <td>
        Access{" "}
        <DownArrow
          className="internHomeCandidate-downArrow"
          onClick={() => setSubMenu(!subMenu)}
        />
        {subMenu && (
          <div className="internHomeCandidate-menu">
            <li>Access</li>
            <li>Deny</li>
          </div>
        )}
      </td>
      <td>
        <DeleteIcon className="internHomeCandidate-deleteIcon" />
      </td>
    </tr>
  );
}

export default InternHomeCandidate;
