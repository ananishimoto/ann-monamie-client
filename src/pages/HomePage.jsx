import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>This is the main page</h1>
      <NavLink to="/projects">
        <Button>Projects Page</Button>
      </NavLink>
    </div>
  );
}
