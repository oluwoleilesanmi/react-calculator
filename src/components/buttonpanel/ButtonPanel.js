import React from "react";
import "./ButtonPanel.css";
import Button from "../button/Button";
export default class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="{button-panel}">
        <div id="first-row">
          <Button appFunction={this.props.charHandler} name="AC" />
          <Button appFunction={this.props.charHandler} name="+/-" />
          <Button appFunction={this.props.charHandler} name="%" />
          <Button appFunction={this.props.charHandler} name="+" />
        </div>
        <div id="second-row">
          <Button appFunction={this.props.charHandler} name="7" />
          <Button appFunction={this.props.charHandler} name="8" />
          <Button appFunction={this.props.charHandler} name="9" />
          <Button appFunction={this.props.charHandler} name="x" />
        </div>
        <div id="third-row">
          <Button appFunction={this.props.charHandler} name="4" />
          <Button appFunction={this.props.charHandler} name="5" />
          <Button appFunction={this.props.charHandler} name="6" />
          <Button name="-" />
        </div>
        <div id="forth-row">
          <Button appFunction={this.props.charHandler} name="1" />
          <Button appFunction={this.props.charHandler} name="2" />
          <Button appFunction={this.props.charHandler} name="3" />
          <Button appFunction={this.props.charHandler} name="+" />
        </div>
        <div id="last-row">
          <Button appFunction={this.props.charHandler} name="0" />
          <Button appFunction={this.props.charHandler} name="." />
          <Button appFunction={this.props.charHandler} name="=" />
        </div>
      </div>
    );
  }
}
