import React, { useState } from "react";

import { ReactComponent as DeleteIcon } from "../assets/icons/delete-icon.svg";

function ReferenceType() {
  const [types, setTypes] = useState([]);
  const [text, setText] = useState("");

  // const addType = () => {
  //   setTypes([...types, text]);
  //   setText("");
  // };
  return (
    <>
      {types.map((item) => (
        <div className="editModule-reference-types">
          <div className="editModule-reference-item">
            <p>
              Video File -{" "}
              <a className="editModule-reference-item-type" href="item">
                {item}
              </a>
            </p>
          </div>
          <DeleteIcon className="editModule-del-btn" />
        </div>
      ))}
    </>
  );
}

export default ReferenceType;
