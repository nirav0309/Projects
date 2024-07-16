import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="nav">
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
      </nav>
    </>
  );
};

export { Navbar };
