import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const DisplayContacts = () => {
  return (
    <div>
      <div className="title-table flex-cont">
        <h2 className="title-mini">Contacts</h2>
        <input
          className="search-bar"
          type="text"
          placeholder="Search.."
        ></input>
        <button className="add-btn">Add Contact</button>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Relationship Status</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stephanelle Rachwan</td>
              <td>76871120</td>
              <td>Divorced</td>
              <td>stephanellerachwan@gmail.com</td>
              <td>Planet Mars</td>
              <td>
                <AiOutlineDelete />
              </td>
              <td>
                <AiOutlineEdit />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayContacts;
