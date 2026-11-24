import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

// Protected Route
function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Login Component
function Login({ setIsAuthenticated }) {
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// Dashboard Component
function Dashboard() {
  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <p>You are authenticated!</p>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/login">Login</Link> |
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route
          path="/login"
          element={
            <Login setIsAuthenticated={setIsAuthenticated} />
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<h2>404 Page Not Found</h2>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;