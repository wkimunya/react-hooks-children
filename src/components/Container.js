import React from "react";

function Container({
  header,
  children,
  textPosition = "", 
  direction = "horizontal", 
  contentPosition = "center", 
}) {

  return (
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;
