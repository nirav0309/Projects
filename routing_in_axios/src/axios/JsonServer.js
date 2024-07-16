// import React, { useEffect, useState } from "react";
// import { AddUsersData } from "./adddata";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import axios from "axios";
// import { MyAPI } from "./axiosAPI";

// const JsonServerComponentAxios = () => {
//   const [data, setData] = useState([]);
//   const [userToEdit, setUserToEdit] = useState(null);

//   const fetchData = async () => {
//     const response = await MyAPI.get("/");
//     // const responseData = await response.data;
//     setData(response.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const userDelete = await MyAPI.delete(`/${id}`);
//       fetchData();
//       if (!userDelete.status) {
//         throw new Error(`HTTP error! status: ${userDelete.status}`);
//       }
//       console.log("Delete successful");
//       //   setData(data.filter((user) => user.id !== id));
//     } catch (error) {
//       console.log("Error occurred", error);
//     }
//   };

//   const handleEdit = (element) => {
//     setUserToEdit(element);
//   };

//   return (
//     <div className="container mt-5">
//       <AddUsersData onUserChange={fetchData} userToEdit={userToEdit} />
//       <div className="table-responsive">
//         <table className="table table-striped table-bordered text-center table-hover">
//           <thead className="table-dark">
//             <tr>
//               {/* <th>Id</th> */}
//               <th>Name</th>
//               <th>Email</th>
//               <th colSpan={2}>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((element, index) => {
//               return (
//                 <tr key={index}>
//                   {/* <td>{element.id}</td> */}
//                   <td>{element.name}</td>
//                   <td>{element.email}</td>
//                   <td>
//                     <button
//                       className="btn btn-warning me-2"
//                       onClick={() => handleEdit(element)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => handleDelete(element.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export { JsonServerComponentAxios };

//using material ui
import React, { useEffect, useState } from "react";
import { AddUsersData } from "./adddata";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyAPI } from "./axiosAPI";
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

const JsonServerComponentAxios = () => {
  const [data, setData] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const value = "xyzzz"
  const fetchData = async () => {
    const response = await MyAPI.get("/", {
      method: "get",
      header: {
        // "Content-Type": "application/json",
        "Authorization": `${value}`,
      },
    });

    setData(response.data);
  };

  console.log(data);

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
      <AddUsersData onUserChange={fetchData} userToEdit={userToEdit} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
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
              <StyledTableRow key={index} hover sx={{ cursor: "pointer" }}>
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

export { JsonServerComponentAxios };
