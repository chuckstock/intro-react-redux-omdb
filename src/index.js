import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';
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

    this.movieSearch('cool')
  }

  movieSearch(term) {
    axios.get(`${API_URL}${term}`)
      .then(res => {
        this.setState({ movies: res.data.Search });
      });
  }

  render() {
    const movieSearch = _.debounce((term) => { this.movieSearch(term) }, 500);
    console.log(this.state.movies);
    return (
      <div className="container">
        <h1>OMDB Movie Search</h1>
        <SearchBar onSearchTermChange={movieSearch} />
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
