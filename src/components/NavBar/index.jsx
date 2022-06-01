import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

export default function NavBar() {
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div className="Navbar">
      <AppBar color="secondary" position="sticky">
        <Toolbar>
          <ul>
            <li>
              <NavLink to="/">Ann Monamie</NavLink>
            </li>
            {token && (
              <div>
                <li>
                  <NavLink to="/projects">Your Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/project/new">Create a new project</NavLink>
                </li>
              </div>
            )}
            {loginLogoutControls}
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}
