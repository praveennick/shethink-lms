import React from "react";
import { Link } from "react-router-dom";

import InputField from "../InputField/InputField";

import "./InternHistory.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import InternHistoryItem from "./InternHistoryItem";

function InternHistory() {
  return (
    <div className="internHistory">
      <div className="internModel-btns">
        <Link to="/internModel" className="internModel-btn-1">
          Create Manually
        </Link>
        <Link to="/internHistory" className="internModel-btn-2">
          History
        </Link>
      </div>
      <div className="internHistory-search">
        <label htmlFor="" className="internHistory-search-label">
          Search by Technology
        </label>
        <div className="internHistory-search-bar">
          <InputField />
          <SearchIcon className="internHistory-search-icon" />
        </div>
      </div>
      <div className="internHistory-items">
        <InternHistoryItem />
        <InternHistoryItem />
        <InternHistoryItem />
        <InternHistoryItem />
        <InternHistoryItem />
        <InternHistoryItem />
      </div>
    </div>
  );
}

export default InternHistory;
