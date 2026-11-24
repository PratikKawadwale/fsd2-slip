import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <Link to="/user/101">Login</Link>
    </div>
  );
}

function User() {
  const { id } = useParams();

  const users = {
    101: { name: "Pratik", email: "pratik@gmail.com" },
    102: { name: "Rahul", email: "rahul@gmail.com" },
    103: { name: "Amit", email: "amit@gmail.com" }
  };

  const user = users[id];

  return (
    <div>
      <h2>User Details</h2>

      {user ? (
        <>
          <p>User ID: {id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <h3>User Not Found</h3>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;