import React, { Component } from "react";

export default class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    console.log("Clicked");
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Simple Counter: {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
