import React, { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import "./CreateModule.css";
import InputField from "../InputField/InputField";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload-icon.svg";
import { ReactComponent as ClipIcon } from "../../assets/icons/clip-icon.svg";
import axiosInstance from "../../api";
import { useSelector } from "react-redux";
function CreateModule() {
  const [onChangeValue, setOnChangeValue] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: "image/*,.pdf,.doc,.docx" });

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#1C1B1F",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const focusedStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  //create module api
  const [inputs, setInputs] = useState({
    courseName: "",
    courseDescription: "",
    level: "",
    refType: "",
  });

  const userSignin = useSelector((state) => state.userSignin);

  const handleCreate = () => {
    console.log("post Click ");
    try {
      console.log("in Try Block ");
      axiosInstance.post("/shethink/v1/course", inputs, {
        headers: { Authorization: `Bearer ${userSignin.userInfo.token}` },
      });
    } catch (error) {
      console.log(error, "from Post Api");
    }
  };

  const renderItems = () => {
    switch (onChangeValue) {
      case "video":
        return (
          <>
            <label htmlFor="" className="createModule-label">
              Paste Link
            </label>
            <br />
            <InputField
              placeholder={"Paste Here"}
              style={{ width: "100%", marginTop: "10px" }}
            />
          </>
        );
      case "pdf":
        return (
          <>
            <label htmlFor="" className="createModule-label">
              Upload Files
            </label>

            <div className="createModule-upload" {...getRootProps({ style })}>
              <UploadIcon />
              {isDragActive ? (
                <p style={{ marginTop: "10px" }}>Drop the files here ...</p>
              ) : (
                <p style={{ marginTop: "10px" }}>Drag & Drop file here</p>
              )}
              <p style={{ marginTop: "10px" }}>or</p>
              <label className="createModule-file-upload">
                {/* <input {...getInputProps()} /> */}
                <ClipIcon className="createModule-clipIcon" />
                Choose file
              </label>
              {acceptedFiles.map((file) => (
                <div key={file.path}>
                  <div>
                    {file.path} - {file.size} bytes
                  </div>
                  {file.size > 2000000 ? (
                    <p className="createModule-file-size">
                      Maximum upload size 2 MB
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </>
        );
      case "blog":
        return (
          <>
            <label htmlFor="" className="createModule-label">
              Paste Link
            </label>
            <InputField
              placeholder={"Paste Here"}
              style={{ width: "100%", marginTop: "10px" }}
            />
          </>
        );
      case "write":
        return (
          <>
            <label htmlFor="" className="createModule-label">
              Write Here
            </label>

            <textarea
              placeholder="Type Here"
              name=""
              id=""
              cols="30"
              rows="10"
              className="createModule-textArea"
            ></textarea>
          </>
        );

      default:
        break;
    }
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
          ></textarea>
          <label htmlFor="" className="createModule-label">
            Skill
          </label>
          <select name="" id="" className="createModule-skill">
            <option value="select">Select</option>
            <option value="react">React Js</option>
            <option value="javascript">Javascript</option>
          </select>
          <label htmlFor="" className="createModule-label">
            Module Level
          </label>
          <select name="" id="" className="createModule-skill">
            <option value="select">Select </option>
            <option value="beginners">For Beginners</option>
            <option value="advanced ">Advanced Learning</option>
          </select>
          <label htmlFor="" className="createModule-label">
            Reference Type
          </label>

          <select
            className="createModule-skill"
            onChange={(e) => setOnChangeValue(e.target.value)}
            value={onChangeValue}
          >
            <option value="select">Select </option>
            <option value="video">Video Link</option>
            <option value="pdf">Pdf File</option>
            <option value="blog">Blog Url</option>
            <option value="write">Write Yourself</option>
          </select>
          <div className="createModule-renderItems">{renderItems()}</div>
          <div className="createModule-btns">
            <Link className="createModule-back-btn" to="/modules">
              Back
            </Link>
            <button
              className="createModule-publish-btn"
              onClick={() => handleCreate()}
            >
              Publish Your Module
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateModule;
