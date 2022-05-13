import React from "react";
import "./ViewModuleItem.css";

import { ReactComponent as LinkedinLogo } from "../../assets/icons/linkedin-square.svg";
import { ReactComponent as HeartLogo } from "../../assets/icons/heart.svg";
import { ReactComponent as CommentLogo } from "../../assets/icons/comment-icon.svg";
import { ReactComponent as PriceTag } from "../../assets/icons/price-tag.svg";

import viewcourseMedia1 from "../../assets/images/viewCourse-banner-1.png";

function ViewModuleItem({ hide }) {
  return (
    <div className="viewmoduleItem">
      <div className="viewmoduleItem-header">
        <PriceTag />
        <h3 className="viewmoduleItem-header-title">Reference Link 1</h3>
      </div>
      <div className="viewcourse-media-box">
        <img src={viewcourseMedia1} alt="" className="viewcourseMediaImg" />
        <a
          href="https://www.youtube.com/watch?v=h3sxUR6i8tc"
          className="viewcourseMediaLink"
        >
          https://www.youtube.com/watch?v=h3sxUR6i8tc
        </a>
      </div>
      <div className="viewcourse-name">
        <h5>Created By - Praveen Kumar</h5>
        <LinkedinLogo className="viewcourse-linkedin-logo" />
      </div>
      <div className="viewcourse-description">
        <p>
          <b>description</b>- in this video lecture you get some basic idea of
          user exoerince design.f user exoerince designf user exoerince designf
          user exoerince designf user exoerince designf user exoerince designf
          user exoerince design
        </p>
      </div>
      <hr className="viewcourse-line" />
      <div className="viewcourse-likeComment-box" style={hide}>
        <div className="viewcourse-likes">
          <HeartLogo className="viewcourse-heartlogo" />
          <p>24 Likes</p>
        </div>
        <div className="viewcourse-comments">
          <CommentLogo className="viewcourse-commentlogo" />
          <p>4 Comments</p>
        </div>
      </div>
    </div>
  );
}

export default ViewModuleItem;
