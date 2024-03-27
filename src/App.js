//Dan Cove dancov8145, 3/8/2024 CIS435
//3.2 Course Project: Single Page Application with Navigation

//Dim up the imports
import React, { Component } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import './App.css';
import Home from "./Home"; 
import Stuff from "./Stuff"; 
import Stuff2 from "./Stuff2"; 
import Stuff3 from "./Stuff3"; 



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <h1 className="title">Dans Artisanal Cases</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Best Sellers</NavLink>
            </li>
            <li>
              <NavLink to="/stuff2">Why buy from here?</NavLink>
            </li>
            <li>
              <NavLink to="/stuff3">Contact Us</NavLink>
            </li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/stuff" element={<Stuff />} />
              <Route path="/stuff2" element={<Stuff2 />} />
              <Route path="/stuff3" element={<Stuff3 />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
