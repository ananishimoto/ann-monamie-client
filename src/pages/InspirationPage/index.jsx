import { Grid, Paper, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Image from "../../images/watercolorBG.jpg";
import { fetchInspirationProjects } from "../../store/project/actions";
import { inspirationProjects } from "../../store/project/selectors";
import { selectToken } from "../../store/user/selectors";

export default function InspirationPage() {
  const dispatch = useDispatch();
  const projects = useSelector(inspirationProjects);
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  console.log("Token inspiration", token);

  const backgroundStyle = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
  };

  const cardBackgroundStyle = {
    padding: 20,
    width: 500,
    margin: "20px",
  };

  useEffect(() => {
    dispatch(fetchInspirationProjects());
  }, [dispatch]);

  if (inspirationProjects === null) {
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
          Check some of our projects!
        </Typography>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {projects.map((project) => (
            <Grid key={project.id}>
              <Paper elevation={1} style={cardBackgroundStyle}>
                <Grid align="center">
                  <NavLink to={`/inspiration/${project.id}`}>
                    <Typography variant="h6" sx={{ color: "#8a564c" }}>
                      {project.name}
                    </Typography>
                  </NavLink>
                  <br />
                  <img src={project.image} alt={project.name} height="350" />
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
        {!token && (
          <Grid textAlign="center">
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "#6e8879", p: 2 }}
            >
              Want to see more? 🤔
            </Typography>
            <Button
              onClick={() => navigate("/auth/signup")}
              sx={{
                backgroundColor: "#ae7d73",
                "&:hover": {
                  backgroundColor: "#8a564c",
                },
                mb: 5,
              }}
              variant="contained"
            >
              Sign up for free
            </Button>
          </Grid>
        )}
      </Paper>
    </Grid>
  );
}
