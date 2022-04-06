import React from "react";
import "../assets/css/ViewModuleItem.css";

import { ReactComponent as LinkedinLogo } from "../assets/icons/linkedin-square.svg";
import { ReactComponent as HeartLogo } from "../assets/icons/heart.svg";
import { ReactComponent as CommentLogo } from "../assets/icons/comment-icon.svg";
import { ReactComponent as PriceTag } from "../assets/icons/price-tag.svg";

import viewCourseMedia1 from "../assets/images/viewCourse-banner-1.png";

function ViewModuleItem({ hide }) {
  return (
    <div className="viewModuleItem">
      <div className="viewModuleItem-header">
        <PriceTag />
        <h3 className="viewModuleItem-header-title">Reference Link 1</h3>
      </div>
      <div className="viewCourse-media-box">
        <img src={viewCourseMedia1} alt="" className="viewCourseMediaImg" />
        <a
          href="https://www.youtube.com/watch?v=h3sxUR6i8tc"
          className="viewCourseMediaLink"
        >
          https://www.youtube.com/watch?v=h3sxUR6i8tc
        </a>
      </div>
      <div className="viewCourse-name">
        <h5>Created By - Praveen Kumar</h5>
        <LinkedinLogo className="viewCourse-linkedin-logo" />
      </div>
      <div className="viewCourse-description">
        <p>
          <b>description</b>- in this video lecture you get some basic idea of
          user exoerince design.f user exoerince designf user exoerince designf
          user exoerince designf user exoerince designf user exoerince designf
          user exoerince design
        </p>
      </div>
      <hr className="viewCourse-line" />
      <div className="viewCourse-likeComment-box" style={hide}>
        <div className="viewCourse-likes">
          <HeartLogo className="viewCourse-heartlogo" />
          <p>24 Likes</p>
        </div>
        <div className="viewCourse-comments">
          <CommentLogo className="viewCourse-commentlogo" />
          <p>4 Comments</p>
        </div>
      </div>
    </div>
  );
}

export default ViewModuleItem;
