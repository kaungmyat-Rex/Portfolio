import React from "react";
import "./btnstyle.css";
import { Link } from "react-scroll";
function Hoverbtn({ darkmode }) {
  return (
    <div className="container">
      <Link
        className={`button ${darkmode ? "button-dark" : ""}`}
        to="Contact"
        smooth={true}
        duration={1000}
      >
        Contact Me
      </Link>
    </div>
  );
}

export default Hoverbtn;
