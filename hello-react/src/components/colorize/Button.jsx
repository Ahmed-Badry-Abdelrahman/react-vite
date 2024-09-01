/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ handleClick }) => {
  return (
    <React.Fragment>
      <button onClick={handleClick}>Change Color click!</button>
    </React.Fragment>
  );
};

export default Button;
