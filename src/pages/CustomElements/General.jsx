import { CSSStringToObject } from "../CSSStringToObject";

function General({ Element, style = {}, children, attributes, ...rest }) {
  const styleString = attributes?.style?.value || "";
  const id = attributes?.id?.value;
  const value = attributes?.value?.value;
  const label = attributes?.label?.value;

  return (
    <Element
      style={{ ...CSSStringToObject(styleString), ...style }}
      id={id}
      value={value}
      label={label}
      {...rest}
    >
      {children}
    </Element>
  );
}

export default General;
