import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ModalDesign } from "../../assets/icons/modal-bg-design.svg";
import InputField from "../InputField/InputField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  candidatesList,
  candidatesListIntern,
  addCandidate,
} from "../../redux/actions/user.actions";

export default function AddCandidate() {
  const dispatch = useDispatch();
  const candidateItems = useSelector((state) => state.candidatesList);
  const userSignin = useSelector((state) => state.userSignin);
  
  const addNewCandidate = useSelector((state) => state.addCandidate);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

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
      if (designation === "FT-Developer")
        dispatch(candidatesList(userSignin.userInfo));
      if (designation === "Intern")
        dispatch(candidatesListIntern(userSignin.userInfo));
    });
    setOpen(false);
  };

  return (
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
          <InputField
            placeholder={"type here"}
            name="designation"
            value={"designation"}
            onChange={(e) =>
              setInputField({
                ...inputField,
                designation: e.target.value,
              })
            }
          />
          <label htmlFor="">Technology</label>
          <InputField
            placeholder={"type here"}
            onChange={(e) =>
              setInputField({
                ...inputField,
                technology: e.target.value,
              })
            }
          />

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
  );
}
