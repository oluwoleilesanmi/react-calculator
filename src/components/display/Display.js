import React from "react";
import "./Display.css";

export default class Display extends React.Component {
  render() {
    return (
      <div>
        <div className={"display"}>{this.props.result}</div>
      </div>
    );
  }
}
