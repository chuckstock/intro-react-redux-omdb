import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const API_URL = 'http://www.omdbapi.com/?s='

class App extends Component {
  constructor() {
    super()

    this.searchMovie('cool');
  }

  searchMovie(term) {
    axios.get(`${API_URL}${term}`)
      .then(res => {
        console.log('res', res);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>OMDB Movie Search</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
