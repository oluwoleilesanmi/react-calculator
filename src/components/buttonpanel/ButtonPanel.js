import React from "react";
import "./ButtonPanel.css";
import Button from "../button/Button";
export default class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="{button-panel}">
        <div id="first-row">
          <Button appFunction={this.props.charHandler} name="AC" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="+/-" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="%" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="/" />
        </div>
        <div id="second-row">
          <Button appFunction={this.props.charHandler} name="7" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="8" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="9" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="x" />
        </div>
        <div id="third-row">
          <Button appFunction={this.props.charHandler} name="4" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="5" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="6" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="-" />
        </div>
        <div id="forth-row">
          <Button appFunction={this.props.charHandler} name="1" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="2" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="3" color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="+" />
        </div>
        <div id="last-row">
          <Button appFunction={this.props.charHandler} name="0" color={"#dddbdb"} widthx2/>
          <Button appFunction={this.props.charHandler} name="." color={"#dddbdb"} />
          <Button appFunction={this.props.charHandler} name="=" />
        </div>
      </div>
    );
  }
}
