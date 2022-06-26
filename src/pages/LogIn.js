import React, { useState, useEffect } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login() {
    try {
      const res = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const data = await res.json();
      console.log(data);
      localStorage.setItem("token", data["token"]);
      window.location.href = "/contacts";
    } catch (error) {
      console.log(error);
      alert("wrong data");
    }
  }

  return (
    <div className="login">
      <h1> Log In </h1>
      <form className="login-form">
        <div className="input-box">
          <input
            onChange={(e) => {
              setEmail(e.currentTarget.value);
              console.log(email);
            }}
            type="email"
            placeholder="Email address*"
            name="email"
            required
          ></input>
        </div>
        <div className="input-box">
          <input
            onChange={(e) => {
              setPassword(e.currentTarget.value);
              console.log(password);
            }}
            type="password"
            placeholder="Password*"
            name="password"
            required
          ></input>
        </div>
        <button type="button" className="login-btn" onClick={(e) => login()}>
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
