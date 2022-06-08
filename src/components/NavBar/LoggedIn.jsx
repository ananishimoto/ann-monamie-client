import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import { Button, MenuItem } from "@mui/material";
import { selectUser } from "../../store/user/selectors";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  if (user === null) {
    return <>{""}</>;
  }

  function logOutClick() {
    dispatch(logOut());
    navigate("/");
  }

  return (
    <>
      <NavLink to={`/auth/profile/${user.id}`}>
        <MenuItem sx={{ color: "white" }}>
          {user && `Hello, ${user.name}`}
        </MenuItem>
      </NavLink>
      <Button
        sx={{
          underline: "none",
          backgroundColor: "#F9F8F4",
        }}
        onClick={() => logOutClick()}
      >
        Logout
      </Button>
    </>
  );
}
