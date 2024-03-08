import React from 'react';
import { useState } from 'react';
import jediLogo from './assets/jediLogo.png';
import './App.css';
import SearchBar from './SearchBar';

const FilmList = ({ list }) => {
  return (
    <ul>
      {list.map((film) => (
        <ul>
          <li>
            <span>Title:</span> {film.title}
          </li>
          <li>
            <span>Director:</span> {film.director}
          </li>
          <li>
            <span>Producer:</span> {film.producer}
          </li>
          <li>
            <span>Opening Crawl:</span> {film.opening_crawl}
          </li>
          <li>
            <span>Release Date:</span> {film.release_date}
          </li>
        </ul>
      ))}
    </ul>
  );
};

function App() {
  const [filmResult, setFilmResult] = useState([]);

  return (
    <div>
      <img src={jediLogo} className="logo react" alt="Jedi logo" />
      <h1>The Jedi Archive</h1>
      <p className="read-the-docs">
        Use the search bar to access Star Wars data.
      </p>
      <SearchBar callback={setFilmResult} />
      <FilmList list={filmResult} />
    </div>
  );
}

export default App;
