import React from "react";

const AddContacts = () => {
  return (
    <div className="add-cntct">
      <h1> Add a new contact: </h1>
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
        <div className="input-box">
          <input type="text" placeholder="Location*" required></input>
        </div>
        <button type="button" className="add-cntct-btn">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContacts;
