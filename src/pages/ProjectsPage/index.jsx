import { Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import NavBar from "../../components/NavBar";
import ProjectCard from "../../components/ProjectCard";
import { fetchProjects } from "../../store/project/actions";
import { selectProjects } from "../../store/project/selectors";
import Image from "../../images/watercolorBG.jpg";

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  // console.log("do I have projects?", projects);

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

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (projects === null) {
    return <h2>Loading</h2>;
  }

  return (
    <Grid>
      <Paper style={backgroundStyle.paperContainer}>
        <NavBar />
        <ProjectCard projects={projects} />
      </Paper>
    </Grid>
  );
}

// {
//   "WIP": [],
//   "Finished": [],
//   "wishlist": []
// }
