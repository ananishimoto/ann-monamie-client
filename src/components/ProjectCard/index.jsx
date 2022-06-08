import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function ProjectCard(props) {
  const mainGrid = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const cardBackgroundStyle = {
    padding: 20,
    // height: 100,
    width: 500,
    margin: "20px",
  };

  return (
    <Grid style={mainGrid}>
      {Object.keys(props.projects).map((status) => (
        <Grid key={status}>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "#6e8879", p: 1, fontWeight: "bold" }}
          >
            {status}
          </Typography>
          {props.projects[status].map((project) => (
            <Grid key={project.id}>
              <Paper elevation={1} style={cardBackgroundStyle}>
                <Grid align="center">
                  <NavLink to={`/projects/${project.id}`}>
                    <p>{project.name}</p>
                    <br />
                    <img src={project.image} alt={project.name} height="300" />
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
