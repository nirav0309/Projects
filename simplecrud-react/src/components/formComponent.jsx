import React, { useEffect, useState } from "react";

const Form = ({ data, currentId, addOrEdit }) => {
  const initialValue = { name: "", email: "" };
  const [values, setValues] = useState(initialValue);

  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialValue });
    } else {
      setValues(data[currentId]);
    }
  }, [currentId, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...initialValue });
    addOrEdit(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            id=""
            value={values.name}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          <input
            type="text"
            name="email"
            id=""
            value={values.email}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default Form;
