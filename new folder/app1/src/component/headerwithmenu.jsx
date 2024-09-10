// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import Container from "@mui/material/Container";
// import Modal from "@mui/material/Modal";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import PersonalDetails from "./details";
// import Divider from "@mui/material/Divider";
// import MenuItem from "@mui/material/MenuItem";

// const pages = ["Travel", "Expense", "Help"];

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "60%",
//   height: "600px",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 1,
// };

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [arrowDown, setArrowDown] = React.useState(true);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//     setArrowDown(!arrowDown);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//     setArrowDown(true);
//   };

//   return (
//     <AppBar sx={{ background: "sky" }}>
//       <Container maxWidth="x">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               mb: 1,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 500,
//               color: "inherit",
//               textDecoration: "none",
//               fontSize: "22px",
//             }}
//           >
//             go
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 500,
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             go
//           </Typography>

//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//               justifyContent: "end",
//             }}
//           >
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 sx={{
//                   my: 2,
//                   color: "white",
//                   display: "block",
//                   textTransform: "inherit",
//                 }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
//             <Tooltip sx={{ width: "400px" }}>
//               <IconButton sx={{ p: 0 }}>
//                 <Avatar
//                   alt="user name"
//                   src="https://images.unsplash.com/photo-1721548902888-36f759c71727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
//                 />
//               </IconButton>
//             </Tooltip>
//             <IconButton
//               sx={{ p: 0, color: "white", cursor: "pointer" }}
//               onClick={handleOpenUserMenu}
//             >
//               {arrowDown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </IconButton>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               <Box sx={{ margin: "5px" }}>
//                 <Box sx={{ display: "flex" }}>
//                   <Avatar
//                     sx={{ height: "60px", width: "60px" }}
//                     alt="user image"
//                     src="https://images.unsplash.com/photo-1721548902888-36f759c71727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
//                   />
//                   <Box sx={{ marginLeft: "10px", marginTop: "10px" }}>
//                     <Typography variant="body2">
//                       <b>User Name</b>
//                     </Typography>
//                     <Typography variant="body2">
//                       <b>Lorem ipsum dolor sit amet.</b>
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <Box sx={{ marginTop: "10px" }}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       background: "#89CFF0",
//                       textTransform: "inherit",
//                       "&:hover": { background: "#89CFF0" },
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         color: "#0F52BA",
//                         fontWeight: 500,
//                         fontSize: "15px",
//                       }}
//                     >
//                       Switch to Administration
//                     </Typography>
//                   </Button>
//                 </Box>
//                 <Divider sx={{ padding: "5px" }} />
//                 <Box sx={{ marginTop: "10px" }}>
//                   <Typography
//                     variant="body"
//                     sx={{ cursor: "pointer" }}
//                     onClick={handleOpen}
//                   >
//                     My Profile
//                   </Typography>
//                   <Typography>User</Typography>
//                 </Box>
//               </Box>
//             </Menu>
//             <Modal
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="modal-modal-title"
//               aria-describedby="modal-modal-description"
//             >
//               <Box sx={style}>
//                 <PersonalDetails onClose={handleClose} />
//               </Box>
//             </Modal>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Header;
