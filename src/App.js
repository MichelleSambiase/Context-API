import React from "react";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";
import { MoviesProvider } from "./contexts/MoviesContext";
import { UserProvider } from "./contexts/userContext";


const initialUser = {
  id: 1,
  name: "michelle",
  favoriteMovies: [1,2,3]
}

function App() {



  return (
    <div className="App">
      <UserProvider>
        <MoviesProvider>
          <Navbar />     
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </div>
  );
}

export default App;
