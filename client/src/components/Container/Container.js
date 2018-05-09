import React from "react";
// import "../../animate.css";
// import "../../style.css";

const Container = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;

export default Container;
