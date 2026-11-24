import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  const toggleButton = () => {
    setStatus(!status);
  };

  const buttonStyle = {
    backgroundColor: status ? "green" : "red",
    color: "white",
    padding: "10px 30px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px"
  };

  return (
    <div>
      <h2>Toggle Button Application</h2>

      <button style={buttonStyle} onClick={toggleButton}>
        {status ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default App;