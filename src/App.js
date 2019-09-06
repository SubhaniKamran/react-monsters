import React, { Component } from "react";
import CardList from "./components/cardList/CardList";
import Search from "./components/searchFilter/Search";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfilter: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({ monsters: users }, () => {
          console.log(this.state);
        })
      );
  }
  changeHandler = e => {
    this.setState({ searchfilter: e.target.value }, () => {
      console.log(this.state);
    });
  };

  render() {
    var { searchfilter, monsters } = this.state;
    let filterd = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfilter.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters</h1>
        <Search
          placeholder="search"
          changeHandler={e => this.changeHandler(e)}
        />
        <CardList monsters={filterd} />
      </div>
    );
  }
}
