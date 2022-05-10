import React, { useEffect, useState } from "react";
import "./style.css";
import axiosInstance from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { courseList } from "../../redux/actions/user.actions";

export default function Index({ func ,data}) {
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin)
    
  const handleDeleteCourse = () => {
    axiosInstance
      .delete(`/course?id=${data.courseID}`,{
          headers:{Authorization:`Bearer ${userSignin.userInfo.token}` }
      })
      .then((res) => dispatch(courseList(userSignin.userInfo)) );
      func()
  };
 useEffect(()=>{

    console.log({userSignin})
 })

    return (
    <div className="delete_popup">
      <div className="heading_delete_confirmation">
        <h3>Are you sure to delete </h3>
      </div>
      <div className="confirmation_btns">
        <button onClick={handleDeleteCourse}>Yes</button>
        <button onClick={func}>No</button>
      </div>
    </div>
  );
}
