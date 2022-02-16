import React from "react";

function TextField({ label, id, style, value, handleChange }) {
  return (
    <input
      type="text"
      placeholder={label}
      value={value}
      onChange={(e) => handleChange(id, e.target.value)}
      style={{
        padding: 2,
        ...style,
      }}
    />
  );
}

export default TextField;
