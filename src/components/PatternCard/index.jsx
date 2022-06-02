import React from "react";
import { Grid } from "@mui/material";

export default function PatternCard(props) {
  return (
    <Grid container>
      <Grid item>
        <h1>{props.name}</h1>
        <img src={props.image} alt={props.name} width="500" />
      </Grid>
      <Grid item>
        <h2>Materials</h2>
        <p>Some text here</p>
        <h2>Pattern</h2>
        <p>{props.pattern}</p>
      </Grid>
    </Grid>
  );
}
