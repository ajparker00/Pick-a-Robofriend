import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = { Robots: [], searchfield: '' };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ Robots: users }));
  }

  onSearchchange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const filteredRobots = this.state.Robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });
    if (this.state.Robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1 light-gray'>RoboFriends</h1>
          <Searchbox searchChange={this.onSearchchange} />
          <Scroll>
            <CardList Robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
