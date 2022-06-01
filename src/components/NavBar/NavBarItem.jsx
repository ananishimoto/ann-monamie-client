import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props) {
  return (
    <>
      <NavLink to={props.path}>{props.linkText}</NavLink>
    </>
  );
}
