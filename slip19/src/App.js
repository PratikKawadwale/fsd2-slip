import React from "react";

function App() {
  const movies = [
    "3 Idiots",
    "Dangal",
    "Chhichhore",
    "PK",
    "Avengers: Endgame",
    "Spider-Man",
    "Inception",
    "Interstellar",
    "Baahubali",
    "KGF"
  ];

  return (
    <div>
      <h2>My 10 Favorite Movies</h2>

      <ol>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;