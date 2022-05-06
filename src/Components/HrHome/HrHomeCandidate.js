import React, { useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
import "./HrHomeCandidate.css";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../api";
import { candidatesList, candidatesListIntern } from "../../redux/actions/user.actions";

function HrHomeCandidate({ data, onClick }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);


  const [subMenu, setSubMenu] = useState(false);

  const handleDelete = async (id,designation) => {

    axiosInstance
      .delete(`/candidate?id=${id}`, {
        headers: { Authorization: `Bearer ${userSignin.userInfo.token}` },
      })
      .then((res) => {
        if(designation==="FT-Developer")dispatch(candidatesList(userSignin.userInfo));
        if(designation==="Intern")dispatch(candidatesListIntern(userSignin.userInfo));
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
      <td onClick={() => handleDelete(data.id,data.designation)}>
        <DeleteIcon className="hrHomeCandidate-deleteIcon" />
      </td>
    </tr>
  );
}

export default HrHomeCandidate;
