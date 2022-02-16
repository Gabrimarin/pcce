import React from "react";

function Template({ children, ...rest }) {
  return (
    <div {...rest}>
      {children}
    </div>
  );
}

export default Template;
