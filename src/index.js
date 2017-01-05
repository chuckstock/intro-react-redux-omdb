import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';
import './stylesheets/index.css'

import SearchBar from './components/SearchBar';
const API_URL = 'http://www.omdbapi.com/?s='

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

    return (
      <div className="container">
        <h1>OMDB Movie Search</h1>
        <SearchBar onSearchTermChange={movieSearch} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
