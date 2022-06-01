import React from "react";
import { Grid, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function ProjectCard(props) {
  const mainGrid = {
    display: "flex",
    flexWrap: "wrap",
  };

  const cardBackgroundStyle = {
    padding: 20,
    height: 100,
    width: 400,
    margin: "20px auto",
  };

  console.log("Card", Object.keys(props.projects));

  return (
    <Grid style={mainGrid}>
      {Object.keys(props.projects).map((status) => (
        <Grid key={status}>
          <h2>{status}</h2>
          {props.projects[status].map((project) => (
            <Grid key={project.id}>
              <Paper elevation={5} style={cardBackgroundStyle}>
                <Grid>
                  <NavLink to={`/project/${project.id}`}>
                    <p>{project.name}</p>
                  </NavLink>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
