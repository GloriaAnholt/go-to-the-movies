import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

const landing = (
  <div>
    <h1>Welcome to the Movie Display Demo</h1>
    <p>This is a simple React App to fetch movies and display the data.</p>
    <ul id="movielist">
      <li>Loading movie data...</li>

      </ul>

  </div>
)

ReactDOM.render(
  landing,
  document.getElementById('root')
);

function moviesHtml(movies) {

  let html = movies.map((movie, i) => {
    console.log(movie.Title, movie.Year);
    return <li key={'movie' + i}>{ movie.Title }, { movie.Year }</li>
  })

  console.log('completed html', html);
  return html;
}

fetch('http://www.omdbapi.com/?s=princess%20bride')
  .then(res => res.json())
  .then(movies => {
    console.log('movies are', movies.Search);
    let movieList = moviesHtml(movies.Search)
    ReactDOM.render(
      { movieList },
      document.getElementById('movielist')
    )
  })
  .catch(err => console.log('Fetch error: ', err))

