import React from "react";
import IconContainer from "../iconContainer/IconContainer";
import "./control-buttons.css";

const ControlButtons = ({ onIncrease, onDecrease, onReset }) => {
  return (
    <div className="all-btns-container">
      <div className="small-btns-container">
        <IconContainer bgColor="#59717D">
          <p onClick={onDecrease}>-</p>
        </IconContainer>
        <IconContainer bgColor="#59717D">
          <p onClick={onReset}>0</p>
        </IconContainer>
      </div>
      <div>
        <div className="increase-btn" onClick={onIncrease}></div>
      </div>
    </div>
  );
};

export default ControlButtons;
