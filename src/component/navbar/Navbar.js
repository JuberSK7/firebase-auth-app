import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src="https://img.icons8.com/external-itim2101-flat-itim2101/2x/external-admin-network-technology-itim2101-flat-itim2101-2.png"
              alt="img"
              style={{ width: "50px" }}
            />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, paddingTop: "10px" }}
          >
            Admin Dashboard
          </Typography>
          <Link to={"/signin"} style={{ textDecorationLine: "none" }}>
            <Button
              sx={{
                backgroundImage:
                  "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)",
                boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px",
                color: "#ffffff",
                padding: "8px 18px",
                cursor: "pointer",
              }}
            >
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
