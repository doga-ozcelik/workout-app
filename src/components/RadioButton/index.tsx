import React from "react";
import "./RadioButton.css";

interface RadioButtonProps {
  checked: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ checked }) => {
  return (
    <div style={{ display: "flex" }}>
      <label className="radio-button-container">
        <input type="radio" checked={checked} onChange={() => {}} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default RadioButton;
