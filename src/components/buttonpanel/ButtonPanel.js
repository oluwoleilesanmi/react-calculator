import React from "react";
import "./ButtonPanel.css";
import Button from "../button/Button";
export default class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="{button-panel}">
        <div id="first-row">
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="+" />
        </div>
        <div id="second-row">
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="x" />
        </div>
        <div id="third-row">
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="-" />
        </div>
        <div id="forth-row">
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
          <Button name="+" />
        </div>
        <div id="last-row">
          <Button name="0" />
          <Button name="." />
          <Button name="=" />
        </div>
      </div>
    );
  }
}
