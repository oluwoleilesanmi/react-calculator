import React from "react";
import "./Button.css";
import PropTypes from 'prop-types'

  const Button = props => (
    <div onClick={() => props.appFunction(props.name)} className= "button" 
      style={{ backgroundColor: pickBgColor(props.color), width: pickWidth(props.widthx2)}}>
          {props.name}
    </div>)
  
  const pickWidth = prop => {
    return prop ? "48.4%" : "24%";
  };
  const pickBgColor = prop => {
    return prop || "#e29051";
  };

  Button.propTypes = {
    widthx2: PropTypes.bool,
    name: PropTypes.string,
    color: PropTypes.string,
    appFunction: PropTypes.func
  }

export default Button;
