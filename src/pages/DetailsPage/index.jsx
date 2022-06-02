import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Button } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import PatternCard from "../../components/PatternCard";
import { useDispatch, useSelector } from "react-redux";
import { selectDetails } from "../../store/project/selectors";
import { fetchProjectDetails } from "../../store/project/actions";

export default function DetailsPage() {
  const details = useSelector(selectDetails);
  console.log("this is the details page", details);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectDetails(id));
  }, [dispatch]);

  if (details === null) {
    return <h2>Loading</h2>;
  }

  return (
    <Grid>
      <NavBar />
      <NavLink to="/projects">
        <Button color="secondary" variant="contained">
          Back to your projects
        </Button>
      </NavLink>
      <Grid>
        {details.map((project) => (
          <PatternCard
            key={project.id}
            id={project.id}
            name={project.name}
            pattern={project.pattern}
            image={project.image}
          />
        ))}
      </Grid>
    </Grid>
  );
}
