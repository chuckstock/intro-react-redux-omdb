---
title: Intro To React & Redux
theme: css/theme/solarized.css
---

# Intro To React and Redux

---

## Agenda

1. Who Am I
1. Why React
1. What Are We Doing Today
1. Create React App (Facebook Generator Tool)
1. Create Our First React Component
1. Process for Creating Component
1. Homework

---

## Who am I?

My name is Charlie Blackstock.  I work at a small tech-consultancy called Acumen Digital over in the Golden Triangle Galvanize space.  I started my coding career about 2.5 years ago with my brother teaching me Ruby after work and on weekends.  I feel in love with coding and quit my job in accounting and went to G-School.  A few months into G-School when we started learning front-end frameworks I decided to take some side classes from udemy.com and feel in love with React and Redux, and have been creating React apps ever since.  I recently, got Redux implemented into one our clients App's which is used by millions of people.

---

## Why React

* Light-weight front-end framework
  * React feels like javascript vs. AngularJS feels like its own language
* Component-Based Architecture
* Declarative
  * Declarative views make your code more predictable and easier to debug.
* Error Handling
  * Something I don't think is mentioned nearly enough, but the error handling by React is light-years ahead of AngularJS

---

```javascript
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
      this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
```
