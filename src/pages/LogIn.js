import React from "react";

const LogIn = () => {
  // return <div>hii</div>;

  return (
    <div class="login">
      <h1> Log In </h1>
      <form class="login-form" id="login">
        <div class="input-box">
          <input
            type="email"
            placeholder="Email address*"
            name="email"
            required
          ></input>
        </div>
        <div class="input-box">
          <input
            type="password"
            placeholder="Password*"
            name="password"
            required
          ></input>
        </div>
        <button type="button" class="login-btn" id="submit">
          {" "}
          Log In{" "}
        </button>
      </form>
      <p class="login-text">
        Don't have an account?<a href="Register"> Register now.</a>
      </p>
    </div>
  );
};

export default LogIn;
