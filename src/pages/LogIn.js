import React from "react";

const LogIn = () => {
  return (
    <div className="login">
      <h1> Log In </h1>
      <form className="login-form">
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
        <button type="button" className="login-btn">
          Log In
        </button>
      </form>
      <p className="login-text">
        Don't have an account?<a href="Register"> Register now.</a>
      </p>
    </div>
  );
};

export default LogIn;
