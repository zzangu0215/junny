import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hi, This is Junny's Home Page.</h1>
      <h2>Welcome!</h2>
      <Link to="/aboutme">Link to AboutMe Page</Link>
    </div>
  );
}

export default Home;
