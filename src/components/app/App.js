import React, { Component } from "react";
import "./App.css";
import Display from "../display/Display";
import ButtonPanel from "../buttonpanel/ButtonPanel";
import calculate from "../../logic/calculate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { total: "", next: "", operator: "", clear: "" };
  }

  render() {
    return (
      <div className="calculator">
        <Display result={this.state.total} />
        <ButtonPanel charHandler={this.handle} />
      </div>
    );
  }

  handle = char => {
    let data = calculate(this.state, char);

    this.setState({
      total: data.total,
      next: data.next,
      operator: data.operator,
      clear: data.clear
    });
  };
}

export default App;
