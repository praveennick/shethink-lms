import React, { useEffect, useState } from "react";

import Chip from "@mui/material/Chip";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTechAction } from "../redux/actions/user.actions";

function ChipTechnology() {
  const userSignin = useSelector((state) => state.userSignin);
  const techRequest = useSelector((state) => state.techRequest);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(
    //   "data",
    //   techRequest.data.map((item) => item.title)
    // );
    getTech();
  }, []);

  const getTech = () => {
    dispatch(getTechAction(userSignin.userInfo));
  };

  const [chips, setChips] = useState([
    "React.js",
    "Javascript",
    "Node.js",
    "React Native",
  ]);
  const [inputValue, setInputValue] = useState("");

  const chipStyle = {
    bgcolor: "#F4F4F4",
    color: "#6750A4",
    border: "none",
    borderRadius: "5px",
  };
  const addTechnology = (e) => {
    e.preventDefault();
    setChips([...chips, inputValue]);
    setInputValue("");
  };

  return (
    <form className="hrHome-modal-form" onSubmit={addTechnology}>
      <label htmlFor="">Add New Technology</label>
      <InputField
        placeholder={"type here"}
        onChange={(e) => setInputValue(e.target.value)}
        onValue={inputValue}
      />
      <label htmlFor="">Saved Technology</label>
      <div className="hrHome-modal-technologies">
        {/* <div className="hrHome-modal-technology-chip"></div> */}
        {/* {console.log(
          "array",
          techRequest.data.map((item) => item.title)
        )} */}
        {chips.map((chipName) => (
          <Chip
            sx={chipStyle}
            label={chipName}
            className="hrHome-modal-technology-chip"
            key={chipName}
          />
        ))}
      </div>
      <button className="hrHome-modal-btn">Save Data</button>
    </form>
  );
}

export default ChipTechnology;
