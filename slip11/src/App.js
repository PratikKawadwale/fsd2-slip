import React, { useState } from "react";

function App() {
  const [str, setStr] = useState("");
  const [result, setResult] = useState("");

  const uppercase = () => {
    setResult("Uppercase: " + str.toUpperCase());
  };

  const lowercase = () => {
    setResult("Lowercase: " + str.toLowerCase());
  };

  const length = () => {
    setResult("Length: " + str.length);
  };

  const reverse = () => {
    setResult("Reverse: " + str.split("").reverse().join(""));
  };

  return (
    <div>
      <h2>String Operations</h2>

      <input
        type="text"
        placeholder="Enter a string"
        value={str}
        onChange={(e) => setStr(e.target.value)}
      />

      <br /><br />

      <button onClick={uppercase}>Uppercase</button>{" "}
      <button onClick={lowercase}>Lowercase</button>{" "}
      <button onClick={length}>Length</button>{" "}
      <button onClick={reverse}>Reverse</button>

      <h3>{result}</h3>
    </div>
  );
}

export default App;