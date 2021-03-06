import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./style.css";
//components imports
import TesterHeader from "../../components/TesterHeader";
import Btn from "../../components/Btn";

const TesterHome = () => {
  return (
    <div className="TesterHome">
      <TesterHeader text="Tester" />
      <div className="container">
        <img src="/img/pic.png" />
        <div className="buttons-container">
          <NavLink exact to="/make-exercise">
            <Btn label="Add Exercise" />
          </NavLink>
          <NavLink exact to="view-exercises">
            <Btn label="View Exercise" />
          </NavLink>
          <NavLink to="/make-test">
            <Btn label="Make a Test" />
          </NavLink>
          <NavLink exact to="view-tests">
            <Btn label="View Tests" />
          </NavLink>
          <NavLink exact to="examinees">
            <Btn label="Examinee’s Tests" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TesterHome;
