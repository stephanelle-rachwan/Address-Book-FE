import React from "react";

const AddContacts = () => {
  return (
    <div className="add-cntct">
      <h1> Add New Contact : </h1>
      <form className="add-cntct-form">
        <div className="input-box">
          <input type="text" placeholder="Full Name*" required></input>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Phone Number*" required></input>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Relationship Status*"
            required
          ></input>
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email*" required></input>
        </div>
        <div className="input-box loc">
          <input type="text" placeholder="Location*" required></input>
          <button type="button" className="add-map">
            Add Map Location
          </button>
        </div>
        <button type="button" className="add-cntct-btn">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContacts;
