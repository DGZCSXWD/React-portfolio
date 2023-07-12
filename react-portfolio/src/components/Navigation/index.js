// src/components/Navigation/index.js

import React from "react";
import { NavLink, useMatch } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavItem to="/" label="About Me" />
        </li>
        <li className="nav-item">
          <NavItem to="/portfolio" label="Portfolio" />
        </li>
        <li className="nav-item">
          <NavItem to="/contact" label="Contact" />
        </li>
        <li className="nav-item">
          <NavItem to="/resume" label="Resume" />
        </li>
      </ul>
    </nav>
  );
}

function NavItem({ to, label }) {
  let match = useMatch(to);
  return (
    <NavLink to={to} className={`nav-link ${match ? "active" : ""}`}>
      {label}
    </NavLink>
  );
}

export default Navigation;
