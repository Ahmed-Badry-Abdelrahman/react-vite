import { useEffect, useRef, useState } from "react";

const Test = () => {
  const a = useRef(0); // useRef to hold a mutable value
  const b = useRef();
  const [input, setInput] = useState(""); // useRef to hold a mutable value
  const [count, setCount] = useState(0); // useState to manage state and re-render

  const handleUseRef = () => {
    // a.current += 1;
    console.log(`current value ${a.current}`);
    b.current.focus();
  };

  console.log("counter is incremented by useRef");
  const handleUseState = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    a.current += 1;
  });

  console.log("counter is incremented by useState");

  return (
    <div>
      <p>Test useRef</p>
      <p>ref count {a.current}</p> {/* Display useRef value */}
      <p>
        <input
          ref={b}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </p>
      <button onClick={handleUseRef}>useRef</button>
      <button onClick={handleUseState}>useState {count}</button>
    </div>
  );
};

export default Test;
