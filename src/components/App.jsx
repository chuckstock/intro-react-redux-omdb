import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
const API_URL = 'http://www.omdbapi.com/?s='
import '../stylesheets/index.css'

import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends Component {
  constructor() {
    super();

    this.searchMovie('cool');
  }

  searchMovie(term) {
    axios.get(`${API_URL}${term}`)
      .then(res => {
        this.props.setMovies(res.data.Search);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>OMDB Movie Search</h1>
        <SearchBar searchMovie={this.searchMovie.bind(this)} />
        <MovieList movies={this.props.movies} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, actions)(App);
