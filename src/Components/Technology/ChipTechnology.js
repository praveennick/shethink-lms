import React, { useEffect, useState } from "react";

import Chip from "@mui/material/Chip";
import InputField from "../InputField/InputField";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTechAction, addTechnology } from "../../redux/actions/user.actions";

function ChipTechnology() {
  const userSignin = useSelector((state) => state.userSignin);
  const techRequest = useSelector((state) => state.getTechAction);
  const addTech = useSelector((state) => state.addTechnology);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechAction(userSignin.userInfo));
  }, []);

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
  const addTechnologyss = (e) => {
    e.preventDefault();
    setChips([...chips, inputValue]);
    setInputValue("");
  };

  const handleSave = () => {
    dispatch(addTechnology(userSignin.userInfo, inputValue)).then((res) => {
      setChips([...chips, inputValue]);
      dispatch(getTechAction(userSignin.userInfo));
    });
  };

  return (
    <form className="hrHome-modal-form" onSubmit={addTechnologyss}>
      <label htmlFor="">Add New Technology</label>
      <InputField
        placeholder={"type here"}
        onChange={(e) => setInputValue(e.target.value)}
        onValue={inputValue}
      />
      <label htmlFor="">Saved Technology</label>
      <div className="hrHome-modal-technologies">
        {chips.map((chipName) => (
          <Chip
            sx={chipStyle}
            label={chipName}
            className="hrHome-modal-technology-chip"
            key={chipName}
          />
        ))}
      </div>
      <button className="hrHome-modal-btn" onClick={handleSave}>
        Save Data
      </button>
    </form>
  );
}

export default ChipTechnology;
