import { Button } from "@mui/material";
import React from "react";
import NavbarItem from "./NavBarItem";

export default function LoggedOut() {
  return (
    <>
      <Button>
        <NavbarItem path="/auth/login" linkText="Login" />
      </Button>
    </>
  );
}
