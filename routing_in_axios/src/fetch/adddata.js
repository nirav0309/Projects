import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUsersData = ({ onUserChange, userToEdit }) => {
  const [addData, setAddData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (userToEdit) {
      setAddData(userToEdit);
      setIsEditing(true);
    } else {
      setAddData({ id: "", name: "", email: "" });
      setIsEditing(false);
    }
  }, [userToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = FormValidation();
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    if (isEditing) {
      try {
        const userResponseUpdate = await fetch(
          `http://localhost:3033/userData/${addData.id}`,
          {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: addData.id,
              name: addData.name,
              email: addData.email,
            }),
          }
        );
        if (userResponseUpdate.ok) {
          setAddData({ id: "", name: "", email: "" });
          setIsEditing(false);
          onUserChange();
           toast.success("Update successfully", {
             position: "top-right",
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
           });
        }
      } catch (error) {
        console.log("Error", error);
         toast.error("Update Failed", {
           position: "top-right",
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
         });
      }
    } else {
      try {
        const responseAdd = await fetch("http://localhost:3033/userData");
        const userResponseAdd = await responseAdd.json();
        const maxId = userResponseAdd.reduce(
          (max, user) => Math.max(max, user.id),
          0
        );
        const nextId = maxId + 1;
        const userResponse = await fetch("http://localhost:3033/userData", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: nextId.toString(),
            name: addData.name,
            email: addData.email,
          }),
        });
        if (userResponse.ok) {
          setAddData({ id: "", name: "", email: "" });
          onUserChange();
           toast.success("Registration successfully", {
             position: "top-right",
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
           });
        }
        else {
           toast.error("Registration Failed", {
             position: "top-right",
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
           });
        }
      } catch (err) {
        console.log("Error", err);
         toast.error("Internal Server Error", {
           position: "top-right",
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
         });
      }
    }
  };

  const handleChange = (e) => {
    setAddData({ ...addData, [e.target.name]: e.target.value });
  };

  const FormValidation = () => {
    const { name, email } = addData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{0,3}$/;
    const newErrors = {};
    if (!name) {
      newErrors.name = "First Name is Required";
    }
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid Email";
    }
    return newErrors;
  };

  return (
    <div className="container mt-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form onSubmit={handleSubmit} className="form">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            name="name"
            value={addData.name}
            onChange={handleChange}
          />
          {errors && <span className="err text-danger">{errors.name}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            name="email"
            value={addData.email}
            onChange={handleChange}
          />
          {errors && <span className="text-danger">{errors.email}</span>}
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export { AddUsersData };
