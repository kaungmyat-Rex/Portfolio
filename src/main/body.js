import React, { useEffect, useRef, useState } from "react";
import Hoverbtn from "../component/btn";
import maintext from "./maintext.png";
import mainimage from "./mainimg.png";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { RiTwitterLine } from "react-icons/ri";

import blackpanther from "../main/blackpantherblue.png";
import blackpantherDark from "../main/blackpantherbandw.png";
import workImg from "../main/phermacy.jpg";
import workImg2 from "../main/work2.jpg";
import codestyle from "../main/codeAddress2.png";
import codestyleDark from "../main/codeaddressDark.png";

import SimpleMap from "../component/Map";
import MapImage from "../main/mapstyle.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Mainbody({ darkmode, navwide, setNavwide, setDarkmode }) {
  // const [hover, setHover] = useState(false);
  // const [hover1, setHover1] = useState(false);
  // const [hover2, setHover2] = useState(false);
  // const [hover3, setHover3] = useState(false);
  // const [hover4, setHover4] = useState(false);
  // const [counter, setCounter] = useState(0);
  // const [counter2, setCounter2] = useState(0);
  // const [counter3, setCounter3] = useState(0);
  // const [counter4, setCounter4] = useState(0);
  // const [counter5, setCounter5] = useState(0);
  // const [intervall, setIntervall] = useState(0);
  // const [intervall2, setIntervall2] = useState(0);
  // const [intervall3, setIntervall3] = useState(0);
  // const [intervall4, setIntervall4] = useState(0);
  // const [intervall5, setIntervall5] = useState(0);
  const [enable, setEnable] = useState(false);
  const [enable2, setEnable2] = useState(false);
  const [enable3, setEnable3] = useState(false);
  const [enable4, setEnable4] = useState(false);
  const [enable5, setEnable5] = useState(false);
  const [animate, setAnimate] = useState(false);

  const address = "{[ Email : aungakm667@gmail.com , Phone : 09-971569482 ]}";
  const elementRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const windowHeight = window.innerHeight;
      const elementTop = elementRef.current.getBoundingClientRect().top;
      const elementvisible = 200;

      if (elementTop < windowHeight - elementvisible) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    });

    if (darkmode === true) {
      Aos.init({ disable: true });
    } else if (darkmode === false) {
      Aos.init({});
    }
  }, [darkmode]);

  // const eventInterval = () => {
  //   const timer = setInterval(() => {
  //     setCounter((prev) => prev + 1);
  //     setIntervall(timer);
  //   }, 20);
  // };
  // if (counter === 80) {
  //   clearInterval(intervall);
  // }
  // /*-----------------------------*/
  // const eventInterval2 = () => {
  //   const timer = setInterval(() => {
  //     setCounter2((prev) => prev + 1);
  //     setIntervall2(timer);
  //   }, 20);
  // };
  // if (counter2 === 65) {
  //   clearInterval(intervall2);
  // }
  // /*-----------------------------*/
  // const eventInterval3 = () => {
  //   const timer = setInterval(() => {
  //     setCounter3((prev) => prev + 1);
  //     setIntervall3(timer);
  //   }, 20);
  // };
  // if (counter3 === 50) {
  //   clearInterval(intervall3);
  // }
  // /*-----------------------------*/
  // const eventInterval4 = () => {
  //   const timer = setInterval(() => {
  //     setCounter4((prev) => prev + 1);
  //     setIntervall4(timer);
  //   }, 20);
  // };
  // if (counter4 === 80) {
  //   clearInterval(intervall4);
  // }
  // /*-----------------------------*/
  // const eventInterval5 = () => {
  //   const timer = setInterval(() => {
  //     setCounter5((prev) => prev + 1);
  //     setIntervall5(timer);
  //   }, 20);
  // };
  // if (counter5 === 43) {
  //   clearInterval(intervall5);
  // }

  const imagehover = () => {
    setEnable(true);
  };

  const imagehoverout = () => {
    setEnable(false);
  };

  const imagehover2 = () => {
    setEnable2(true);
  };

  const imagehoverout2 = () => {
    setEnable2(false);
  };

  /*-----------------------------*/
  return (
    <div className="main">
      <div className="section-A" id="Home">
        <div className="left">
          <label className={`switch ${navwide ? "switch-wide" : ""}`}>
            <input onClick={() => setDarkmode(!darkmode)} type="checkbox" />
            <span className="slider"></span>
          </label>
          <div className="socialMedia">
            <a
              className="facebook"
              href="https://www.facebook.com/profile.php?id=100021177453532"
            >
              <TiSocialFacebookCircular
                className={darkmode ? "dark-next-icon" : "next-icon"}
              />
            </a>
            <a
              className="instagram"
              href="https://www.instagram.com/rex_kgmyat/"
            >
              <TiSocialInstagramCircular
                className={darkmode ? "dark-next-icon" : "next-icon"}
              />
            </a>
            <a className="twiter" href="https://twitter.com/?lang=en">
              <RiTwitterLine
                className={darkmode ? "dark-next-icon" : "next-icon"}
              />
            </a>
          </div>
          <div className="span">
            <h1
              data-aos="fade-in"
              data-aos-delay="200"
              id="text1"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              H
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="300"
              id="text2"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              i
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="400"
              id="text3"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              ,
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="500"
              id="text4"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              I
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="600"
              id="text5"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              '
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="700"
              id="text6"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              m
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="800"
              id="text7"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              <img
                data-aos="fade-in"
                data-aos-delay="900"
                src={maintext}
                alt="K-text"
                width="60px"
                height="70px
              "
              ></img>
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1000"
              id="text8"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              a
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1100"
              id="text9"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              u
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1200"
              id="text10"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              n
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1300"
              id="text11"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              g
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1400"
              id="text12"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              ,
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="200"
              id="text13"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              W
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="300"
              id="text14"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              e
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="400"
              id="text15"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              b
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="500"
              id="text16"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              D
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="600"
              id="text17"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              e
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="700"
              id="text18"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              v
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="800"
              id="text19"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              e
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="900"
              id="text20"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              l
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1000"
              id="text21"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              o
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1100"
              id="text22"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              p
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1200"
              id="text23"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              e
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1300"
              id="text24"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              r
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1400"
              id="text25"
              className={`${darkmode ? "darkmode-text" : "text"}`}
            >
              .
            </h1>
          </div>
          <h6 className="desc">Front end developer & React Js developer</h6>

          <Hoverbtn darkmode={darkmode}></Hoverbtn>
        </div>
        <div className="right">
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            src={mainimage}
            alt="main"
            className="img1"
            width="450px"
            height="550px"
          />
        </div>
      </div>
      <div className="section-B" id="About">
        <div className="B-left">
          <div className="span-left">
            <h1
              data-aos="fade-in"
              data-aos-delay="200"
              id="text26"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              M
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="300"
              id="text27"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              e
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="400"
              id="text28"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              ,
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="500"
              id="text29"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              M
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="600"
              id="text30"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              y
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="700"
              id="text31"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              s
            </h1>

            <h1
              data-aos="fade-in"
              data-aos-delay="800"
              id="text32"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              e
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="900"
              id="text33"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              l
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1000"
              id="text34"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              f
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1100"
              id="text35"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              &
            </h1>
            <h1
              data-aos="fade-in"
              data-aos-delay="1200"
              id="text36"
              className={` ${darkmode ? "dark-text1" : "text1"}`}
            >
              I
            </h1>

            <p className={`p1 ${darkmode ? "p1-dark" : ""}`}>
              Hello there.It's me Aung Kaung Myat. As I said before, I am a
              developer.I became interested in web development in 2017, when I
              was at college (Bsc (Hons) Computing).I'm not studying properly at
              that time because of my young age and studentlife.<br></br> <br />{" "}
              And in 2019, when the Covid break out , I will begin self-study to
              learn the entire web development sector. So, here we are in 2022,
              and I am constantly studying and applying to all jobs at the
              junior level. So, if you require a developer for your project,
              please contact me. I would be delighted to assist you since it
              would allow me to improve my skills and knowledge.
            </p>
            {darkmode ? (
              <img src={codestyleDark} alt="codestyle" className="codestyle" />
            ) : (
              <img src={codestyle} alt="codestyle" className="codestyle" />
            )}
          </div>
        </div>
        <div className="B-right">
          {darkmode ? (
            <img className="svg-image" src={blackpantherDark} alt="" />
          ) : (
            <img className="svg-image" src={blackpanther} alt="" />
          )}
        </div>
      </div>
      <div className="section-C" id="Skill">
        <div className="c-span">
          <h1
            data-aos="fade-in"
            data-aos-delay="100"
            id="text37"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            S
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="200"
            id="text38"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            k
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="300"
            id="text39"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            i
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="400"
            id="text40"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            l
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="500"
            id="text41"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            l
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="600"
            id="text42"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            &
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="700"
            id="text43"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            E
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="800"
            id="text44"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            x
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="900"
            id="text45"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            p
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="1000"
            id="text46"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            e
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="1100"
            id="text47"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            r
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="1200"
            id="text48"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            i
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="1300"
            id="text49"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            e
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="1400"
            id="text50"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            n
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="1500"
            id="text51"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            c
          </h1>
          <h1
            data-aos="fade-in"
            data-aos-delay="1600"
            id="text52"
            className={` ${darkmode ? "dark-text1" : "text1"}`}
          >
            e
          </h1>
        </div>

        <div className="skill-list">
          <div className="skill-text">
            <span
              className={`skill-text-child ${
                darkmode ? "skill-text-dark" : ""
              }`}
            >
              While I was self-learning, I began my web development career as a
              freelancer. I've built a minor inventory website for a pharmacy
              and health care center, worked on startup projects, and
              collaborated with an incredibly brilliant senior. <br /> <br /> I
              design profitable and beautiful websites with the finest user
              experience and a clean style. I developed progressively and using
              best practices. My main area of experience right now is front-end
              web development with React JS, customized animation, and design.
              <br />
              <br /> The backend is still learning in process, and my goal is to
              become a full-stack developer one day (I guess so xD). During my
              studies, I had minor experience in some projects with backend
              using node JS, CMS such as WordPress, and others. <br /> <br />{" "}
              Visit my{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/kaung-myat-1027a9247/"
              >
                {" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  linkedin
                </span>{" "}
              </a>
              profile for more detail or{" "}
              <span style={{ color: "white", fontWeight: "700" }}>contact</span>{" "}
              me
            </span>
          </div>

          <div className="skill-tree-main" ref={elementRef}>
            <div className="skill-tree-exp">
              <div className="skill-tree-one">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    className={`html-text ${
                      darkmode ? "skill-name-text-dark" : ""
                    }`}
                  >
                    Html/Css
                  </span>
                  <span className="bar">
                    <span
                      className={`html-bar ${darkmode ? "bar-dark" : ""} ${
                        animate ? "animate-html-bar" : ""
                      }`}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="skill-tree-two">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    className={`html-text ${
                      darkmode ? "skill-name-text-dark" : ""
                    }`}
                  >
                    ReactJs
                  </span>
                  <span className="bar">
                    <span
                      className={`ts-bar ${darkmode ? " bar-dark" : ""} ${
                        animate ? "animate-ts-bar" : ""
                      }`}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="skill-tree-three">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    className={`html-text ${
                      darkmode ? "skill-name-text-dark" : ""
                    }`}
                  >
                    TypeScript
                  </span>
                  <span className="bar">
                    <span
                      className={`react-bar ${darkmode ? " bar-dark" : ""} ${
                        animate ? "animate-react-bar" : ""
                      }`}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="skill-tree-four">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    className={`html-text ${
                      darkmode ? "skill-name-text-dark" : ""
                    }`}
                  >
                    NodeJs
                  </span>
                  <span className="bar">
                    <span
                      className={`node-bar ${darkmode ? " bar-dark" : ""} ${
                        animate ? "animate-node-bar" : ""
                      }`}
                    ></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="skill-tree-name">
              <div className="skill-name-one">
                <h3 className="Fj-title">Frontend journey</h3>
                <span className="Fj-date">Started From 2018</span>
                <span className="Fj-text">
                  design profitable and beautiful websites with the finest user
                  experience and a clean style. I developed progressively and
                  using best practices.
                </span>
              </div>
              <div className="skill-name-two">
                <h3 className="Fj-title">Backend journey</h3>
                <span className="Fj-date">Started From 2021</span>
                <span className="Fj-text">
                  still learning in process, had minor experience in node JS,
                  CMS such as WordPress, and others.
                </span>
              </div>
            </div>
          </div>
          {/* <div
            className={`html ${hover ? "html-hover" : ""}${
              darkmode ? " html-dark" : ""
            }`}
          >
            <DiHtml5
              onClick={
                !enable
                  ? () => {
                      setEnable(true);
                      setHover(true);
                      eventInterval();
                    }
                  : null
              }
            />
            <p className="skill-name">HTML5</p>
            <span className="bar">
              <span
                className={`html-bar ${hover ? "html-bar-hover" : ""}${
                  darkmode ? " bar-dark" : ""
                }`}
              ></span>
            </span>
            <div className="percent-class">
              <h6 className="percent">{counter}%</h6>
            </div>
          </div>
          <div
            className={`css ${hover1 ? "css-hover" : ""}${
              darkmode ? " html-dark" : ""
            }`}
          >
            <DiCss3
              onClick={
                !enable2
                  ? () => {
                      setEnable2(true);
                      setHover1(true);
                      eventInterval2();
                    }
                  : null
              }
            />
            <p className="skill-name ex1">CSS3</p>
            <span className="bar">
              <span
                className={`css-bar ${hover1 ? "css-bar-hover" : ""}${
                  darkmode ? " bar-dark" : ""
                }`}
              ></span>
            </span>
            <div className="percent-class">
              <h6 className="percent">{counter2}%</h6>
            </div>
          </div>
          <div
            className={`javascript ${hover2 ? "js-hover" : ""}${
              darkmode ? " html-dark" : ""
            }`}
          >
            <DiJavascript1
              onClick={
                !enable3
                  ? () => {
                      setEnable3(true);
                      setHover2(true);
                      eventInterval3();
                    }
                  : null
              }
            />
            <p className="skill-name ex2">JavaScript</p>
            <span className="bar">
              <span
                className={`js-bar ${hover2 ? "js-bar-hover" : ""}${
                  darkmode ? " bar-dark" : ""
                }`}
              ></span>
            </span>
            <div className="percent-class">
              <h6 className="percent">{counter3}%</h6>
            </div>
          </div>
          <div
            className={`react ${hover3 ? "react-hover" : ""}${
              darkmode ? " html-dark" : ""
            }`}
          >
            <DiReact
              onClick={
                !enable4
                  ? () => {
                      setEnable4(true);
                      setHover3(true);
                      eventInterval4();
                    }
                  : null
              }
            />
            <p className="skill-name ex3">React</p>
            <span className="bar">
              <span
                className={`react-bar ${hover3 ? "react-bar-hover" : ""}${
                  darkmode ? " bar-dark" : ""
                }`}
              ></span>
            </span>
            <div className="percent-class">
              <h6 className="percent">{counter4}%</h6>
            </div>
          </div>
          <div
            className={`photoshop ${hover4 ? "ps-hover" : ""}${
              darkmode ? " html-dark" : ""
            }`}
          >
            <DiPhotoshop
              onClick={
                !enable5
                  ? () => {
                      setEnable5(true);
                      setHover4(true);
                      eventInterval5();
                    }
                  : null
              }
            />
            <p className="skill-name ex4">Photoshop</p>
            <span className="bar">
              <span
                className={`ps-bar ${hover4 ? "ps-bar-hover" : ""}${
                  darkmode ? " bar-dark" : ""
                }`}
              ></span>
            </span>
            <div className="percent-class">
              <h6 className="percent">{counter5}%</h6>
            </div>
          </div> */}
        </div>
        {/* <div className={`info ${darkmode ? "info-dark" : ""}`}>
          <h4 className={`info-text ${darkmode ? "info-text-dark" : ""}`}>
            CLICK THE SKILL ICON
          </h4>
        </div> */}
      </div>
      <div className="section-work" id="Work">
        <div className="title-text">
          <h1 className={`work-title ${darkmode ? "work-title-dark" : ""}`}>
            My Projects
          </h1>
        </div>
        <div className="work-list">
          <div className="work-one">
            <a
              href="https://pethannyunt.netlify.app/"
              onMouseOver={() => imagehover2()}
              onMouseOut={() => imagehoverout2()}
              className="work-gp-link2"
            >
              <h3 className={`view-text2 ${enable2 ? "view-text2-show" : ""}`}>
                View Project
              </h3>
              <img
                src={workImg}
                alt="workimg"
                className={`work-img ${enable2 ? "work-img2-hover" : ""}${
                  darkmode ? " work-img-dark" : ""
                }`}
              />
            </a>

            <div className="work-gp">
              <span className={`feature ${darkmode ? "feature-dark" : ""}`}>
                Feature Project
              </span>
              <span className={`p-name ${darkmode ? "work-title-dark" : ""}`}>
                Pharmancy store managing
              </span>
              <span className={`work-text ${darkmode ? "work-text-dark" : ""}`}>
                The project you've seen is for pharmacy management. You can save
                your item price, data, and calculate the final price in a
                database. It includes a chud login API and the ability to print
                a coupon for your consumer.
              </span>

              <ul className="tech-gp">
                <li className="tech">
                  <span>React JS</span>
                  <span>Router</span>
                  <span>Material UI</span>
                  <span>Firebase</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="work-two">
            <div className="work-gp-two">
              <span className={`feature2 ${darkmode ? "feature-dark" : ""}`}>
                Feature Project
              </span>
              <span className={`p-name2 ${darkmode ? "work-title-dark" : ""}`}>
                Phone Review Website
              </span>
              <span
                className={`work-text2 ${darkmode ? "work-text-dark" : ""}`}
              >
                The project name is phone bae review website, on this website
                ,you can post , edit and delete reviews if you are admin , for
                client or visitor can read the reviews. Dashboard include for
                admin , so it is easy to manage the post quickly.
              </span>

              <ul className="tech-gp2">
                <li className="tech2">
                  <span>React JS</span>
                  <span>Router</span>
                  <span>Express Js</span>
                  <span>Mongo Db</span>
                </li>
              </ul>
            </div>
            <a
              onMouseOver={() => imagehover()}
              onMouseOut={() => imagehoverout()}
              className="work-gp-link2"
              href="https://phonebae-reviews.netlify.app/"
            >
              <h3 className={`view-text2 ${enable ? "view-text2-show" : ""}`}>
                View Project
              </h3>

              <img
                src={workImg2}
                alt="workimg"
                className={`work-img2 ${enable ? "work-img2-hover" : ""}${
                  darkmode ? " work-img-dark" : ""
                }`}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="section-D" id="Contact">
        <div className="D-left">
          <div className="D-span">
            <h1 id="text53" className={` ${darkmode ? "dark-text1" : "text1"}`}>
              C
            </h1>
            <h1 id="text54" className={` ${darkmode ? "dark-text1" : "text1"}`}>
              o
            </h1>
            <h1 id="text55" className={` ${darkmode ? "dark-text1" : "text1"}`}>
              n
            </h1>
            <h1 id="text56" className={` ${darkmode ? "dark-text1" : "text1"}`}>
              t
            </h1>
            <h1 id="text57" className={` ${darkmode ? "dark-text1" : "text1"}`}>
              a
            </h1>
            <h1 id="text58" className={` ${darkmode ? "dark-text1" : "text1"}`}>
              c
            </h1>

            <h1 id="text59" className={` ${darkmode ? "dark-text1" : "text1"}`}>
              t
            </h1>
            <h1 id="text60" className={` ${darkmode ? "dark-text1" : "text1"}`}>
              m
            </h1>
            <h1 id="text61" className={` ${darkmode ? "dark-text1" : "text1"}`}>
              e
            </h1>
          </div>

          <div className="formclass">
            <div className="paragraph">
              <span className={`dp${darkmode ? "skill-text-dark" : ""}`}>
                Whether it's a job opportunity or project, my inbox is always
                open. If you have a question or just want to say hi, feel free
                to contact me.
              </span>
            </div>
            <div className="email">
              <h3>Email</h3>
              <span
                className={`child-email${darkmode ? "skill-text-dark" : ""}`}
              >
                aungakm667@gmail.com
              </span>
            </div>
            <div className="phone-num">
              <h3>Phone</h3>
              <span
                className={`child-phone${darkmode ? "skill-text-dark" : ""}`}
              >
                09-971569482
              </span>
            </div>
          </div>
        </div>
        <div className="D-right">
          {/* <SimpleMap /> */}
          <img className="mapimage" src={MapImage} alt="map" />
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
