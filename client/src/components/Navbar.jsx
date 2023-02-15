import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">React Mysql</h1>
      <ul className="d-flex">
        <li>
          <Link className="text-white text-decoration-none" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white text-decoration-none" to="/new">
            Create Task
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
