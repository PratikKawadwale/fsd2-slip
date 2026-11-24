import React, { useState } from "react";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = () => {
    setIsSignedIn(true);
  };

  const signOut = () => {
    setIsSignedIn(false);
  };

  return (
    <div>
      <h2>Sign-In and Sign-Out Application</h2>

      {isSignedIn ? (
        <div>
          <h3>Hello, Welcome in Home Page</h3>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h3>Please sign in first</h3>
          <button onClick={signIn}>Sign In</button>
        </div>
      )}
    </div>
  );
}

export default App;