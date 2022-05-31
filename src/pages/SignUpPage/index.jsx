import React from "react";
import NavBar from "../../components/NavBar";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function SignUp() {
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
            <AddCircleOutlineSharpIcon />
          </Avatar>
          <h1>Create new account</h1>
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
          Create new account
        </Button>
        <Typography>Already have an account?</Typography>
        <NavLink to="/user/login">Log in</NavLink>
      </Paper>
    </Grid>
  );
}
