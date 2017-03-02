import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

/*************** FIRST LANDING ***************/


class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ', this.state );
    getMovies(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label> Enter a movie to search for: 
          <input type="text" value={ this.state.value } onChange={ this.handleChange } />
        </label>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

const landing = (
  <div className="box">
    <h1>Welcome to the Movie Display Demo</h1>
    <p>This is a simple React App to fetch movies and display the data.</p>
    <p>Search for a movie title to get started</p>
    <MovieForm />
    <div id="movielist"></div>
  </div>
)

ReactDOM.render(
  landing,
  document.getElementById('root')
);


/*************** FORM STUFF ***************/

function MoviesHtml(props) {

  let html = props.movies.map((movie, i) => {
    return <li key={'movie' + i}>{ movie.Title } ({ movie.Year })</li>
  })

  return ( <ol>{ html }</ol> ) ;
}

function getMovies(state) {

  let searchTerm = state.value.replace(/ /g, '%20')
  let url = 'http://www.omdbapi.com/?s=' + searchTerm;
  console.log('getMovies was called with: ', state.value);
  console.log('fetch is called with: ', url);
  fetch(url)
    .then(res => res.json())
    .then(res => {
      ReactDOM.render(
        <MoviesHtml movies={res.Search}/>,
        document.getElementById('movielist')
      )
    })
    .catch(err => console.log('Fetch error: ', err))
}
