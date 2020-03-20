import React from 'react';
import { Component } from 'react';
import { CardList } from './Component/Card-Component/card-component';
import './App.css';
import { SearchBox } from './Component/Search-box/srach-box.component';


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
        <h1>Monsters Rolodex </h1>
        <SearchBox placeholder="Seach Monsters"
          handleChange={e => this.setState({ SearchField: e.target.value }, () => console.log(this.state))}
        />

        <CardList monsters={filteredMonster} />


      </div>
    )
  }
}
export default App;
