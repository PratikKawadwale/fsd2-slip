import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const calculateSum = (e) => {
    e.preventDefault();

    if (number.trim() === "") {
      setResult("Please enter a number!");
      return;
    }

    if (!/^\d+$/.test(number)) {
      setResult("Invalid Number!");
      return;
    }

    let sum = 0;

    for (let digit of number) {
      sum += parseInt(digit);
    }

    setResult("Valid Number. Sum of digits = " + sum);
  };

  return (
    <div>
      <h2>Number Validation Application</h2>

      <form onSubmit={calculateSum}>
        <input
          type="text"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <br /><br />

        <button type="submit">Calculate Sum</button>
      </form>

      <h3>{result}</h3>
    </div>
  );
}

export default App;