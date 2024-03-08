import { useEffect, useState } from 'react';

let SWAPI_URI = 'https://swapi.info/api/films/';

const SearchBar = (args) => {
  const [value, setValue] = useState(''); // Text bar input

  const logData = (data) => {
    console.log('Data fetched...');
    console.log(data);
  };

  const logValue = (value) => {
    console.log('The Value is: ' + value);
  };

  const searchFilm = (value, films) => {
    const propsToMatch = [
      'title',
      'director',
      'opening_crawl',
      'producer',
      'release_date',
    ];

    let filmResult = [];

    value = value.trim();
    if (value.length < 1) {
      films = [];
    }

    for (const film of films) {
      for (const prop of propsToMatch) {
        if (prop in film) {
          if (film[prop].toLowerCase().indexOf(value.toLowerCase()) != -1) {
            console.log(film.title);
            console.log('Matched by: ' + prop);
            filmResult.push(film);
            break;
          }
        }
      }
    }

    args.callback(filmResult);
  };

  useEffect(() => {
    fetch(SWAPI_URI)
      .then((response) => response.json())
      .then((films) => searchFilm(value, films));
  }, [value]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
