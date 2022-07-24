import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

export default function NavBar() {
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <AppBar sx={{ bgcolor: "#ae7d73" }} position="sticky">
          <Toolbar>
            <Box
              sx={{
                margin: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Typography>Ann Monamie</Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
              }}
            >
              <Box sx={{ margin: 2 }}>
                <Link
                  to="/inspiration"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Typography>Some inspiration ☁️</Typography>
                </Link>
              </Box>
              {token && (
                <>
                  <Box sx={{ margin: 2 }}>
                    <Link
                      to="/projects"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Your Projects 🧶
                    </Link>
                  </Box>
                  <Box sx={{ margin: 2 }}>
                    <Link
                      to="/projects/new"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Create a new project 📓
                    </Link>
                  </Box>
                </>
              )}
            </Box>
            {loginLogoutControls}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
