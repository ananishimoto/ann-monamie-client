import { Button } from "@mui/material";
import React from "react";
import NavbarItem from "./NavBarItem";

export default function LoggedOut() {
  return (
    <>
      <Button
        sx={{
          underline: "none",
          backgroundColor: "#F9F8F4",
        }}
      >
        <NavbarItem path="/auth/login" linkText="Login" />
      </Button>
    </>
  );
}
