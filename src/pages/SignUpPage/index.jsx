import React from "react";
import NavBar from "../../components/NavBar";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { signUp } from "../../store/user/actions";

export default function SignUp() {
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(getName, getEmail, getPassword));

    console.log("clean form:");

    setName("");
    setEmail("");
    setPassword("");
  }

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
          <NavLink to="/auth/login">Login</NavLink>
        </Grid>
        <form onSubmit={submitForm}>
          <TextField
            id="nameInput"
            label="Name"
            variant="standard"
            fullWidth
            required
            value={getName}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="emailInput"
            label="E-mail"
            variant="standard"
            fullWidth
            required
            value={getEmail}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="passwordInput"
            label="Password"
            variant="standard"
            type="password"
            fullWidth
            required
            value={getPassword}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type="submit" color="secondary" variant="contained" fullWidth>
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
