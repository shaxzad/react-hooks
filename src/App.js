import React, { useState } from "react";
import "./App.css";

function intialValue() {
  return 10;
}

const App = () => {
  const [count, setCount] = useState(5);
  const [count2, setCount2] = useState(15);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(c => c + 1.5);
          setCount2(c => c + 1);
        }}
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </div>
  );
};

export default App;
