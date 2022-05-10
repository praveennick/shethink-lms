import React, { useEffect, useState } from "react";
import axiosInstance from "../../api";
import Chip from "@mui/material/Chip";
import InputField from "../InputField/InputField";
import { useSelector } from "react-redux";

function ChipTechnology() {
  const userSignin = useSelector((state) => state.userSignin);

  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/technology`, {
        headers: { Authorization: `Bearer ${userSignin.userInfo.token}` },
      })
      .then((res) => {
        console.log(res, "data");
        if (res.data?.code === 200) {
          const data = res.data.data.map((i) => i.title);
          setChips(data);
          console.log({ data });
        }
      });
  }, []);

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
