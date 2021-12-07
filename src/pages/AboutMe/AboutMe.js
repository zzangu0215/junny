import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div>
      <h1>Hi, This is Junny's About Me Page.</h1>
      <h2>Welcome!</h2>
      <Link to="/">Link to Home</Link>
    </div>
  );
}

export default AboutMe;
