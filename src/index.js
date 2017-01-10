import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const API_URL = 'http://www.omdbapi.com/?s='
import './stylesheets/index.css'

import SearchBar from './components/SearchBar';
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
    console.log(this);
    axios.get(`${API_URL}${term}`)
      .then(res => {
        this.setState({ movies: res.data.Search });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>OMDB Movie Search</h1>
        <SearchBar searchMovie={this.searchMovie} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
