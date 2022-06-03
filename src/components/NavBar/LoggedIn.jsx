import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import { Button, MenuItem } from "@mui/material";
import { selectUser } from "../../store/user/selectors";
import { NavLink } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <MenuItem>{user && `Hello, ${user.name}`}</MenuItem>
      <NavLink to="/">
        <Button
          sx={{
            underline: "none",
            backgroundColor: "#F9F8F4",
          }}
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </NavLink>
    </>
  );
}
