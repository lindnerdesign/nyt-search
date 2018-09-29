import React from "react";
import "./Btn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Btn = props => (
  <span className={props.className}{...props}>
    {props.children}
  </span>
);

export default Btn;
