import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import NavBar from "../../components/NavBar";
import ProjectCard from "../../components/ProjectCard";
import { fetchProjects } from "../../store/project/actions";
import { selectProjects } from "../../store/project/selectors";

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  console.log("Redux?", projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  // console.log("hey yo");

  return (
    <div>
      <NavBar />
      <ProjectCard />
    </div>
  );
}
