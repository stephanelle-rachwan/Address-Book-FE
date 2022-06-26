import React from "react";

const EditContacts = () => {
  return (
    <div className="edit-cntct">
      <h1> Editing Contact : </h1>
      <form className="edit-cntct-form">
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
          <button type="button" className="edit-map">
            Edit Map Location
          </button>
        </div>
        <button type="button" className="edit-cntct-btn">
          Edit Contact
        </button>
      </form>
    </div>
  );
};

export default EditContacts;
