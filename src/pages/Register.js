import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function register() {
    try {
      const res = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      console.log(data);
      window.location.href = "/login";
    } catch (error) {
      alert("User already exists");
    }
  }
  return (
    <div className="signup">
      <h1> Sign Up </h1>
      <form className="signup-form">
        <div className="input-box">
          <input
            onChange={(e) => {
              setUsername(e.currentTarget.value);
              console.log(username);
            }}
            type="text"
            placeholder="User name*"
            name="user-name"
            required
          ></input>
        </div>
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
        <button
          type="button"
          className="signup-btn"
          onClick={(e) => register()}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
