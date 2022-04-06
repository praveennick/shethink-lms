import React, { useState } from "react";
import "../assets/css/CandidateItem.css";
import { ReactComponent as DownArrow } from "../assets/icons/down-arrow.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteCandidate } from "../redux/actions/user.actions";
import { GET_CANDIDATE_SUCCESS } from "../constants";

function CandidateItem({ data }) {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const candidatesList = useSelector((state) => state.candidatesList);

  const [subMenu, setSubMenu] = useState(false);

  const handleDelete = (id) => {
    // dispatch(deleteCandidate(userSignin.userInfo, id));
    console.log('here')
    // const filteredCandidateList = candidatesList.filter(
    //   (item) => item.id !== id
    // );
    // dispatch(candidatesList(userSignin.filteredCandidateList));
  };
  return (
    <tr className="candidateItem">
      <td>{data.username}</td>
      <td>{data.designation}</td>
      <td>{data.technology}</td>
      <td>{data.createdCourse}</td>
      <td>
        {data.status ? <>Access</> : <>Deny</>}
        <DownArrow
          className="candidateItem-downArrow"
          onClick={() => setSubMenu(!subMenu)}
        />
        {subMenu && (
          <div className="candidateItem-menu">
            {data.status ? (
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
          className="candidateItem-deleteIcon"
          onClick={() => handleDelete(data.id)}
        />
      </td>
    </tr>
  );
}

export default CandidateItem;
