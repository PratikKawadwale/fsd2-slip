import React from "react";
import pk from "./assets/pk.jpeg";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>My Profile</h1>

      <img
        src={pk}
        alt="My Profile"
        width="150"
        height="150"
        style={{ borderRadius: "50%" }}
      />

      <h2>Pratik Kawadwale</h2>

      <h3>Short Bio</h3>

      <p>
        I am a Computer Science student and a software developer.
        I have knowledge of Java, Spring Boot, React and MySQL.
      </p>

      <h3>Profile Description</h3>

      <p>
        I am passionate about software development.
        My goal is to become a successful software developer.
      </p>
    </div>
  );
}

export default App;