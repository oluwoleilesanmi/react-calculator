import React from "react";
import "./Button.css";

export default class Card extends React.Component {
  render() {
    return (
      <div>
        <div
          onClick={this.passCharToApp}
          className={"button"}
          style={{
            backgroundColor: this.pickBgColor(this.props.color),
            width: this.pickWidth(this.props.widthx2)
          }}
        >
          {this.props.name}
        </div>
      </div>
    );
  }
  pickWidth = prop => {
    return prop ? "48.4%" : "24%";
  };
  pickBgColor = prop => {
    return prop || "#e29051";
  };
  passCharToApp = () => {
    this.props.appFunction(this.props.name);
  };
}
