import React, { useState } from "react";

const Greating = ({ counter }) => {
  const [count, setCounter1] = useState(0);
  console.log(`Greating re-rendering`);
  console.log(`count from app ${counter}`);
  const handleClick = () => {
    setCounter1((c) => c + 1);
    console.log(`Greating e-rendering ${count}`);
  };

  return (
    <React.Fragment>
      <div>
        <h1>Hello1</h1>
        <p>You have visited this page {count} times.</p>
        <button onClick={handleClick}>click</button>
      </div>
    </React.Fragment>
  );
};
export default React.memo(Greating);
