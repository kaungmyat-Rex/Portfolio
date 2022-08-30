import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { TiInfoOutline } from "react-icons/ti";

import { ImNext } from "react-icons/im";
import { Link } from "react-scroll";
import logo from "./mainimg.png";
import Gooey from "../component/gooey";
function Nav({ darkmode, navwide, setNavwide }) {
  return (
    <header
      className={`nav-bar${darkmode ? " nav-bar-darkmode" : ""}${
        navwide ? " navbar-wide" : ""
      }`}
    >
      <div className={`logo ${navwide ? "logo-wide" : ""}`}>
        <img className="image-logo" src={logo} alt="logo" />
      </div>

      <div className="nav">
        <ul>
          <li className="gg1">
            <Link className="navtext" to="Home" smooth={true} duration={1000}>
              <AiOutlineHome className={`${darkmode ? "dark-icon" : "icon"}`} />
            </Link>
            <h6 className={`side-text${darkmode ? " dark-side-text" : ""}`}>
              HOME
            </h6>
          </li>
          <li className="gg2">
            <Link className="navtext" to="About" smooth={true} duration={1000}>
              <MdOutlinePersonOutline
                className={`${darkmode ? "dark-icon" : "icon"}`}
              />
            </Link>
            <h6 className={`side-text2${darkmode ? " dark-side-text" : ""}`}>
              ABOUT
            </h6>
          </li>
          <li className="gg3">
            <Link className="navtext" to="Skill" smooth={true} duration={1000}>
              <AiOutlineSetting
                className={`${darkmode ? "dark-icon" : "icon"}`}
              />
            </Link>
            <h6 className={`side-text3${darkmode ? " dark-side-text" : ""}`}>
              SKILL
            </h6>
          </li>
          <li className="gg4">
            <Link className="navtext" to="Work" smooth={true} duration={1000}>
              <TiInfoOutline
                className={`${darkmode ? "dark-icon" : "icon"}`}
              ></TiInfoOutline>
            </Link>
            <h6 className={`side-text4${darkmode ? " dark-side-text" : ""}`}>
              WORK
            </h6>
          </li>
        </ul>
      </div>

      <div className={`next-btn ${navwide ? "next-btn-wide" : ""}`}>
        <ImNext
          onClick={() => setNavwide(!navwide)}
          className={darkmode ? "dark-next-icon" : "next-icon"}
        />
      </div>
      <Gooey darkmode={darkmode} Link={Link} />
    </header>
  );
}

export default Nav;
