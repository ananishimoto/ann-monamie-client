import React from "react";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function ProjectCard(props) {
  console.log("Card", Object.keys(props.projects));
  return (
    <div>
      {Object.keys(props.projects).map((status) => (
        <div key={status}>
          <h2>{status}</h2>
          {props.projects[status].map((project) => (
            <Grid key={project.id}>
              <Grid>
                <NavLink to={`/project/${project.id}`}>
                  <p>{project.name}</p>
                </NavLink>
              </Grid>
            </Grid>
          ))}
        </div>
      ))}
    </div>
  );
}
