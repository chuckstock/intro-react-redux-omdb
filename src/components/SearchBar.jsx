import React, { Component } from 'react';
import '../stylesheets/SearchBar.css'

class SearchBar extends Component {
    constructor() {
      super();

      this.state = { term: '' };
    }

    render() {
      console.log(this.state);
      return (
        <div className="search-bar input-group">
          <input
            className="form-control"
            placeholder="Search Movie Title..."
            value={this.state.term}
            onChange={(event) => this.setState({ term: event.target.value })}
            />
        </div>
      );
    }
}

export default SearchBar;
