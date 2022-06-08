import { apiUrl } from "../../config/constants";
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import PatternCard from "../../components/PatternCard";
import { useDispatch, useSelector } from "react-redux";
import { selectDetails } from "../../store/project/selectors";
import { fetchProjectDetails } from "../../store/project/actions";
import Image from "../../images/watercolorBG.jpg";
import { deleteProjectById } from "../../store/project/actions";
import { useNavigate } from "react-router-dom";
import Timer from "../../components/Timer";
import { getProjectDetails } from "../../store/project/actions";
import { selectToken } from "../../store/user/selectors";

export default function DetailsPage() {
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

  const token = useSelector(selectToken);
  const details = useSelector(selectDetails);
  console.log(details);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(fetchProjectDetails(id));
    } else {
      dispatch(getProjectDetails(id));
    }
  }, [dispatch, token, id]);

  const handleDelete = () => {
    dispatch(deleteProjectById(id));
    navigate("/projects");
  };

  if (details === null) {
    return <p>loading..</p>;
  }
  return (
    <Grid>
      <Paper style={backgroundStyle.paperContainer}>
        {token && (
          <NavLink to="/projects">
            <Button
              sx={{
                backgroundColor: "#ae7d73",
                "&:hover": {
                  backgroundColor: "#8a564c",
                },
              }}
              variant="contained"
            >
              Back to your projects
            </Button>
          </NavLink>
        )}
        {token === null && (
          <NavLink to="/inspiration">
            <Button
              sx={{
                backgroundColor: "#ae7d73",
                "&:hover": {
                  backgroundColor: "#8a564c",
                },
              }}
              variant="contained"
            >
              Back to all the inspirations
            </Button>
          </NavLink>
        )}
        <Grid>
          {details.map((project) => (
            <PatternCard
              key={project.id}
              id={project.id}
              name={project.name}
              pattern={project.pattern}
              image={project.image}
              materials={project.materials}
              tools={project.tools}
            />
          ))}
        </Grid>
        {token && (
          <>
            <Timer />
            <Button
              onClick={() => handleDelete()}
              sx={{
                backgroundColor: "#ae7d73",
                "&:hover": {
                  backgroundColor: "#8a564c",
                },
              }}
              variant="contained"
            >
              Delete this project 😞
            </Button>
          </>
        )}
      </Paper>
    </Grid>
  );
}
