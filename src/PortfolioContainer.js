import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";

export default function PortfolioContainer() {
  return (
    <Router>
      <Routes>
        <Route exact path="/aboutme" element={<AboutMe />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
