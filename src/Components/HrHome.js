import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/HrHome.css";
import CandidateItem from "./CandidateItem";
import InputField from "./InputField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactComponent as DownArrow } from "../assets/icons/down-arrow.svg";
import { ReactComponent as ModalDesign } from "../assets/icons/modal-bg-design.svg";
import ChipTechnology from "./ChipTechnology";
import { candidatesList } from "../redux/actions/user.actions";

function HrHome() {
  const userSignin = useSelector((state) => state.userSignin);
  const [subMenu, setSubMenu] = useState(false);
  {
    /* add new technology */
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  {
    /* add  new candidate*/
  }
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  //Candidate Array
  const dispatch = useDispatch();
  const candidateItems = useSelector((state) => state.candidatesList);
  console.log(candidateItems);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 1,
    overFlow: "hidden",
    p: 0,
  };

  useEffect(() => {
    console.log("candidateItems", candidateItems);
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
                <InputField placeholder={"type here"} />
              </div>
              <div className="hrHome-modal-form-box-2">
                <label htmlFor="">Last Name</label>
                <InputField placeholder={"type here"} />
              </div>
            </div>
            <div className="hrHome-modal-form-box">
              <div className="hrHome-modal-form-box-1">
                <label htmlFor="">Email</label>
                <InputField placeholder={"example@gmail.com"} />
              </div>
              <div className="hrHome-modal-form-box-2">
                <label htmlFor="">Date of joining</label>
                <InputField
                  type={"date"}
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
            <InputField placeholder={"type here"} />
            <label htmlFor="">Technology</label>
            <InputField placeholder={"type here"} />
            <label htmlFor="">Start Date</label>
            <InputField placeholder={"type here"} />
            <button className="hrHome-modal-btn">Save</button>
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
                  <li>Full Time</li>
                  <li>Intern</li>
                </div>
              )}
            </th>
            <th>Skill</th>
            <th>Created Course</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
          {candidateItems.candidatesInfo &&
            candidateItems.candidatesInfo.map((item, i) => {
              return (
                <>
                  {console.log("item", item)}
                  <CandidateItem data={item} />
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default HrHome;
