import React from "react";
import { SelectProps } from "./interfaces";

const Input: React.FC<SelectProps> = ({ label, options }) => {
  return (
    <div>
      <label>{label}</label>
      <select id={label} name={label}>
        {
          options.map(op => (
            <option value={op.valor}>{op.nome}</option>
          ))
        }
      </select>
    </div>
  );
};

export default Input;
