import React from "react";

const Table = ({ data, setCurrentId, deleteData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id) => (
            <tr key={id}>
              <td>{data[id].name}</td>
              <td>{data[id].email}</td>
              <td>
                <button onClick={() => setCurrentId(id)}>Edit</button>{" "}
                <button onClick={() => deleteData(id)}>Delete</button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
