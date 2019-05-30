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
        <Display result={this.renderLogic()} />
        <ButtonPanel charHandler={this.handle} />
      </div>
    );
  }

  renderLogic = () => {
    const { total, next, operator } = this.state;
    if (operator === "%") return this.state.total;
    if (total && !next && !operator) return total;
    if (operator === "=" && total) return total;
    if (operator === "x" || operator === "-" || operator === "+" || operator === "/" || 
        (operator === "%" && (total && next))) return next ? next : operator;
  };

  handle = char => {
    let data = calculate(this.state, char);
    this.setState({ total: data.total, next: data.next, 
                   operator: data.operator, clear: data.clear });
  };
}

export default App;
