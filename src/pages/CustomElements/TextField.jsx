function TextField({ label, id, style, value, handleChange }) {
  function getTextWidth(text) {
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.font = getComputedStyle(document.getElementById(id)).font;
      return context.measureText(text).width;
    } catch (e) {}
  }

  return (
    <input
      type="text"
      id={id}
      placeholder={label}
      value={value}
      onChange={(e) => handleChange(id, e.target.value)}
      style={{
        padding: 1,
        fontFamily: "inherit",
        fontSize: 'inherit',
        color: "inherit",
        width: getTextWidth(value || label),
        ...style,
      }}
    />
  );
}

export default TextField;
