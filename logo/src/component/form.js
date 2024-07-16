import React, { useEffect, useState } from "react";
import { MyTable } from "./table";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const MyForm = () => {
  const [text, setText] = useState({
    Id: null,
    FName: "",
    LName: "",
    Email: "",
    Password: "",
    Mobile: "",
    Address: "",
    Age: "",
    
  });

  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem("value")) || [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]); //whenever value state changes useEffect re-run and store tha value in locale storage

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    const newId = value.length ? value[value.length - 1].Id + 1 : 1; //value.length not zero, then it takes the id of the last element in the array and increment by 1 to generate bew id
    const newValue = { ...text, Id: isEditing ? text.Id : newId }; //takes properties of text object, overriding id prop with newId. if the form in editing mode it keeps the current id or assign a newId.

    const updatedValues = isEditing
      ? value.map((item, index) => (index === editIndex ? newValue : item)) //isEditing is true, map the array  and if the index is equal to editIndex, then it returns the new value which contains the edited form data, else it returns the item
      : [...value, newValue]; //if form is not in editing mode, creates new array by adding newValue to the end of the existing form

    setValue(updatedValues);
    setIsEditing(false);
    setEditIndex(null);
    clearForm();
  };

  const clearForm = () => {
    setText({
      Id: null,
      FName: "",
      LName: "",
      Email: "",
      Password: "",
      Mobile: "",
      Address: "",
      Age: "",
    });
  };

  const validateForm = () => {
    const { FName, LName, Email, Password, Mobile, Address, Age } = text;

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{0,3}$/;
    const mobileRegex = /^[0-9]{10}$/;
    if (!FName) {
      newErrors.FName = "First Name is required";
    }
    if (!LName) {
      newErrors.LName = "Last Name is required";
    }
    if (!emailRegex.test(Email)) {
      newErrors.Email = "Enter a valid Email";
    }
    if (!Password) {
      newErrors.Password = "Password is required";
    }
    if (!mobileRegex.test(Mobile)) {
      newErrors.Mobile = "Mobile Number should be length of 10";
    }
    if (!Address) {
      newErrors.Address = "Address is required";
    }
    if (!Age) {
      newErrors.Age = "Age is required";
    }
    return newErrors;
  };

  const handleEdit = (index) => {
    setText(value[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedValues = value.filter((e, i) => i !== index);
    setValue(updatedValues);
  };

  // const handleChangeEye = () => {
  //   setPassword(!password);
  // };

  return (
    <div className="myForm">
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:{" "}
          <input
            type="text"
            value={text.FName}
            onChange={(e) => setText({ ...text, FName: e.target.value })}
          />
          {errors && <span className="err">{errors.FName}</span>}
        </label>{" "}
        <br />
        <label>
          Last Name:{" "}
          <input
            type="text"
            value={text.LName}
            onChange={(e) => setText({ ...text, LName: e.target.value })}
          />
          {errors && <span className="err">{errors.LName}</span>}
        </label>{" "}
        <br />
        <label>
          Email:{" "}
          <input
            type="email"
            value={text.Email}
            onChange={(e) => setText({ ...text, Email: e.target.value })}
          />
          {errors && <span className="err">{errors.Email}</span>}
        </label>{" "}
        <br />
        <label>
          Password:{" "}
          <input
            type={password ? "text" : "password"}
            value={text.Password}
            onChange={(e) => setText({ ...text, Password: e.target.value })}
          />
          {/* <FontAwesomeIcon
            icon={password ? faEye : faEyeSlash}
            className="passwordIcon"
            onClick={handleChangeEye}
          /> */}
          {errors && <span className="err">{errors.Password}</span>}
        </label>{" "}
        <br />
        <label>
          Mobile:{" "}
          <input
            type="text"
            value={text.Mobile}
            onChange={(e) => setText({ ...text, Mobile: e.target.value })}
          />
          {errors && <span className="err">{errors.Mobile}</span>}
        </label>{" "}
        <br />
        <label>
          Address:{" "}
          <input
            type="text"
            value={text.Address}
            onChange={(e) => setText({ ...text, Address: e.target.value })}
          />
          {errors && <span className="err">{errors.Address}</span>}
        </label>{" "}
        <br />
        <label>
          Age:{" "}
          <input
            type="text"
            value={text.Age}
            onChange={(e) => setText({ ...text, Age: e.target.value })}
          />
          {errors && <span className="err">{errors.Age}</span>}
        </label>{" "}
        <br />
        <button type="submit">{isEditing ? "Save" : "Submit"}</button>
      </form>

      <MyTable
        data={value}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <h1>Total Number of data: {value.length}</h1>
    </div>
  );
};

export { MyForm };

//show and hide password onclick eye icon
