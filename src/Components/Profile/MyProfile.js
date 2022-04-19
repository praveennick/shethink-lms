import React from "react";
import "./MyProfile.css";
import profilePicture from "../../assets/images/gamer.png";

import InputField from "../InputField/InputField";
import ModuleItem from "../Module/ModuleItem";

import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
import { ReactComponent as EditProfilePic } from "../../assets/icons/edit-profile-picture.svg";

import ModuleBanner1 from "../../assets/images/module-banner-1.png";

function MyProfile() {
  return (
    <div className="myProfile">
      <div className="myProfile-content">
        <div className="profile-left">
          <div className="profile-information">
            <h3>Profile Information</h3>
            <DownArrow className="profile-downArrow" />
          </div>
          <div className="profile-picture-box">
            <img src={profilePicture} alt="" className="profile-picture" />
            <EditProfilePic className="editProfilePic" />
          </div>
        </div>
        <div className="profile-right">
          <form className="profile-form">
            <label htmlFor="">Email Address</label>
            <InputField
              // label="Email Address"
              type="text"
              placeholder="Enter Email Address"
            />
            <label htmlFor="">Position</label>
            <InputField
              // label="Email Address"
              type="text"
              placeholder="Enter Position"
            />
            <label htmlFor="">User Name</label>
            <InputField
              // label="Email Address"
              type="text"
              placeholder="Enter Username"
            />
            <label htmlFor="">Linkedin Profile</label>
            <InputField
              // label="Email Address"
              type="text"
              placeholder="linkedin.com/in/name"
            />
            <label htmlFor="">Change Password</label>
            <InputField
              // label="Email Address"
              type="password"
              placeholder="*********"
            />
            <label htmlFor="">Re-Enter Password</label>
            <InputField
              // label="Email Address"
              type="password"
              placeholder="*********"
            />
            <div className="profile-btn">
              <button className="profile-save-btn">Save & Update</button>
            </div>
          </form>
        </div>
      </div>

      {/* profile fav course*/}
      <div className="profile-fav-course">
        <div className="profile-fav-course-header">
          <h2>Favourite Course</h2>
          <DownArrow className="profile-fav-course-downArrow" />
        </div>
        <div className="profile-fav-course-modules">
          <ModuleItem banner={ModuleBanner1} />
          <ModuleItem banner={ModuleBanner1} />
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
