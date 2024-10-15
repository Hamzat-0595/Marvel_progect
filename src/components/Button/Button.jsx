import React from "react";
import "./Button.scss";

const Button = ({ color, onClick, content, className }) => {
  return (
    <button onClick={onClick} className={`Button ${color} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
