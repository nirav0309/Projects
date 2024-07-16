import React from "react";
import image from "../assets/n.png";
import "../App.css";
// import { Link } from "react-router-dom";
import { Navbar } from "./navbar";

const HomePage = () => {
  return (
    <>
      <div>
        <header className="header">
          <div className="img">
            <img src={image} className="logo" alt="img" />
          </div>
          <input className="side-menu" type="checkbox" id="side-menu" />
          <label className="hamb" htmlFor="side-menu">
            <span className="hamb-line" />
          </label>
          {/* <nav className="nav">
            <ul className="menu">
              <li>
                <Link to="/" className="border">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/report">Report</Link>
              </li>
              <li>
                <Link to="/student">Student</Link>
              </li>
            </ul>
          </nav> */}

          <Navbar/>
        </header>
        <div className="list">
          <div className="text">
            <h3>Attendance List</h3>
          </div>
          <div className="list-item">
            <div className="section">
              <select name="value">
                <option value="">Section</option>
              </select>
            </div>
            <div className="ref">
              <button className="activebtn">Refresh</button>
            </div>
            <div className="grid-container">
              {Array.from({ length: 16 }).map((_, index) => (
                <div className="grid-item" key={index}>
                  <label htmlFor={`item-${index}`}>{index + 1}.</label>
                  <label htmlFor={`item-${index}`} className="xyz" id="counter">
                    Sam Smith
                  </label>
                  <input type="checkbox" id={`item-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
