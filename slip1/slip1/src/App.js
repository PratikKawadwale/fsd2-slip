import React from "react";

function App() {
  const handleInput = (e) => {
    console.log("OnInput:", e.target.value);
  };

  const handleChange = (e) => {
    console.log("OnChange:", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <h2>User Login Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onInput={handleInput}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          onInput={handleInput}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;