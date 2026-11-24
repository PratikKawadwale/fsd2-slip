import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(props.initialNumber);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter Application</h2>

      <h3>Number: {count}</h3>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;