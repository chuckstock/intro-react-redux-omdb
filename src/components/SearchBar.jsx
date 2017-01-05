import React, { Component } from 'react';
import '../stylesheets/SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
      super(props);

      this.state = { term: '' };
    }

    render() {
      return (
        <div className="search-bar form-group">
          <label>Enter Movie Title</label>
          <input
            value={this.state.term}
            className="form-control"
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
      );
    }

    onInputChange(term) {
      this.setState({term});
      // this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
