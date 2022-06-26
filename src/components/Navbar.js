import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  // an array of objects
  const navItems = [
    { link: "/contact", name: "Contact" },
    { link: "/register", name: "Register" },
    { link: "/login", name: "Log In" },
    { link: "/", name: "Log Out" },
  ];
  console.log(location);
  return (
    <nav className="top-bar">
      <ul className="nav-items">
        {navItems.map((navItem, index) => {
          return (
            <NavLink key={index} to={navItem.link}>
              <li>{navItem.name}</li>
            </NavLink>
          );
        })}
        {location.pathname.includes("contact") && (
          <NavLink to="/contacts/add">
            <li>Add Contact</li>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
