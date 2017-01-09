import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const API_URL = 'http://www.omdbapi.com/?s='

import MovieList from './components/MovieList';

class App extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }

    this.searchMovie('cool');
  }

  searchMovie(term) {
    axios.get(`${API_URL}${term}`)
      .then(res => {
        this.setState({ movies: res.data.Search });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>OMDB Movie Search</h1>
        <ul>
          {this.state.movies.map(movie => {
            return <li>{movie.Title}</li>
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
