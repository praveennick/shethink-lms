import React, { useState } from "react";
import "../assets/css/CandidateItem.css";

import { ReactComponent as DownArrow } from "../assets/icons/down-arrow.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete-icon.svg";

function CandidateItem() {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <tr className="candidateItem">
      <td>Praveen Kumar</td>
      <td>Developer</td>
      <td>React Js</td>
      <td>Nil</td>
      <td>
        Access{" "}
        <DownArrow
          className="candidateItem-downArrow"
          onClick={() => setSubMenu(!subMenu)}
        />
        {subMenu && (
          <div className="candidateItem-menu">
            <li>Access</li>
            <li>Deny</li>
          </div>
        )}
      </td>
      <td>
        <DeleteIcon className="candidateItem-deleteIcon" />
      </td>
    </tr>
  );
}

export default CandidateItem;
