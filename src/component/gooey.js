import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { TiInfoOutline } from "react-icons/ti";
import "./gooey.css";
function Gooey({ darkmode, Link }) {
  const [hambar, setHambar] = useState(false);

  return (
    <>
      <label className="hambar" htmlFor="check">
        <input
          onClick={() => setHambar(!hambar)}
          className="hambar-input"
          type="checkbox"
          id="check"
        />
        <span className={`normal ${darkmode ? "span-dark" : ""}`}></span>
        <span className={`normal ${darkmode ? "span-dark" : ""}`}></span>
        <span className={`normal ${darkmode ? "span-dark" : ""}`}></span>
      </label>

      <div className={`g-main ${hambar ? "g-none" : ""}`}>
        <Link to="Home" smooth={true} duration={1000}>
          {" "}
          <div className={`g-menu ${darkmode ? "g-menu-dark" : ""}`}>
            <AiOutlineHome
              className={`g-home ${darkmode ? "g-home-dark" : ""}`}
            ></AiOutlineHome>
          </div>
        </Link>
        <Link to="About" smooth={true} duration={1000}>
          {" "}
          <div className={`g-menu1 ${darkmode ? "g-menu1-dark" : ""}`}>
            <MdOutlinePersonOutline
              className={`g-people ${darkmode ? "g-people-dark" : ""}`}
            />
          </div>
        </Link>
        <Link to="Skill" smooth={true} duration={1000}>
          {" "}
          <div className={`g-menu2 ${darkmode ? "g-menu2-dark" : ""}`}>
            <AiOutlineSetting
              className={`g-setting ${darkmode ? "g-setting-dark" : ""}`}
            />
          </div>
        </Link>
        <Link to="Work" smooth={true} duration={1000}>
          {" "}
          <div className={`g-menu3 ${darkmode ? "g-menu3-dark" : ""}`}>
            <TiInfoOutline
              className={`g-info ${darkmode ? "g-info-dark" : ""}`}
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Gooey;
