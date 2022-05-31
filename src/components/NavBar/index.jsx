import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

export default function NavBar() {
  return (
    <div className="Navbar">
      <AppBar color="secondary" position="sticky">
        <Toolbar>
          <Typography> Ann Monamie</Typography>
          <Button color="inherit">
            <NavLink to="/projects">Your Projects</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/project/new">Create a new project</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/user/login">Login</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
