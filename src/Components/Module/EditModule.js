import React from "react";
import { Link } from "react-router-dom";

import "./EditModule.css";
import InputField from "../InputField/InputField";

import { ReactComponent as DeleteIcon } from "../../assets/icons/delete-icon.svg";

function EditModule() {
  return (
    <div className="editModule">
      <h1 className="editModule-heading">Edit your module 📑</h1>
      <div className="editModule-form">
        <form className="editModule-form-items">
          <label htmlFor="" className="editModule-label">
            Title of your Module
          </label>
          <InputField placeholder={"Type Here"} />
          <label htmlFor="" className="editModule-label">
            Description
          </label>
          <textarea
            placeholder="Type Here"
            name=""
            id=""
            cols="30"
            rows="10"
            className="editModule-textArea"
          ></textarea>
          <label htmlFor="" className="editModule-label">
            Module Level
          </label>
          <select name="" id="" className="editModule-skill">
            <option value="select">Select </option>
            <option value="beginners">For Beginners</option>
            <option value="advanced ">Advanced Learning</option>
          </select>
          <label htmlFor="" className="editModule-label">
            Reference Type
          </label>
          <div className="editModule-reference-types">
            <div className="editModule-reference-item">
              <p>
                Video File -{" "}
                <a
                  className="editModule-reference-item-type"
                  href="https://www.youtube.com/watch?v=h7HY6naAG5A"
                >
                  https://www.youtube.com/watch?v=h7HY6naAG5A
                </a>
              </p>
            </div>
            <DeleteIcon className="editModule-del-btn" />
          </div>
          <div className="editModule-btns">
            <Link className="editModule-back-btn" to="/modules">
              Back
            </Link>
            <button className="editModule-publish-btn">
              Publish Your Module
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModule;
