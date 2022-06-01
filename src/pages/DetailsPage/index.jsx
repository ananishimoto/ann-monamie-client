import React from "react";
import NavBar from "../../components/NavBar";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import PatternCard from "../../components/PatternCard";
import { useSelector } from "react-redux";
import { selectProjects } from "../../store/project/selectors";

export default function DetailsPage() {
  const projects = useSelector(selectProjects);
  console.log("this is the details page", projects);

  return (
    <Grid>
      <NavBar />
      <NavLink to="/projects">
        <Button color="secondary" variant="contained">
          Back to your projects
        </Button>
      </NavLink>
      <Grid>
        <PatternCard />
      </Grid>
    </Grid>
  );
}
