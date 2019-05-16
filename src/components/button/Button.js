import React from "react";
import "./Button.css";

export default class Card extends React.Component {
  render() {
    return (
      <div>
        <div className={"button"}>{this.props.name}</div>
      </div>
    );
  }
}
