import React from "react";
import { InputProps } from "./interfaces";

const Input: React.FC<InputProps> = ({ type, label, changeHandler }) => {
  return (
    <div key={label} className="input">
      <p>{label}</p>
      <input type={type} name={label} onChange={changeHandler} />
    </div>
  );
};

export default Input;
