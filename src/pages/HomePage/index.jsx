import React from "react";
import NavBar from "../../components/NavBar";
import { Grid } from "@mui/material";

export default function HomePage() {
  const generalStyle = { align: "center", margin: 20, padding: 20 };

  return (
    <Grid>
      <NavBar />
      <Grid style={generalStyle}>
        <h2>The app to keep all your projects organized</h2>
        <p>This is only the main page. Need to log in to have more info</p>
        <h2>Maybe I can put an about us sector right below</h2>
      </Grid>
    </Grid>
  );
}
