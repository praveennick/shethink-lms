import React, { useState } from "react";
import "../assets/css/HrHomeCandidate.css";
import { ReactComponent as DownArrow } from "../assets/icons/down-arrow.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';  
import { deleteCandidate } from "../redux/actions/user.actions";
import { GET_CANDIDATE_SUCCESS } from "../constants";

function HrHomeCandidate({ data , onClick}) {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const candidatesList = useSelector((state) => state.candidatesList);

  const [subMenu, setSubMenu] = useState(false);

  const handleDelete = (e,id) => {
    e.preventDefault();
    console.log(id,"id")
    

    // dispatch(deleteCandidate(userSignin.userInfo, id));  
    // const filteredCandidateList = candidatesList.filter(
    //   (item) => item.id !== id
    // );
    // dispatch(candidatesList(userSignin.filteredCandidateList));
  };
  return (
    <tr className="hrHomeCandidate" style={{cursor:"pointer"}} onClick={onClick}>
      <td>{data.username}</td>
      <td>{data.designation}</td>
      <td>{data.technology}</td>
      <td>{data.createdCourse}</td>
      <td>
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
      <td>
        <DeleteIcon
          className="hrHomeCandidate-deleteIcon"
          onClick={(e) => handleDelete(data.id,e)}
        />
      </td>
    </tr>
  );
}

export default HrHomeCandidate;
