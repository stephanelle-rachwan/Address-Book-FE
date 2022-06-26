import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="contacts">THE Address Book</a>
      </div>

      <div className="nav-list">
        <ul>
          <li>
            <a href="register"> Register</a>
            <a href="login"> Log In</a>
            <a href="logout"> Log Out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
