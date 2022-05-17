import React, { useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
import "./HrHomeCandidate.css";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../api";
import Modal from "@mui/material/Modal";

import {
  candidatesList,
  candidatesListIntern,
} from "../../redux/actions/user.actions";
import { ROLES } from "../../constant/roles";
function HrHomeCandidate({ data, onClick }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const [subMenu, setSubMenu] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  //delete candidate
  const [open1, setOpen1] = useState(false);
  const handleClose1 = () => {
    setOpen1(!open1);
    setDeleteModal(!deleteModal);
  };
  const handleDelete = () => {
    setDeleteModal(true);
    setOpen1(true);
  };

  const handleDeleteCandidate = async (id, designation) => {
    axiosInstance
      .delete(`/candidate?id=${id}`, {
        headers: { Authorization: `Bearer ${userSignin.userInfo.token}` },
      })
      .then((res) => {
        if (designation === ROLES.FULL_TIME)
          dispatch(candidatesList(userSignin.userInfo));
        if (designation === ROLES.INTERN)
          dispatch(candidatesListIntern(userSignin.userInfo));
      });
  };
  const handleSingleCandidate = (id) => {
    history.push(`/candidateProfile/id=${id}`);
  };
  return (
    <tr
      className="hrHomeCandidate"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <td onClick={() => handleSingleCandidate(data.id)}>{data.username} </td>
      <td>{data.designation}</td>
      <td>{data.technology.join(", ")}</td>
      <td>{data.createdCourse}</td>
      <td className="hrHomeCandidate-menu-box">
        {data.courseAccess === "Access" ? <>Access</> : <>Deny</>}
        <DownArrow
          className="hrHomeCandidate-downArrow"
          onClick={() => setSubMenu(!subMenu)}
        />
        {subMenu && (
          <div className="hrHomeCandidate-menu">
            {data.courseAccess === "Access" ? (
              <>
                <li>Access</li>
                <li>Deny</li>
              </>
            ) : (
              <>
                <li>Deny</li>
                <li>Access</li>
              </>
            )}
          </div>
        )}
      </td>
      <td >
        <DeleteIcon className="hrHomeCandidate-deleteIcon" onClick={handleDelete}/>
        {deleteModal ? (
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="delete_popup">
              <div className="heading_delete_confirmation">
                <h3>Are you sure to delete </h3>
              </div>
              <div className="confirmation_btns">
                <button
                  onClick={() =>
                    handleDeleteCandidate(data.id, data.designation)
                  }
                >
                  Yes
                </button>
                <button onClick={handleClose1}>No</button>
              </div>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
}

export default HrHomeCandidate;
