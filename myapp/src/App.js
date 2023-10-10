// import React, { useState } from "react";
// import { useEffect } from "react";
// import "./App.css";
// import SearchIcon from "./search.svg";
// import Moviecard from "./Moviecard";

// const API_URL = "http://www.omdbapi.com/?apikey=950d009d";
// // const movie1 = {
// //   Poster:
// //     "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
// //   Title: "Italian Spiderman",
// //   Type: "movie",
// //   Year: "2007",
// //   imdbID: "tt2705436",
// // };
// function App() {
//   const [movies,setMovies] = useState([]);
//   const [searchterm,setSearchterm] = useState('');
//   const [darkMode, setDarkMode] = useState(false);
//   const searchmovie = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();
//     setMovies(data.Search);
//   };
//   useEffect(() => {
//     searchmovie("spiderman");
//   }, []);

//   return (
//     <div className="app">
//       <h1>Movie Land</h1>
//       <div className="search">
//         <input
//           placeholder="Search for movies"
//           value={searchterm}
//           onChange={(e) => setSearchterm(e.target.value)}
//         />
//         <img src={SearchIcon} alt="search" onClick={() => searchmovie(searchterm)}/>
//       </div>
//       {movies?.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <Moviecard movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
    
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Moviecard from "./Moviecard";

const API_URL = "http://www.omdbapi.com/?apikey=950d009d";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const searchmovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchmovie("spiderman");
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply different classes based on dark mode
  const appClassName = `app ${darkMode ? "dark-mode" : ""}`;

  return (
    <div className={appClassName}>
      <h1 >Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchmovie(searchterm)} />
      </div>
       {/* Dark mode toggle button */}
       <button onClick={toggleDarkMode} style={{borderRadius:'25px'}}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviecard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

     
    </div>
  );
}

export default App;









