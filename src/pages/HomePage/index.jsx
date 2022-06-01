import React from "react";
import NavBar from "../../components/NavBar";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Image from "../../images/HomepageBG.jpg";
import { NavLink } from "react-router-dom";

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

  const titleStyle = {
    fontSize: 60,
    color: "#581845",
  };

  const subTitleStyle = {
    fontSize: 25,
    color: "#AA336A",
  };

  const buttonStyle = {
    size: "large",
    color: "#C50743",
  };

  const backgroundStyle = {
    paperContainer: {
      height: 1000,
      backgroundImage: `url(${Image})`,
    },
  };

  return (
    <Grid>
      <Paper style={backgroundStyle.paperContainer}>
        <NavBar />
        <Grid style={style} container>
          <Typography style={titleStyle} component="h1">
            {" "}
            ANN MONAMIE{" "}
          </Typography>
          <Typography style={subTitleStyle} component="h3">
            {" "}
            The plataform to keep your projects organized
          </Typography>
          <Grid flexDirection="column">
            <Button style={buttonStyle} variant="outlined">
              <NavLink to={"/auth/signup"}>Sign Up now!</NavLink>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
