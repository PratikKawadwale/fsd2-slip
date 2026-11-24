import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  const toggleButton = () => {
    setStatus(!status);
  };

  return (
    <div>
      <h2>Button Toggle</h2>

      <h3>{status ? "ON" : "OFF"}</h3>

      <button onClick={toggleButton}>
        {status ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default App;