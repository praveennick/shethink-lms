import React from "react";
import "./Modules.css";

import ModuleItem from "./ModuleItem";
import ModuleHeader from "./ModuleHeader";

import ModuleBanner1 from "../../assets/images/module-banner-1.png";
import ModuleBanner2 from "../../assets/images/module-banner-2.png";
import ModuleBanner3 from "../../assets/images/module-banner-3.png";
import ModuleBanner4 from "../../assets/images/module-banner-4.png";
import ModuleBanner5 from "../../assets/images/module-banner-5.png";
import ModuleBanner6 from "../../assets/images/module-banner-6.png";
import ModuleBanner7 from "../../assets/images/module-banner-7.png";
import ModuleBanner8 from "../../assets/images/module-banner-8.png";

function Modules() {
  return (
    <div className="modules">
      <ModuleHeader />
      <div className="module-content">
        <h3 className="module-content-heading">My Module</h3>
        <div className="module-content-modules">
          <ModuleItem banner={ModuleBanner1} />
          <ModuleItem banner={ModuleBanner2} />
          <ModuleItem banner={ModuleBanner3} />
          <ModuleItem banner={ModuleBanner4} />
          <ModuleItem banner={ModuleBanner5} />
          <ModuleItem banner={ModuleBanner6} />
          <ModuleItem banner={ModuleBanner7} />
          <ModuleItem banner={ModuleBanner8} />
        </div>
      </div>
      <div className="module-loadMore-btn-container">
        <button className="module-loadMore-btn">Load More</button>
      </div>
    </div>
  );
}

export default Modules;
