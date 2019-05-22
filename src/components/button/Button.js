import React from "react";
import "./Button.css";

export default class Card extends React.Component {
  render() {
    return (
      <div>
        <div onClick={this.passCharToApp} className={"button"}>
          {this.props.name}
        </div>
      </div>
    );
  }
  passCharToApp = () => {
    this.props.appFunction(this.props.name);
  };
}
