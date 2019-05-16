import React, { Component } from "react";
import "./App.css";
import Display from "../display/Display";
import ButtonPanel from "../buttonpanel/ButtonPanel";

class App extends Component {
  render() {
    return (
      <div className="calculator">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
