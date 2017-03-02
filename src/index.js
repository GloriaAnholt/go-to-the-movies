import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

const landing = (
  <div>
    <h1>Welcome to the Movie Display Demo</h1>
    <p>This is a simple React App to fetch movies and display the data.</p>
    
  </div>
)


ReactDOM.render(
  landing,
  document.getElementById('root')
);
