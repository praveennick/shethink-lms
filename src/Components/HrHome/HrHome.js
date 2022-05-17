import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HrHome.css";
import { ROLES } from "../../constant/roles";
import HrHomeCandidate from "./HrHomeCandidate";
import InputField from "../InputField/InputField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
import { ReactComponent as ModalDesign } from "../../assets/icons/modal-bg-design.svg";
import ChipTechnology from "../Technology/ChipTechnology";
import {
  candidatesList,
  candidatesListIntern,
  addCandidate,
  getTechnology,
} from "../../redux/actions/user.actions";

function HrHome() {
  const dispatch = useDispatch();
  const candidateItems = useSelector((state) => state.candidatesList);
  const userSignin = useSelector((state) => state.userSignin);
  const [subMenu, setSubMenu] = useState(false);
  {
    /* add new technology */
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    dispatch(getTechnology(userSignin.userInfo));
  };
  const handleClose = () => setOpen(false);

  {
    /* add  new candidate*/
  }
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => setOpen1(false);
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    emailID: "",
    dateOfJoining: "",
    designation: "",
    startDate: "",
    courseAccess: "",
    skills: "",
    technology: [""],
  });

  //add candidate form submit
  const handleSubmitForm = () => {
    dispatch(addCandidate(userSignin.userInfo, inputField)).then(() => {
      if (designation === ROLES.FULL_TIME)
        dispatch(candidatesList(userSignin.userInfo));
      if (designation === ROLES.INTERN)
        dispatch(candidatesListIntern(userSignin.userInfo));
    });
    setOpen(false);
  };

  //Candidate Array

  //full time candidates
  const [designation, setDesignation] = useState(ROLES.FULL_TIME);
  const handleFullTime = () => {
    setDesignation(ROLES.FULL_TIME);
    dispatch(candidatesList(userSignin.userInfo));
    setSubMenu(!subMenu);
  };

  //intern
  const handleIntern = () => {
    setDesignation(ROLES.INTERN);
    dispatch(candidatesListIntern(userSignin.userInfo));
    setSubMenu(!subMenu);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 1,
    overFlow: "hidden",
    p: 0,
  };

  //show technology
  const getTech = useSelector((state) => state.getTechnology);
  const tech = [];
  if (getTech?.commentInfo) {
    getTech?.commentInfo?.forEach((item) => {
      tech.push(item.title);
    });
  }
  console.log({ tech });

  useEffect(() => {
    dispatch(candidatesList(userSignin.userInfo));
  }, []);

  return (
    <div className="hrHome">
      <div className="hrHome-header">
        <h3>Candidate Detail</h3>
        <div>
          <button className="hrHome-add-btn" onClick={handleOpen1}>
            Add New Technology
          </button>
          <button className="hrHome-add-btn" onClick={handleOpen}>
            Add New Candidate
          </button>
        </div>
      </div>
      {/* add new technology */}
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="hrHome-modal-header">
            <h1 className="hrHome-modal-header-title">Add New Technology</h1>
            <ModalDesign className="hrHome-modal-header-design" />
          </div>
          <ChipTechnology />
        </Box>
      </Modal>

      {/* add new candidate */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="hrHome-modal-header">
            <h1 className="hrHome-modal-header-title">Add New Candidate</h1>
            <ModalDesign className="hrHome-modal-header-design" />
          </div>
          <div className="hrHome-modal-form">
            <div className="hrHome-modal-form-box">
              <div className="hrHome-modal-form-box-1">
                <label htmlFor="">First Name</label>
                <InputField
                  value="firstName"
                  name="firstName"
                  placeholder={"type here"}
                  onChange={(e) =>
                    setInputField({
                      ...inputField,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="hrHome-modal-form-box-2">
                <label htmlFor="">Last Name</label>
                <InputField
                  placeholder={"type here"}
                  name="lastName"
                  value={"lastName"}
                  onChange={(e) =>
                    setInputField({
                      ...inputField,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="hrHome-modal-form-box">
              <div className="hrHome-modal-form-box-1">
                <label htmlFor="">Email</label>
                <InputField
                  placeholder={"example@gmail.com"}
                  name="emailID"
                  value={"emailID"}
                  onChange={(e) =>
                    setInputField({
                      ...inputField,
                      emailID: e.target.value,
                    })
                  }
                />
              </div>
              <div className="hrHome-modal-form-box-2">
                <label htmlFor="">Date of joining</label>
                <InputField
                  type={"date"}
                  name="dateOfJoining"
                  value={"dateOfJoining"}
                  onChange={(e) =>
                    setInputField({
                      ...inputField,
                      dateOfJoining: e.target.value,
                    })
                  }
                  style={{
                    textTransform: "uppercase",
                    color: "#605F62",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div></div>

            <label htmlFor="">Designation</label>

            <select
              className="designation_select"
              onChange={(e) =>
                setInputField({
                  ...inputField,
                  designation: e.target.value,
                })
              }
            >
              <option value="FT-Developer">Select</option>
              <option value="FT-Developer">FT-Developer</option>
              <option value="Intern">Intern</option>
            </select>

            <label htmlFor="">Technology</label>

            <select
              className="designation_select"
              onChange={(e) =>
                setInputField({
                  ...inputField,
                  technology: e.target.value,
                })
              }
            >
            <option value="select">Select</option>
              {tech?.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>

            <button
              className="hrHome-modal-btn"
              type="submit"
              onClick={() => handleSubmitForm()}
            >
              Save
            </button>
          </div>
        </Box>
      </Modal>
      <table cellSpacing="20px">
        <tbody>
          <tr className="hrHome-nav-filter">
            <th>Name</th>
            <th className="hrHome-nav-filter-menu">
              Designation
              <DownArrow
                className="hrHome-nav-downArrow"
                onClick={() => setSubMenu(!subMenu)}
              />
              {subMenu && (
                <div className="hrHome-nav-menu">
                  <li onClick={handleFullTime}>Full Time</li>
                  <li onClick={handleIntern}>Intern</li>
                </div>
              )}
            </th>
            <th>Skill</th>
            <th>Created Course</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
          {candidateItems.candidatesInfo &&
            candidateItems.candidatesInfo.map((item, index) => {
              return (
                <>
                  {item.designation === designation ? (
                    <HrHomeCandidate data={item} />
                  ) : null}
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default HrHome;
