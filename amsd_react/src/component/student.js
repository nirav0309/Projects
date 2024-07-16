import image from "../assets/n.png";
import "../App.css";
// import { Link } from "react-router-dom";
import { Navbar } from "./navbar";

const StudentPage = () => {
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
                  <Link to="/">Home</Link>
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
          <div className="list1">
            <div className="search">
              <label htmlFor="" className="label1" />
              <input type="search"  placeholder="Search" />
                        <i className="fa fa-search" />            
            </div>
            <div className="list-item1">
              <div className="filter">
                <span className="sub-filter">Filter</span>
                <span className="char">
                  <span>A</span>
                  <span>Z</span>
                </span>
                <span className="arrow"> ↑ </span>
                <span className="char">
                  <span>Z</span>
                  <span>A</span>
                </span>
                <span className="arrow"> ↓ </span>
              </div>
              <table style={{ overflowX: "auto" }}>
                <tbody>
                  <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Semester</th>
                    <th>Section</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Person Name</td>
                    <td>2</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Person Name</td>
                    <td>2</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Person Name</td>
                    <td>2</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Person Name</td>
                    <td>2</td>
                    <td>B</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
};


export {StudentPage}