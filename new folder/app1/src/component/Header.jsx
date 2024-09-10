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
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Transaction from "./transaction";

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
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-dot": {
      borderRadius: 4,
      height: 9,
      minWidth: 9,
      border: "1px solid white",
    },
  }));

  return (
    <AppBar sx={{ background: "sky", height: "65px" }}>
      <Container maxWidth="x">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              mb: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
              fontSize: "26px",
            }}
          >
            go
          </Typography>

          <Typography
            variant="h5"
            noWrap
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
              gap: "17px",
              marginRight: "15px",
            }}
          >
            <Button sx={{ color: "white", textTransform: "inherit" }}>
              {"Travel"}
            </Button>
            <Button sx={{ color: "white", textTransform: "inherit" }}>
              {"Expense"}
            </Button>
            <Button sx={{ color: "white", textTransform: "inherit" }}>
              {"Help"}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Tooltip>
              <IconButton sx={{ p: 0 }}>
                <StyledBadge
                  color="primary"
                  overlap="circular"
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar alt="user name" src="" />
                </StyledBadge>
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
                    src=""
                  />
                  <Box sx={{ marginLeft: "10px", marginTop: "10px" }}>
                    <Typography variant="body2">
                      <b>User Name</b>
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Lorem ipsum dolor sit amet.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "#C8E9FF",
                      textTransform: "inherit",
                      "&:hover": { background: "#C8E9FF" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#0069BF",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      Switch to Administration
                    </Typography>
                  </Button>
                  <Divider sx={{ padding: "10px" }} />
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <Typography
                    variant="body1"
                    sx={{ cursor: "pointer" }}
                    onClick={handleOpen}
                  >
                    My Profile
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: "10px" }}>
                    User
                  </Typography>
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
      {/* <Transaction /> */}
    </AppBar>
  );
}

export default Header;
