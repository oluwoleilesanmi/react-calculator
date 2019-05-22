import React, { Component } from "react";
import "./App.css";
import Display from "../display/Display";
import ButtonPanel from "../buttonpanel/ButtonPanel";
import calculate from "../../logic/calculate";

class App extends Component {
  render() {
    return (
      <div className="calculator">
        <Display />
        <ButtonPanel charHandler={this.handle} />
      </div>
    );
  }

  handle = char => {
    console.log(char);
  };
}

export default App;
