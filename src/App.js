import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import { inherits } from "util";

class App extends Component {
  state = {
    persons: [
      {
        name: "Mandy",
        age: 12
      },
      {
        name: "AJ",
        age: 1
      },
      {
        name: "Blackman",
        age: 60
      }
    ],
    otherState: "some value",
    showPersons: false
  };
  switchNameHandler = newName => {
    // this.state.persons[0].name = "Adam";
    this.setState({
      persons: [
        {
          name: newName,
          age: 12
        },
        {
          name: "AJ",
          age: 14
        },
        {
          name: "Adam",
          age: 60
        }
      ]
    });
    console.log("was clicked");
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {
          name: "Mandy",
          age: 12
        },
        {
          name: event.target.value,
          age: 1
        },
        {
          name: "Antonio",
          age: 60
        }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "purple",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />{" "}
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "atom")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing{" "}
          </Person>{" "}
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <h1> HI I 'm Adam</h1>
        <p> I love learning React </p>{" "}
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
