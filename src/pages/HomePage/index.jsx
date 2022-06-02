import React from "react";
import NavBar from "../../components/NavBar";
import { createTheme, Grid, Paper, Typography } from "@mui/material";
import Image from "../../images/handsImage.jpg";
// import { NavLink } from "react-router-dom";
// import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/system";

export default function HomePage() {
  const style = {
    display: "flex",
    flexDirection: "column",
    margin: 20,
    padding: 20,
    alignItems: "center",
    justify: "center",
    justifyContent: "center",
  };

  const titleStyle = createTheme({
    typography: {
      fontFamily: ["Water Brush"],
    },
  });

  // const subTitleStyle = {
  //   fontSize: 25,
  //   color: "#AA336A",
  // };

  // const buttonStyle = {
  //   size: "large",
  //   color: "#C50743",
  // };

  const backgroundStyle = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    },
  };

  return (
    <Grid>
      <Paper style={backgroundStyle.paperContainer}>
        <NavBar />
        <Grid style={style} container>
          <ThemeProvider theme={titleStyle}>
            <Typography variant="h2" color="#ae7d73">
              {" "}
              Ann Monamie{" "}
            </Typography>
          </ThemeProvider>
          {/* <Typography style={subTitleStyle} component="h3">
            {" "}
            The plataform to keep your projects organized
          </Typography>
          <Grid flexDirection="column">
            <Button style={buttonStyle} variant="outlined">
              <NavLink to={"/auth/signup"}>Sign Up now!</NavLink>
            </Button>
          </Grid> */}
        </Grid>
      </Paper>
    </Grid>
  );
}
