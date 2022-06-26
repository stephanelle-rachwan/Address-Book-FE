import React from "react";

const Register = () => {
  return (
    <div className="signup">
      <h1> Sign Up </h1>
      <form className="signup-form">
        <div className="input-box">
          <input
            type="text"
            placeholder="User name*"
            name="user-name"
            required
          ></input>
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email address*"
            name="email"
            required
          ></input>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password*"
            name="password"
            required
          ></input>
        </div>
        <button type="button" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
