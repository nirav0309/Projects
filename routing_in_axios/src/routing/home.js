import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyAPI } from "./axiosapi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const fetchData = async () => {
    const response = await MyAPI.get("/");
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const userDelete = await MyAPI.delete(`/${id}`);
      fetchData();
      if (!userDelete.status) {
        toast.success("Delete Successfully", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        throw new Error(`HTTP error! status: ${userDelete.status}`);
      } else {
        toast.error("Delete failed", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      console.log("Delete successful");
    } catch (error) {
      console.log("Error occurred", error);
    }
  };

  const handleEdit = (element) => {
    setUserToEdit(element);
  };

  //this is for table and its thead and tbody
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className="container mt-5">
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
      {/* <Link to="/adddatarouting">Add Data</Link> */}
      <Link to='/adddatarouting'></Link>
      {/* <AddUsersData onUserChange={fetchData} userToEdit={userToEdit} /> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600, border: 0.1 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell colSpan={2} align="center">
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((element, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{element.name}</StyledTableCell>
                <StyledTableCell>{element.email}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    className="mr-1"
                    variant="contained"
                    color="warning"
                    onClick={() => handleEdit(element)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(element.id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export { Homepage };

// import { Button } from "bootstrap";

// // import Header from "./header"

// const HomePage = () => {
//     const [addData, setAddData] = useState([]);
//     const [isEditing, setIsEditing] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   const handleChange = (e) => {
//     setAddData({ ...setAddData, [e.target.name]: e.target.value });
//   };
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//     }
//   };
//   return (
//     <div>
//       {/* <Header/> */}
//       <h1 style={{ textAlign: "center", marginTop: "20px" }}>
//         {" "}
//         Welcome to my website!
//       </h1>
//       <Container className="mt-4">
//         {/* <Header/> */}
//         {/* <ToastContainer
//             position="top-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           /> */}

//         <form onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
//           <Box mb={3} autoComplete="off">
//             <TextField
//               id="outlined"
//               label="Name"
//               placeholder="Enter Name"
//               name="name"
//               multiline
//               fullWidth
//               value={addData.name}
//               onChange={handleChange}
//             //   error={!errors.name === ""}
//             //   helperText={errors.name}
//             />
//           </Box>
//           <Box mb={3}>
//             <TextField
//               id="outlined"
//               label="Email"
//               placeholder="Enter Email"
//               name="email"
//               multiline
//               fullWidth
//               value={addData.email}
//               onChange={handleChange}
//             //   error={!errors.email === ""}
//             //   helperText={errors.email}
//             />
//           </Box>
//           <Box mb={3}>
//             <Button type="submit" variant="contained" color="primary">
//               {isEditing ? "Update" : "Add"}
//             </Button>
//           </Box>
//         </form>
//       </Container>
//     </div>
//   );
// };

// export { HomePage };
