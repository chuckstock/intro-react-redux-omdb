!-- ## Create Our First React Component

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new Component - this component should produce some HTML
const Component = () => {
  return <div>Im a React Component</div>; // React.createElement()
}

// Take Components rendered HTML and show on DOM
ReactDOM.render(<Component />, document.getElementById('root'));
```

--- -->

<!-- ## Functional vs. Class Component
* A Functional Component (or a stateless component)
  * Literally a function that takes some info in an some JSX goes out
* A Class Component (or stateful component)
  * Used whenever you need a component to have some internal record keeping
  * Some ability to be aware of itself and what has happened since it was rendered
  * Ex. a component with an `<input />` would typically need to keep track of what the user has entered into the `<input />` element

--- -->

##  What is State?

* State is a plain JavaScript object that is used to **record** and **react** to user events
* Each component has its own state object
* Whenever a component state is changed the component re-renders and causes its children to re-render

---

## A Class Component

```javascript
// assume the necessary import statements are listed above
class SearchBar extends Component {
    constructor(props) {
      super(props);

      this.state = { term: '' };
    }

    render() {
      return (
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
          />
      );
    }
}
```
Note: constructor function is a part of all JS classes.  It is the first function called for each instance of the class.  constructor is reserved for doing some setup inside of our class (like initializing variables, initializing state, etc...).  Super calls the parent method on a parent class.

---
