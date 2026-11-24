import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Admin" && password === "Pass123") {
      console.log("Login Successful");
      console.log("Username:", username);
      console.log("Password:", password);

      alert("Login Successful");
    } else {
      alert("Unauthorized Access");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function NotFound() {
  return <h2>404 Error, Page Not Found</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link> |
        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;