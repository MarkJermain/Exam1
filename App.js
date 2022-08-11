import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let a = null;
  let b = null;

  const [valueA, setValueA] = useState(null);
  const [valueB, setValueB] = useState(null);

  const handleSwap = () => {
    [a, b] = [b, a];
    displaySwapped();
  };

  const displaySwapped = () => {
    setValueA(a);
    setValueB(b);
    a = null;
    b = null;
  };

  return (
    <div className="App">
      <h1>Exam #1</h1>
      <h2>Swap 2 given numbers using only 2 variables</h2>
      <h2>Note: You can only use the arithmetic operators</h2>
      <div style={{ padding: 10 }}>
        <h3>Input variable A:</h3>
        <input
          type="number"
          onChange={(e) => {
            a = e.target.value;
          }}
        ></input>
      </div>
      <div style={{ padding: 10 }}>
        <h3>Input variable B:</h3>
        <input
          type="number"
          onChange={(e) => {
            b = e.target.value;
          }}
        ></input>
      </div>
      <div style={{ padding: 10 }}>
        <button onClick={handleSwap}>SWAP!</button>
      </div>

      {valueA && (
        <div style={{ padding: 10 }}>
          <h1>Value for A is now: {valueA}</h1>
        </div>
      )}

      {valueB && (
        <div style={{ padding: 10 }}>
          <h1>Value for B is now: {valueB}</h1>
        </div>
      )}
    </div>
  );
}
