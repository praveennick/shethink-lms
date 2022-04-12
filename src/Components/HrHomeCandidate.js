import React, { useState } from "react";
import "../assets/css/HrHomeCandidate.css";
import { ReactComponent as DownArrow } from "../assets/icons/down-arrow.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteCandidate } from "../redux/actions/user.actions";
import { GET_CANDIDATE_SUCCESS } from "../constants";

function HrHomeCandidate({ data }) {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const candidatesList = useSelector((state) => state.candidatesList);

  const [subMenu, setSubMenu] = useState(false);

  const handleDelete = (id) => {
    // dispatch(deleteCandidate(userSignin.userInfo, id));  
    // const filteredCandidateList = candidatesList.filter(
      //   (item) => item.id !== id
      // );
      // dispatch(candidatesList(userSignin.filteredCandidateList));
      console.log('here')
  };
  return (
    <tr className="hrHomeCandidate">
      <td>{data.username}</td>
      <td>{data.designation}</td>
      <td>{data.technology}</td>
      <td>{data.createdCourse}</td>
      <td>
        {(data.courseAccess==='Access') ? <>Access</> : <>Deny</>}
        <DownArrow
          className="hrHomeCandidate-downArrow"
          onClick={() => setSubMenu(!subMenu)}
        />
        {subMenu && (
          <div className="hrHomeCandidate-menu">
            {(data.courseAccess === 'Access')? (
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
          onClick={() => handleDelete(data.id)}
        />
      </td>
    </tr>
  );
}

export default HrHomeCandidate;
