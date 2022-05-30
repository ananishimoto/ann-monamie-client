import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <div>
      <h1>This is the projects page</h1>
      <NavLink to="/project/:id">
        <Button>Details of this project</Button>
      </NavLink>
    </div>
  );
}
