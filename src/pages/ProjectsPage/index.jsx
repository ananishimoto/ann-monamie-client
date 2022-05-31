import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../components/NavBar";

export default function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <h1>Your Projects</h1>
      <h3>Finished</h3>
      <NavLink to="/project/:id">Tunisian Bag</NavLink>
      <h3>Work in Progress</h3>
      <NavLink to="/project/:id">Kiki Whale</NavLink>
      <h3>Wishlist</h3>
      <NavLink to="/project/:id">Duck Amigurumi</NavLink>
    </div>
  );
}
