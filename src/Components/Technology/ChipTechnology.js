import React, { useEffect, useState } from "react";
import axiosInstance from "../../api";
import Chip from "@mui/material/Chip";
import InputField from "../InputField/InputField";
import { useDispatch, useSelector } from "react-redux";
import { getTechnology } from "../../redux/actions/user.actions";
function ChipTechnology() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const getTech = useSelector((state) => state.getTechnology);

  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  useEffect(() => {
    fun();
  }, []);

  useEffect(() => {
    let titles = [];
    if (getTech?.commentInfo) {
      getTech?.commentInfo?.forEach((item) => {
        titles.push(item.title);
      });
      setChips(titles);
    }
  }, [getTech]);

  const fun = async () => {
    dispatch(getTechnology(userSignin.userInfo));
  };

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
    axiosInstance
      .post(
        `/technology?title=${inputValue}`,
        {},
        { headers: { Authorization: `Bearer ${userSignin.userInfo.token}` } }
      )
      .then(() => setChips([...chips, inputValue]));
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
            className="hrHome-modal-technology-chip"
            key={chipName}
            label="Deletable"
            onDelete={()=>console.log("click")}
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
