import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import { setSearchField } from './actions';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = { Robots: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ Robots: users }));
  }

  render() {
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = this.state.Robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (this.state.Robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1 light-gray'>RoboFriends</h1>
          <Searchbox searchChange={onSearchChange} />
          <Scroll>
            <CardList Robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
