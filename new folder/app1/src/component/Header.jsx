// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "../store/counterSlice";
// import { API } from "./api";

// const Header = () => {
//   const count = useSelector((state) => state.counter.value);
//   console.log(count);
//   const dispatch = useDispatch();

//   const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const response = await axios.get(
//   //       "https://finalspaceapi.com/api/v0/character/?limit=2"
//   //     );
//   //     setData(response.data);
//   //     console.log("data>>>>>>", response.data);
//   //   };

//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await API.get("/")
//       setData(response.data);
//       console.log("data>>>>>>", response.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h3>Header component</h3>
//       <h3>Count: {count}</h3>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>

//       <h3>User Data {data.length}</h3>
//       <ul>
//         {data.map((user, index) => (
//           <li key={index}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Header;

//header mui
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonalDetails from "./details";
import Divider from "@mui/material/Divider";

const pages = ["Travel", "Expense", "Help"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  height: "580px",
  bgcolor: "background.paper",
  boxShadow: 24,
};

function Header() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [arrowDown, setArrowDown] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setArrowDown(!arrowDown);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setArrowDown(true);
  };

  return (
    <AppBar sx={{ background: "sky" }}>
      <Container maxWidth="x">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              mb: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
              fontSize: "22px",
            }}
          >
            go
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            go
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  // "&:hover": { background: "#012169" },
                  textTransform: "inherit",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Tooltip sx={{ width: "400px" }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="user name"
                  src="https://images.unsplash.com/photo-1721548902888-36f759c71727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
                />
              </IconButton>
            </Tooltip>
            <IconButton
              sx={{ p: 0, color: "white", cursor: "pointer" }}
              onClick={handleOpenUserMenu}
            >
              {arrowDown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box sx={{ margin: "5px" }}>
                <Box sx={{ display: "flex" }}>
                  <Avatar
                    sx={{ height: "60px", width: "60px" }}
                    alt="user image"
                    src="https://images.unsplash.com/photo-1721548902888-36f759c71727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
                  />
                  <Box sx={{ marginLeft: "10px", marginTop: "10px" }}>
                    <Typography variant="body2">
                      <b>User Name</b>
                    </Typography>
                    <Typography variant="body2">
                      <b>Lorem ipsum dolor sit amet.</b>
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "#89CFF0",
                      textTransform: "inherit",
                      "&:hover": { background: "#89CFF0" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#0F52BA",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      Switch to Administration
                    </Typography>
                  </Button>
                </Box>
                <Divider sx={{ padding: "5px" }} />
                <Box sx={{ marginTop: "10px" }}>
                  <Typography
                    variant="body"
                    sx={{ cursor: "pointer" }}
                    onClick={handleOpen}
                  >
                    My Profile
                  </Typography>
                  <Typography>User</Typography>
                </Box>
              </Box>
            </Menu>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <PersonalDetails onClose={handleClose} />
              </Box>
            </Modal>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
