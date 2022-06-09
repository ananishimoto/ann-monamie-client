import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

export default function ProjectCard(props) {
  const mainGrid = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const cardBackgroundStyle = {
    padding: 20,
    width: 500,
    margin: "20px",
    color: "black",
    borderRadius: 25,
  };

  const imageStyle = {
    borderRadius: 25,
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
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <FavoriteRoundedIcon sx={{ color: "#f6c795" }} />
                    <NavLink to={`/projects/${project.id}`}>
                      <p>{project.name}</p>
                    </NavLink>
                    <MoreHorizRoundedIcon sx={{ color: "#f6c795" }} />
                  </Box>
                  <br />
                  <img
                    src={project.image}
                    alt={project.name}
                    height="350"
                    style={imageStyle}
                  />
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
