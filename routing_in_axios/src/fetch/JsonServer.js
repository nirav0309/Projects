import React, { useEffect, useState } from "react";
import { AddUsersData } from "./adddata";
import "bootstrap/dist/css/bootstrap.min.css";

const JsonServerComponent = () => {
  const [data, setData] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3033/userData");
    const responseData = await response.json();
    setData(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const userDelete = await fetch(`http://localhost:3033/userData/${id}`, {
        method: "DELETE",
      });
      if (!userDelete.ok) {
        throw new Error(`HTTP error! status: ${userDelete.status}`);
      }
      console.log("Delete successful");
      setData(data.filter((user) => user.id !== id));
    } catch (error) {
      console.log("Error occurred", error);
    }
  };

  const handleEdit = (element) => {
    setUserToEdit(element);
  };

  return (
    <div className="container mt-5">
      <AddUsersData onUserChange={fetchData} userToEdit={userToEdit} />
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center table-hover">
          <thead className="thead-dark">
            <tr>
              {/* <th>Id</th> */}
              <th>Name</th>
              <th>Email</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => {
              return (
                <tr key={index}>
                  {/* <td>{element.id}</td> */}
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => handleEdit(element)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(element.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { JsonServerComponent };
