import React from "react";
import "../assets/css/InputField.css";

function InputField({ label, type, placeholder }) {
  return (
    <>
      <label htmlFor="" className="login-label">
        {label}
      </label>
      <input type={type} placeholder={placeholder} className="input-field" />
    </>
  );
}

export default InputField;
