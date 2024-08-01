import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const MyTable = ({ data, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>Table List</h2>
      <table className="MyTable">
        <thead className="firstTR">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Age</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.FName}</td>
                <td>{item.LName}</td>
                <td>{item.Email}</td>
                <td>{item.Password}</td>
                <td>{item.Mobile}</td>
                <td>{item.Address}</td>
                <td>{item.Age}</td>
                <td>
                  {/* {<button onClick={() => handleEdit(index)}>Edit</button>}{" "} */}
                  {
                    <button onClick={() => handleEdit(index)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  }{" "}
                </td>
                <td>
                  {
                    <button onClick={() => handleDelete(index)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { MyTable };
