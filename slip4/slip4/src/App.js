import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About Page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>

      <form onSubmit={(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        if (name.trim() === "" || email.trim() === "") {
          alert("Please fill all fields");
        } else {
          alert("Form submitted successfully!");
        }
      }}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;