import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Timer() {
  const timerStyle = {
    width: "500px",
    height: "45px",
    color: "#ae7d73",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const [getSeconds, setSeconds] = useState(0);
  const [getMinutes, setMinutes] = useState(0);
  const [getHours, setHours] = useState(0);
  const [getDays, setDays] = useState(0);
  const [getTimer, setTimer] = useState(false);

  useEffect(() => {
    let timer = null;

    if (getTimer) {
      timer = setInterval(() => {
        setSeconds(getSeconds + 1);

        if (getSeconds === 59) {
          setMinutes(getMinutes + 1);
          setSeconds(0);
        }

        if (getMinutes === 59) {
          setHours(getHours + 1);
          setMinutes(0);
        }

        if (getHours === 24) {
          setDays(getDays + 1);
          setHours(0);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [getTimer, getSeconds, getMinutes, getHours, getDays]);

  //   function startTimer() {

  //     console.log("Hello");
  //   }

  return (
    <>
      <Button
        onClick={() => setTimer(true)}
        sx={{
          backgroundColor: "#ae7d73",
          "&:hover": {
            backgroundColor: "#8a564c",
          },
        }}
        variant="contained"
      >
        Work a little bit here 🧵
      </Button>
      <Button
        onClick={() => setTimer(false)}
        sx={{
          backgroundColor: "#ae7d73",
          "&:hover": {
            backgroundColor: "#8a564c",
          },
        }}
        variant="contained"
      >
        Let's have a break 🍵
      </Button>
      <Box style={timerStyle} sx={{ border: 1 }}>
        <Typography variant="p">Time doing this project: </Typography>
        <Box sx={{ m: 0.2 }}>{getDays}</Box>
        <Box sx={{ m: 0.2 }}>days</Box>
        <Box sx={{ m: 0.2 }}>{getHours}</Box>
        <Box sx={{ m: 0.2 }}>hours</Box>
        <Box sx={{ m: 0.2 }}>
          {getMinutes < 10 ? "0" + getMinutes : getMinutes}
        </Box>
        <Box sx={{ m: 0.2 }}>minutes</Box>
        <Box sx={{ m: 0.2 }}>
          {getSeconds < 10 ? "0" + getSeconds : getSeconds}
        </Box>
        <Box sx={{ m: 0.2 }}>seconds</Box>
      </Box>
    </>
  );
}
