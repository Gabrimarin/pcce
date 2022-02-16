import React from "react";

const ToggleField = ({ id, onClick, enabled, value, style, ...rest }) => {
  return (
    <button
      onClick={() => onClick(id)}
      style={{
        ...style,
        fontFamily: "inherit",
        fontSize: 'inherit',
        color: enabled ? "black" : "#888",
        padding: 1,
        background: enabled ? "transparent" : "#ddd",
        border: enabled ? "1px dashed green" : "1px dashed #888",
        cursor: "pointer",
      }}
    >
      <span {...rest} style={style}>
        {value}
      </span>
    </button>
  );
};

export default ToggleField;
