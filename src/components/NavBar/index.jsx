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
      <AppBar color="secondary" position="sticky">
        <Toolbar>
          <NavLink to="/">
            <Typography>Ann Monamie</Typography>
          </NavLink>
          {token && (
            <div>
              <Button>
                <NavLink to="/projects">Your Projects</NavLink>
              </Button>
              <Button>
                <NavLink to="/project/new">Create a new project</NavLink>
              </Button>
            </div>
          )}
          {loginLogoutControls}
        </Toolbar>
      </AppBar>
    </div>
  );
}
