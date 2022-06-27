import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const AddContacts = () => {
  async function AddContact() {
    let token = jwt_decode(localStorage.getItem("token"));
    let id = token["_id"];
    let longitude = location.split(/[, ]+/)[0];
    let latitude = location.split(/[, ]+/)[1];
    try {
      const res = await fetch(`http://localhost:3000/api/user/addContact`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullName: name,
          phoneNumber: phoneNumber,
          relationStatus: relStatus,
          email: email,
          user: id,
          longitude: longitude,
          latitude: latitude,
        }),
      });
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [relStatus, setRelStatus] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="add-cntct">
      <h1> Add New Contact : </h1>
      <form className="add-cntct-form">
        <div className="input-box">
          <input
            onChange={(e) => {
              setName(e.currentTarget.value);
              console.log(name);
            }}
            type="text"
            placeholder="Full Name*"
            required
          ></input>
        </div>
        <div className="input-box">
          <input
            onChange={(e) => {
              setPhoneNumber(e.currentTarget.value);
              console.log(phoneNumber);
            }}
            type="text"
            placeholder="Phone Number*"
            required
          ></input>
        </div>
        <div className="input-box">
          <input
            onChange={(e) => {
              setRelStatus(e.currentTarget.value);
              console.log(relStatus);
            }}
            type="text"
            placeholder="Relationship Status*"
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
            placeholder="Email*"
            required
          ></input>
        </div>
        <div className="input-box loc">
          <input
            onChange={(e) => {
              setLocation(e.currentTarget.value);
              console.log(location);
            }}
            type="text"
            placeholder="Location*"
            required
          ></input>
          <button type="button" className="add-map">
            Add Map Location
          </button>
        </div>
        <button
          type="button"
          className="add-cntct-btn"
          onClick={(e) => {
            AddContact();
            window.location.href = "/contacts";
          }}
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContacts;
