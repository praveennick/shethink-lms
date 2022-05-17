import React, { useEffect, useState } from "react";
import "./style.css";
import "../CreateModule.css";
import { Link } from "react-router-dom";
import InputField from "../../InputField/InputField";
import axiosInstance from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { getTechnology } from "../../../redux/actions/user.actions";
import { refType } from "@mui/utils";

export default function CreateCourse() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const getSkills = useSelector((state) => state.getTechnology);
  const [fatchSkill, setFatchSkill] = useState([]);
  const [inputs, setInputs] = useState({
    courseName: "",
    courseDescription: "",
    level: "",
    refType: { blog: "", video: "", pdf: "" },
  });

  useEffect(() => {
    fun();
  }, []);
  const fun = async () => {
    dispatch(getTechnology(userSignin.userInfo));
  };

  useEffect(() => {
    let _temp = [];
    if (getSkills?.commentInfo) {
      getSkills?.commentInfo.map((item) => {
        return _temp.push(item.title);
      });
    }
    setFatchSkill(_temp);
    console.log({ inputs });
  }, [getSkills, inputs]);

  const handleCreate = (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("courseName", inputs.courseName);
    body.append("courseDescription", inputs.courseDescription);
    body.append("level", inputs.level);
    body.append("refType", inputs.refType);

    axiosInstance
      .post("/course", body, {
        headers: {
          Authorization: `Bearer ${userSignin.userInfo.token}`,
          "Content-Type": "multipart/from-data",
        },
      })
      .then((res) => {
        console.log({ res });
      });
    console.log({ inputs });
    console.log({ body });
  };
  const handleRef=(e)=>{
    const value =e.target.value
    // if(value==="blog")setInputs({...inputs,{...refType,blog:value}})
  }
  return (
    <div className="createModule">
      <h1 className="createModule-heading">Create Your Module 📑</h1>
      <div className="createModule-form">
        <form className="createModule-form-items">
          <label htmlFor="" className="createModule-label">
            Title of your Module
          </label>
          <InputField
            placeholder={"Type Here"}
            onChange={(e) =>
              setInputs({ ...inputs, courseName: e.target.value })
            }
          />
          <label htmlFor="" className="createModule-label">
            Description
          </label>
          <textarea
            placeholder="Type Here"
            name=""
            id=""
            cols="30"
            rows="10"
            className="createModule-textArea"
            onChange={(e) =>
              setInputs({ ...inputs, courseDescription: e.target.value })
            }
          ></textarea>
          <label htmlFor="" className="createModule-label">
            Skill
          </label>
          <select name="" id="" className="createModule-skill">
            <option value="select">Select</option>
            {fatchSkill?.map((skill) => {
              return <option value={skill}>{skill}</option>;
            })}
          </select>
          <label htmlFor="" className="createModule-label">
            Module Level
          </label>
          <select
            name=""
            id=""
            className="createModule-skill"
            onChange={(e) => setInputs({ ...inputs, level: e.target.value })}
          >
            <option>select</option>
            <option value="Beginner">Beginner</option>
            <option value="Advance">Advance </option>
          </select>
          <label htmlFor="" className="createModule-label">
            Reference Type
          </label>

          <select
            className="createModule-skill"
            onChange={handleRef}
            value={inputs.refType}
          >
            <option value="select">Select </option>
            <option value="video">Video Link</option>
            <option value="pdf">Pdf File</option>
            <option value="blog">Blog Url</option>
            <option value="write">Write Yourself</option>
          </select>
          <div className="createModule-renderItems"></div>
        </form>
        <div className="createModule-btns">
          <Link className="createModule-back-btn" to="/modules">
            Back
          </Link>
          <button className="createModule-publish-btn" onClick={handleCreate}>
            Publish Your Module
          </button>
        </div>
      </div>
    </div>
  );
}
