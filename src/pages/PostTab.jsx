import React, { useState, useEffect } from 'react';
import './PostTab.css';
import axios from 'axios';

const PostTab = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const [files, setFiles] = useState([]);
  const [fileInputLabel, setFileInputLabel] = useState('Upload Image(s)');
  const [movieTitle, setMovieTitle] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
    const fileNames = Array.from(selectedFiles).map((file) => file.name).join(', ');
    setFileInputLabel(fileNames || 'Upload Image(s)');
  };

  const fetchMovieSuggestions = async (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }
    const apiKey = '3c4682174e03411b1f2ea9d887d0b8f3'; // Replace with your actual API key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    try {
      const response = await axios.get(url);
      setSuggestions(
        response.data.results.map((movie) => ({
          title: movie.title,
          posterPath: movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : null,
        }))
      );
    } catch (error) {
      console.error('Failed to fetch movie suggestions', error);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchMovieSuggestions(movieTitle);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [movieTitle]);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h2>Create a New Post</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          <input
            className="modal-input"
            type="text"
            placeholder="Movie Watched"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
          {suggestions.length > 0 && (
            <ul className="suggestions-dropdown">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setMovieTitle(suggestion.title);
                    setSuggestions([]);
                  }}
                >
                  {suggestion.posterPath ? (
                    <img src={suggestion.posterPath} alt={suggestion.title} style={{ width: '50px', marginRight: '10px', verticalAlign: 'middle' }} />
                  ) : (
                    <div style={{ width: '50px', height: '75px', backgroundColor: '#ccc', display: 'inline-block', marginRight: '10px', verticalAlign: 'middle' }}></div>
                  )}
                  {suggestion.title}
                </li>
              ))}
            </ul>
          )}
          <textarea className="modal-input" placeholder="What about it?"></textarea>
          <label htmlFor="file-upload" className="file-upload-label">
            {fileInputLabel}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            multiple
            style={{ display: 'none' }}
          />
        </div>
        <div className="modal-footer">
          <button className="button cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="button create-button" onClick={onClose} type="submit">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostTab;
