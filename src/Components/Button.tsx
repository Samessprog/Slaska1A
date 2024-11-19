import React from "react";
import PorpTypes from "prop-types";

const Button = ({ label, background, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: background,
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  background: "blue",
  onClick: () => alert("Button clicked!"),
};

export default Button;
