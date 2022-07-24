import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import { Alert, AlertTitle } from "@mui/material";
import { clearMessage } from "../../store/appState/slice";

export default function MessageBox() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <Alert variant="outlined" severity="info">
      <AlertTitle
        show={showMessage}
        variant={message.variant}
        dismissible={message.dismissable}
        onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
      >
        {message.text}
      </AlertTitle>
    </Alert>
  );
}
