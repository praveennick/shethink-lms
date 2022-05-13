import React from "react";
import { Link } from "react-router-dom";
import "./ModuleHeader.css";

import { ReactComponent as ModuleDesign } from "../../assets/images/module-design.svg";
import { ReactComponent as ModuleDocSign } from "../../assets/images/module-doc-sign.svg";

function ModuleHeader() {
  return (
    <div className="module-header">
      <ModuleDesign className="module-header-design" />
      <div className="module-header-content">
        <h2 className="module-header-title">Create Your Module</h2>
        <p className="module-header-description">
          you can create your own course in which you share your refrence of
          learning with other’s
        </p>
        <Link className="module-header-btn" to="/createcourse">
          Create New
        </Link>
      </div>
      <ModuleDocSign className="module-header-doc-sign" />
    </div>
  );
}

export default ModuleHeader;
