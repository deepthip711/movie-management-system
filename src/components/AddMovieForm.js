import React, { useState } from 'react';

function AddMovieForm({ onAddOrUpdateMovie, editingMovie }) {
  const [title, setTitle] = useState(editingMovie?.title || '');
  const [actors, setActors] = useState(editingMovie?.actors || '');
  const [releaseYear, setReleaseYear] = useState(editingMovie?.releaseYear || '');
  const [boxOffice, setBoxOffice] = useState(editingMovie?.boxOffice || '');
  const [synopsis, setSynopsis] = useState(editingMovie?.synopsis || '');
  const [rating, setRating] = useState(editingMovie?.rating || 'None');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && actors && releaseYear && boxOffice && synopsis && rating !== 'None') {
      onAddOrUpdateMovie({ title, actors, releaseYear, boxOffice, synopsis, rating });
      setTitle('');
      setActors('');
      setReleaseYear('');
      setBoxOffice('');
      setSynopsis('');
      setRating('None');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-start p-5 w-100 h-100" style={{ backgroundColor: 'peachpuff' }}>
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <h1 className="mx-auto">{editingMovie ? 'Edit Movie' : 'Add New Movie'}</h1>
      </div>
      <br />
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="actors" className="form-label">Actors</label>
      <input type="text" className="form-control" id="actors" value={actors} onChange={(e) => setActors(e.target.value)} />
      <label htmlFor="releaseYear" className="form-label">Release Year</label>
      <input type="text" className="form-control" id="releaseYear" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
      <label htmlFor="boxOffice" className="form-label">Box Office</label>
      <textarea className="form-control" id="boxOffice" value={boxOffice} onChange={(e) => setBoxOffice(e.target.value)}></textarea>
      <label htmlFor="synopsis" className="form-label">Synopsis</label>
      <input type="text" className="form-control" id="synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} />
      <label htmlFor="rating" className="form-label">Rating</label>
      <select className="form-select" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="None">select one option</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button className="btn btn-primary my-3" onClick={handleSubmit}>
        {editingMovie ? 'Update Movie' : 'Add Movie'}
      </button>
    </div>
  );
}

export default AddMovieForm;