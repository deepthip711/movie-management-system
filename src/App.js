import React, { useState, useEffect } from 'react';
import AddMovieForm from './components/AddMovieForm';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import a new CSS file for more specific styles

function App() {
  const [movies, setMovies] = useState(() => {
    const storedMovies = localStorage.getItem('movies');
    return storedMovies ? JSON.parse(storedMovies) : [];
  });
  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addOrUpdateMovie = (newMovie) => {
    if (editingMovie) {
      setMovies(movies.map((movie) =>
        movie.title === editingMovie.title ? newMovie : movie
      ));
      setEditingMovie(null);
    } else {
      if (movies.some((movie) => movie.title === newMovie.title)) {
        alert('Movie with this title already exists!');
        return;
      }
      setMovies([...movies, newMovie]);
    }
  };

  const deleteMovie = (titleToDelete) => {
    setMovies(movies.filter((movie) => movie.title !== titleToDelete));
  };

  const editMovie = (movieToEdit) => {
    setEditingMovie(movieToEdit);
  };

  return (
    <div className="app-container">
      <img src="/movie1.jpg" alt="Movie Reel" className="top-left-image" />
      <div className="marquee-container">
        <marquee className="app-marquee">your place for managing and storing movie details!! :)</marquee>
      </div>
      <img src="/movie2.jpg" alt="Clapperboard Figure" className="top-right-image" />

      <div className="content-wrapper">
        <div className="form-container">
          <h1 className="app-title">Movie Production and Management System</h1>
          <p>This is a movie management system. You can add, edit, and delete movies.</p>
          <pre>Done by: Deepthi Pradeep(1AT22CS032)
            CSE A, 6th Sem</pre>
          <AddMovieForm onAddOrUpdateMovie={addOrUpdateMovie} editingMovie={editingMovie} />
        </div>
        <MovieList movies={movies} onDeleteMovie={deleteMovie} onEditMovie={editMovie} />
      </div>

      <footer className="app-footer">
        <p>&copy;{new Date().getFullYear()} All Rights Reserved</p>
        <p>{new Date().getFullYear()} Movie Management System by Deepthi</p>
      </footer>
    </div>
  );
}

export default App;