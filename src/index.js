import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

const landing = (
  <div>
    <h1>Welcome to the Movie Display Demo</h1>
    <p>This is a simple React App to fetch movies and display the data.</p>
    <div id="movielist">Loading movie data...</div>

  </div>
)

ReactDOM.render(
  landing,
  document.getElementById('root')
);

function MoviesHtml(props) {

  let movies = props.movies;
  console.log('prop movies', props);
  let html = movies.map((movie, i) => {
    return <li key={'movie' + i}>{ movie.Title } ({ movie.Year })</li>
  })

  console.log('completed html', html);
  return ( <ol>{ html }</ol> ) ;
}

fetch('http://www.omdbapi.com/?s=the%20princess%20bride')
  .then(res => res.json())
  .then(res => {
    //let movieList = moviesHtml(res.Search);
    console.log('movies are', res.Search);
    ReactDOM.render(
      <MoviesHtml movies={res.Search}/>,
      document.getElementById('movielist')
    )
  })
  .catch(err => console.log('Fetch error: ', err))

