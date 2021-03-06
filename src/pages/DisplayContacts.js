import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import jwt_decode from "jwt-decode";

const DisplayContacts = () => {
  const [contacts, setContacts] = useState([]);
  async function delContact(number) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/user?phoneNumber=${number}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  let token = jwt_decode(localStorage.getItem("token"));
  token = token["_id"];
  useEffect(() => {
    const test = async () => {
      try {
        // console.log(token["_id"]);
        const res = await fetch("http://localhost:3000/api/user", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ id: token }),
        });
        const data = await res.json();
        console.log(data);
        setContacts(data.contacts);
      } catch (error) {
        console.log(error);
        alert("wrong data");
      }
    };
    test();
  }, []);
  contacts.length > 0 && console.log(contacts);
  return (
    <div>
      <div className="title-table flex-cont">
        <h2 className="title-mini">Contacts</h2>
        <input
          className="search-bar"
          type="text"
          placeholder="Search.."
        ></input>
        <button
          className="add-btn"
          onClick={(e) => (window.location.href = "contacts/add")}
        >
          Add Contact
        </button>
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
            {contacts.length > 0 &&
              contacts.map((e) => (
                <tr>
                  <td>{e.fullName}</td>
                  <td>{e.phoneNumber}</td>
                  <td>{e.relationStatus}</td>
                  <td>{e.email}</td>
                  <td>{[e.latitude, " , ", e.longitude]}</td>
                  <td
                    onClick={(e) => {
                      delContact(
                        e.target.parentElement.parentElement.children[1]
                          .innerText
                      );
                      window.location.href = "/contacts";
                    }}
                  >
                    <AiOutlineDelete />
                  </td>
                  <td
                    onClick={(e) => {
                      localStorage.setItem("user_id", token);
                      window.location.href = "/contacts/edit";
                    }}
                  >
                    <AiOutlineEdit />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayContacts;
