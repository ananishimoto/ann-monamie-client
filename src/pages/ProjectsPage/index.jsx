import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../../components/ProjectCard";
import { fetchProjects } from "../../store/project/actions";
import { selectProjects } from "../../store/project/selectors";
import Image from "../../images/watercolorBG.jpg";
import { resetDetails } from "../../store/project/slice";

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);

  const backgroundStyle = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
  };

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(resetDetails());
  }, [dispatch]);

  if (projects === null) {
    return <h3>Just a moment...</h3>;
  }

  return (
    <Grid>
      <Paper style={backgroundStyle.paperContainer}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#ae7d73", p: 4, fontWeight: "bold" }}
        >
          Your projects
        </Typography>
        <ProjectCard projects={projects} />
      </Paper>
    </Grid>
  );
}
