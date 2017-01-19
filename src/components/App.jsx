import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../stylesheets/index.css'

import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends Component {
  componentWillMount() {
    this.props.fetchMovies('cool');
  }

  render() {
    return (
      <div className="container">
        <h1>OMDB Movie Search</h1>
        <SearchBar searchMovie={this.props.fetchMovies.bind(this)} />
        <button
          className="clear btn btn-primary"
          onClick={this.props.clearMovies}
          >
          Clear Movies
        </button>
        <MovieList movies={this.props.movies} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, actions)(App);
