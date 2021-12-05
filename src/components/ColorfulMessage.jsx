import React from "react";

const ColorfulMeaages = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMeaages;
