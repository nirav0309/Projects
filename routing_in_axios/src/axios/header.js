import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

function Header() {
  return (
    <AppBar position="fixed" color="primary" elevation={4}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src=""
              alt="logo "
              style={{ width: 140, height: "auto", cursor: "pointer" }}
            />
            <Box sx={{ display: "flex", ml: 2 }}>
              {["Features", "Testimonials", "Highlights", "Pricing", "FAQ"].map(
                (text) => (
                  <MenuItem key={text}>
                    <Typography variant="body2">{text}</Typography>
                  </MenuItem>
                )
              )}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="button to toggle theme" color="primary">
              {/* <ModeNightRoundedIcon /> */}
              <ModeNightRoundedIcon />
              {/* <ModeNightIcon/> */}
            </IconButton>
            <Button
              href="/material-ui/getting-started/templates/sign-in/"
              target="_blank"
              variant="text"
              color="primary"
              size="small"
            >
              Sign in
            </Button>
            <Button
              href="/material-ui/getting-started/templates/sign-up/"
              target="_blank"
              variant="contained"
              color="primary"
              size="small"
              sx={{ ml: 1 }}
            >
              Sign up
            </Button>
          </Box>
          <Box>
            <IconButton aria-label="menu" color="primary">
              {/* <MenuIcon /> */}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
