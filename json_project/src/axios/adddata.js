import React, { useEffect, useState } from "react";
import { MyAPI } from "./axiosAPI";
import { ToastContainer, toast } from "react-toastify"; //in react only use this 2
import "react-toastify/dist/ReactToastify.css";

// import { ToastContainer, toast } from "material-react-toastify"; //if using material ui library use this 
// import "material-react-toastify/dist/ReactToastify.css";
import { Button, TextField, Container, Box } from "@mui/material";
// import Header from "./header";



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
        const userResponseUpdate = await MyAPI.put(`/${addData.id}`, {
          id: addData.id,
          name: addData.name,
          email: addData.email,
        });
        if (userResponseUpdate.status) {
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
            theme: "dark",
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
          theme: "dark",
        });
      }
    } else {
      try {
        const responseAdd = await MyAPI.get("/");
        const userResponseAdd = responseAdd.data;
        const maxId = userResponseAdd.reduce(
          (max, user) => Math.max(max, user.id),
          0
        );
        const nextId = maxId + 1;

        const userResponse = await MyAPI.post("/", {
          id: nextId.toString(),
          name: addData.name,
          email: addData.email,
        });

        if (userResponse.status) {
          toast.success("Registration successfully", {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setAddData({ id: "", name: "", email: "" });
          onUserChange();
        } else {
          toast.error("Registration failed", {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
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
          theme: "dark",
        });
      }
    }
  };

  const FormValidation = () => {
    const { name, email } = addData;
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{0,3}$/;
    if (!name) {
      newErrors.name = "First Name is required";
    }
    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid Email";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setAddData({ ...addData, [e.target.name]: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <Container className="mt-4">
      {/* <Header/> */}
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
        theme="dark"
      />
      {/* <ToastContainer/> */}
      <form onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
        <Box mb={3} autoComplete = "off">
          <TextField
            // id="outlined"
            label="Name"
            placeholder="Enter Name"
            name="name"
            // multiline
            fullWidth
            value={addData.name}
            onChange={handleChange}
            error={!errors.name === ""}
            helperText={errors.name}

          />
        </Box>
        <Box mb={3}>
          <TextField
            id="outlined"
            label="Email"
            placeholder="Enter Email"
            name="email"
            // multiline
            fullWidth
            value={addData.email}
            onChange={handleChange}
            error={!errors.email === ""}
            helperText={errors.email}
          />
        </Box>
        <Box mb={3}>
          <Button type="submit" variant="contained" color="primary">
            {isEditing ? "Update" : "Add"}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export { AddUsersData };
