import React, { useState } from "react";
import "./App.css";
import Greating from "./components/Greating";
import Welcome from "./components/Welcome";

function App() {
  const [count, setCounter] = useState(0);
  console.log(`App re-rendering`);
  const handleClick = () => {
    setCounter((c) => c + 1);
    console.log(`App re-rendering ${count}`);
  };
  return (
    <React.Fragment>
      <Greating counter="1" />
      <hr />
      <Welcome />
      <hr />
      <div>
        <p>App Counter: {count}</p>
        <button onClick={handleClick}>Increment Counter</button>
      </div>
    </React.Fragment>
  );
}

export default App;
