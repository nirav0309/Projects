import React from "react";
// import { Link } from "react-router-dom";
import image from "../assets/n.png";
import "../App.css";
import { Navbar } from "./navbar";

const ReportPage = () => {
  return (
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/report" className="border">
                Report
              </Link>
            </li>
            <li>
              <Link to="/student">Student</Link>
            </li>
          </ul>
        </nav> */}
        
        <Navbar/>
      </header>
      <div className="list2">
        <div className="label">
          <input type="search" placeholder="Search" />
        </div>
        <div className="list-item2">
          <table style={{ overflowX: "auto" }}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Section</th>
                <th>Semester</th>
                <th>Attendance count</th>
                <th>Avg</th>
              </tr>
              <tr>
                <td>Person 1</td>
                <td>A</td>
                <td>2</td>
                <td>1</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Person 1</td>
                <td>A</td>
                <td>2</td>
                <td>1</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Person 1</td>
                <td>A</td>
                <td>2</td>
                <td>1</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { ReportPage };
