import { useState } from "react";
import "./App.css";

import Mainbody from "./main/body";
import Nav from "./main/nav";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [navwide, setNavwide] = useState(false);
  return (
    <div className={`body${darkmode ? " dmbody" : ""}`}>
      <Nav
        darkmode={darkmode}
        setDarkmode={setDarkmode}
        navwide={navwide}
        setNavwide={setNavwide}
      ></Nav>
      <Mainbody
        darkmode={darkmode}
        navwide={navwide}
        setNavwide={setNavwide}
        setDarkmode={setDarkmode}
      />
    </div>
  );
}

export default App;
