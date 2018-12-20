import React from "react";
import "./Header.css";

const Header = props => (
  <div className="jumbotron bg-dark text-light">
    <h1>{props.children}</h1>
    <div className="points">
      Score: {props.score}<br></br>
      High-Score: {props.highscore}
    </div>
  </div>
);

export default Header;