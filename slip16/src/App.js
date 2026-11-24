import React, { useState } from "react";

function App() {
  const [reactCount, setReactCount] = useState(0);
  let domCount = 0;

  const traditionalDOM = () => {
    domCount++;

    document.getElementById("domCount").innerText = domCount;
  };

  return (
    <div>
      <h2>Virtual DOM vs Traditional DOM</h2>

      <h3>Traditional DOM</h3>
      <h4 id="domCount">0</h4>

      <button onClick={traditionalDOM}>
        Increment Traditional DOM
      </button>

      <hr />

      <h3>React Virtual DOM</h3>
      <h4>{reactCount}</h4>

      <button onClick={() => setReactCount(reactCount + 1)}>
        Increment React Counter
      </button>
    </div>
  );
}

export default App;