import React, { useState } from "react";

const Welcome = () => {
  const [count, setCounter] = useState(0);
  console.log(`Welcome re-rendering`);
  const handleClick = () => {
    setCounter((c) => c + 1);
    console.log(`Welcome e-rendering ${count}`);
  };
  return (
    <React.Fragment>
      <h1>Welcome</h1>
      <p>You have visited this page {count} times.</p>
      <button onClick={handleClick}>click</button>
    </React.Fragment>
  );
};
export default React.memo(Welcome);
