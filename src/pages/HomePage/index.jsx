import React from "react";
import { createTheme, Grid, Paper, Typography } from "@mui/material";
import Image from "../../images/handsImage.jpg";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const style = {
    display: "flex",
    flexDirection: "column",
    padding: 50,
    alignItems: "center",
    justify: "center",
    justifyContent: "center",
  };

  const titleStyle = createTheme({
    typography: {
      fontFamily: ["Water Brush"],
    },
  });

  // const subTitleStyle = {
  //   fontSize: 25,
  //   color: "#AA336A",
  // };

  // const buttonStyle = {
  //   size: "large",
  //   color: "#C50743",
  // };

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

  return (
    <Grid>
      <Paper style={backgroundStyle.paperContainer}>
        <Grid style={style} container>
          <ThemeProvider theme={titleStyle}>
            <Typography variant="h2" color="#ae7d73">
              {" "}
              Ann Monamie{" "}
            </Typography>
          </ThemeProvider>
          <Button
            onClick={() => navigate("/auth/signup")}
            sx={{
              backgroundColor: "#ae7d73",
              "&:hover": {
                backgroundColor: "#8a564c",
              },
            }}
            variant="contained"
          >
            Sign up for free
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}
