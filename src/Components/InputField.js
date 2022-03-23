import React from "react";
import "../assets/css/InputField.css";

function InputField({ label, type, placeholder, onChange, onValue, style }) {
  return (
    <>
      <label htmlFor="" className="login-label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input-field"
        onChange={onChange}
        value={onValue}
        style={style}
      />
    </>
  );
}

export default InputField;
