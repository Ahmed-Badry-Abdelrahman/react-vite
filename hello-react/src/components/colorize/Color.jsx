import React, { useState } from "react";
import Button from "./Button";

const Color = () => {
  const [color, setColor] = useState("000000");

  const divStyle = {
    backgroundColor: `#${color}`,
    width: "500px",
    height: "300px",
    margin: "30px",
  };

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    setColor(randomColor);
  };

  const handleClick = () => {
    generateColor();
  };

  return (
    <React.Fragment>
      <div style={divStyle}></div>
      <p>Current Color: #{color}</p>
      <Button handleClick={handleClick} />
    </React.Fragment>
  );
};

export default Color;
