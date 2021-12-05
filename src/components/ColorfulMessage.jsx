import React from "react";

const ColorfulMeaages = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{props.message}</p>;
};

export default ColorfulMeaages;
