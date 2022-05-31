import React from "react";
import NavBar from "../../components/NavBar";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const loginBackgroundStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };

  return (
    <Grid>
      <NavBar />
      <Paper elevation={5} style={loginBackgroundStyle}>
        <Grid align="center">
          <Avatar>
            <LoginSharpIcon />
          </Avatar>
          <h1>Log in</h1>
        </Grid>
        <TextField
          id="emailInput"
          label="E-mail"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          id="passwordInput"
          label="Password"
          variant="standard"
          type="password"
          fullWidth
          required
        />
        <Button type="submit" color="secondary" variant="contained" fullWidth>
          Log In
        </Button>
        <Typography>Don't have an account?</Typography>
        <NavLink to="/user/new">Sign up</NavLink>
      </Paper>
    </Grid>
  );
}
