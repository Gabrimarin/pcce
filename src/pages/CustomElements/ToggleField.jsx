import React from "react";

const ToggleField = ({ id, onClick, enabled, value, ...rest }) => {
  return (
    <button
      onClick={() => onClick(id)}
      style={{
        color: enabled ? "black" : "#888",
        padding: 2,
        background: enabled ? "transparent" : "#ddd",
        border: enabled ? "1px dashed green" : "1px dashed #888",
        cursor: "pointer",
      }}
    >
      <span {...rest}>{value}</span>
    </button>
  );
};

export default ToggleField;
