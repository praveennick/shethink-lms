import React, { useEffect, useState } from "react";
import "./style.css";
import "../CreateModule.css";
import { Link } from "react-router-dom";
import InputField from "../../InputField/InputField";
import axiosInstance from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { getTechnology } from "../../../redux/actions/user.actions";

export default function CreateCourse() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const getSkills = useSelector((state) => state.getTechnology);
  const [fatchSkill, setFatchSkill] = useState([]);
  const [inputs, setInputs] = useState({
    courseName: "",
    courseDescription: "",
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
  }, [getSkills]);

  const handleCreate = (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("courseName", inputs.courseName);
    body.append("courseDescription", inputs.courseDescription);

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
          <select name="" id="" className="createModule-skill">
            <option value="beginners">For Beginners</option>
            <option value="advanced ">Advanced Learning</option>
          </select>
          <label htmlFor="" className="createModule-label">
            Reference Type
          </label>

          <select
            className="createModule-skill"
            onChange={(e) => setInputs({ ...inputs, refType: e.target.value })}
            value={inputs.refType}
          >
            <option value="select">Select </option>
            <option value="video">Video Link</option>
            <option value="pdf">Pdf File</option>
            <option value="blog">Blog Url</option>
            <option value="write">Write Yourself</option>
          </select>
          <div className="createModule-renderItems">
          </div>
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
