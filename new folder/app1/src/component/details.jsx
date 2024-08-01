import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import {
  AccountCircle,
  Flight,
  CreditCard,
  Group,
  Rotate90DegreesCcw,
} from "@mui/icons-material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

const createData = (label, value) => {
  return { label, value };
};
const rows = [
  createData("Cost Center", "8000004 - 8000004 IT - Education"),
  createData("Primary Email", "text1@gmail.com"),
  createData("Mobile Phone", 12121212),
  createData("Work Phone", 123456),
  createData("Home Phone", 123456),
  createData("Emergency Contact Name", "Name"),
  createData("Phone", 12345),
];
const PersonalDetails = ({ onClose }) => {
  //   const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={16}>
        <Grid xs={4} sx={{ background: "#041E42" }}>
          <Typography
            variant="h5"
            sx={{
              margin: "35px",
              fontFamily: "monospace",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: "30px",
              color: "white",
            }}
          >
            go EXPENSE
          </Typography>

          <Box sx={{ margin: "30px", marginTop: "90px", color: "white" }}>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                "&:hover": {
                  backgroundColor: "#012169",
                },
                cursor: "pointer",
              }}
            >
              <AccountCircle sx={{ color: "white" }} />
              <Typography sx={{ marginLeft: "5px" }}>Personal</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                "&:hover": {
                  backgroundColor: "#012169",
                },
                cursor: "pointer",
              }}
            >
              <Flight
                sx={{ color: "white", rotate: "30deg" }}
                orientation="horizontal"
              />
              <Typography sx={{ marginLeft: "5px" }}>Travel</Typography>
              {/* <IconButton onClick={() => setOpen(true)} >
                {open ? (
                  <ExpandLess sx={{ color: "white", marginLeft: "10px" }} />
                ) : (
                  <ExpandMore sx={{ color: "white", marginLeft: "10px" }} />
                )}
              </IconButton> */}
              <ExpandMore sx={{ color: "white", marginLeft: "60px" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                "&:hover": {
                  backgroundColor: "#012169",
                },
                cursor: "pointer",
              }}
            >
              <CreditCard sx={{ color: "white" }} />
              <Typography sx={{ marginLeft: "5px" }}>Card & Payment</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                "&:hover": {
                  backgroundColor: "#012169",
                },
                cursor: "pointer",
              }}
            >
              <Group sx={{ color: "white" }} />
              <Typography sx={{ marginLeft: "5px" }}>Delegates</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <Typography variant="h6">Personal Details</Typography>
            <Box>
              <Button
                onClick={onClose}
                sx={{
                  color: "black",
                  background: "white",
                  boxShadow: 1,
                  "&:hover": {
                    background: "white",
                  },
                }}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                Save
              </Button>
            </Box>
          </Box>

          <Box sx={{ width: "auto", background: "#dadada" }}>
            <Box sx={{ padding: "20px" }}>
              <Card sx={{ height: "auto", minWidth: 285 }}>
                <CardContent>
                  <Avatar
                    alt="image"
                    src="https://images.unsplash.com/photo-1721548902888-36f759c71727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
                    sx={{ height: "100px", width: "100px" }}
                  />
                  <Typography variant="body2" sx={{ fontSize: "20px" }}>
                    <b>Name</b>
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "15px" }}>
                    well meaning and kindly.
                  </Typography>
                  {/* <hr /> */}
                  <Divider sx={{ width: "100%", marginTop: "10px" }} />
                  <TableContainer sx={{ marginTop: "30px" }}>
                    <Table
                      aria-label="simple table"
                      sx={{ borderColor: "transparent" }}
                    >
                      <TableBody sx={{ borderColor: "transparent" }}>
                        {rows.map((row) => (
                          <TableRow
                            key={row.label}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{
                                paddingTop: "0px",
                                borderColor: "transparent",
                                color: "#6A6A6A",
                                // fontFamily: "Roboto",
                              }}
                            >
                              {row.label}
                            </TableCell>
                            <TableCell
                              align="left"
                              sx={{
                                paddingTop: "0px",
                                borderColor: "transparent",
                                // fontFamily: "Roboto",
                                fontWeight: "700",
                              }}
                            >
                              {row.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalDetails;
