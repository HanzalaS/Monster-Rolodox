import React from 'react';
import { Component } from 'react';
import { CardList } from './Component/Card-Component/card-component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      SearchField: ""
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ monsters: user }))
  }
  render() {
    const { monsters, SearchField } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(SearchField.toLowerCase()));

    return (
      <div className="App">
        <input type="search" placeholder="Search Monster"
          onChange={e => this.setState({ SearchField: e.target.value }, () => console.log(this.state))} />
        <CardList monsters={filteredMonster} />


      </div>
    )
  }
}
export default App;
