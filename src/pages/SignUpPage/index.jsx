import React from "react";
import NavBar from "../../components/NavBar";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const signUpBackgroundStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };

  return (
    <Grid>
      <NavBar />
      <Paper elevation={5} style={signUpBackgroundStyle}>
        <Grid align="center">
          <Avatar>
            <AddCircleOutlineSharpIcon />
          </Avatar>
          <h1>Create new account</h1>
          <Typography>Already registered?</Typography>
          <NavLink to="/user/login">Login</NavLink>
        </Grid>
        <TextField
          id="nameInput"
          label="Name"
          variant="standard"
          fullWidth
          required
        />
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
          Sign Up
        </Button>
      </Paper>
    </Grid>
  );
}
