import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { Typography, Link, Box } from "@mui/material";

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
            {/* <Box sx={{ flexDirection: "row", justifyContent: "space-around" }}> */}
            <Box
              sx={{
                margin: 2,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Link href="/" underline="none" color="white">
                <Typography>Ann Monamie</Typography>
              </Link>
            </Box>
            {token && (
              <>
                <Box sx={{ margin: 2 }}>
                  <Link href="/projects" underline="none" color="white">
                    Your Projects
                  </Link>
                </Box>
                <Box sx={{ margin: 2 }}>
                  <Link href="/projects/new" underline="none" color="white">
                    Create a new project
                  </Link>
                </Box>
              </>
            )}
            {loginLogoutControls}
            {/* </Box> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
