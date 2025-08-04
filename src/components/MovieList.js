import React from 'react';

function MovieList({ movies, onDeleteMovie, onEditMovie }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-start p-5">
      <h1>Movie List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Actors</th>
            <th scope="col">Release Year</th>
            <th scope="col">Box Office</th>
            <th scope="col">Synopsis</th>
            <th scope="col">Rating</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {movies.map((movie) => (
            <tr key={movie.title}>
              <td>{movie.title}</td>
              <td>{movie.actors}</td>
              <td>{movie.releaseYear}</td>
              <td>{movie.boxOffice}</td>
              <td>{movie.synopsis}</td>
              <td>{movie.rating}</td>
              <td>
                <button className="btn btn-primary edit-btn" onClick={() => onEditMovie(movie)}>Edit</button>
                <button className="btn btn-danger mx-2 delete-btn" onClick={() => onDeleteMovie(movie.title)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;