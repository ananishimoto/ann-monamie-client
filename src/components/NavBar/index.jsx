import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { Button, Typography } from "@mui/material";

export default function NavBar() {
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div className="Navbar">
      <AppBar sx={{ bgcolor: "#ae7d73" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>Ann Monamie</Typography>
          </NavLink>
          {token && (
            <div>
              <NavLink to="/projects" style={{ color: "white" }}>
                Your Projects
              </NavLink>
              <NavLink to="/projects/new" style={{ color: "white" }}>
                Create a new project
              </NavLink>
            </div>
          )}
          {loginLogoutControls}
        </Toolbar>
      </AppBar>
    </div>
  );
}
