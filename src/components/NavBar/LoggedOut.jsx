import React from "react";
import NavbarItem from "./NavBarItem";

export default function LoggedOut() {
  return (
    <>
      <NavbarItem path="/auth/login" linkText="Login" />
    </>
  );
}
