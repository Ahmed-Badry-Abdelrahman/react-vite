import React, { useState, useContext } from "react";
import { counterContext } from "../App";
const Greating = ({ counter }) => {
  const { count, setCounter } = useContext(counterContext);
  console.log(`Greating re-rendering`);
  console.log(`count from app ${counter}`);

  return (
    <React.Fragment>
      <div>
        <h1>Hello1</h1>
        <p>You have visited this page {count} times.</p>
        <button onClick={() => setCounter((prev) => prev + 1)}>click</button>
      </div>
    </React.Fragment>
  );
};
export default React.memo(Greating);
