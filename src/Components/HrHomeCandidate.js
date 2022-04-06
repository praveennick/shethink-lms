import React, { useState } from "react";
import "../assets/css/HrHomeCandidate.css";

import { ReactComponent as DownArrow } from "../assets/icons/down-arrow.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete-icon.svg";
import { Link } from "react-router-dom";

function HrHomeCandidate() {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <tr className="hrHomeCandidate">
      <td>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/candidateProfile"
        >
          Praveen Kumar{" "}
        </Link>
      </td>

      <td>Developer</td>
      <td>React Js</td>
      <td>Nil</td>
      <td>
        Access{" "}
        <DownArrow
          className="hrHomeCandidate-downArrow"
          onClick={() => setSubMenu(!subMenu)}
        />
        {subMenu && (
          <div className="hrHomeCandidate-menu">
            <li>Access</li>
            <li>Deny</li>
          </div>
        )}
      </td>
      <td>
        <DeleteIcon className="hrHomeCandidate-deleteIcon" />
      </td>
    </tr>
  );
}

export default HrHomeCandidate;
