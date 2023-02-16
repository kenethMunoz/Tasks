import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-dark sticky-top ">
      <div className="navbar d-flex justify-content-between container navbar-expand-lg navbar-dark ">
        <h1 className="navbar-brand text-info">ToDoListo</h1>
        <ul className="d-flex list-unstyled">
          <li className="nav-item mx-3 mt-1 btn ">
            <Link className="text-info text-decoration-none" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item mx-3  mt-1 btn">
            <Link className="text-info text-decoration-none" to="/new">
              Create Task
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
