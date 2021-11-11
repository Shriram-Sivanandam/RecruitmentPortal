import React from "react";
import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import { useHistory } from "react-router-dom";

function Countdown2() {
  // const initialMinute = 10;
  // const initialSeconds = 0;
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(600);
  const history = useHistory();
  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        if (seconds % 60 === 0) {
          setMinutes(Math.floor(seconds / 60) - 1);
        } else {
          setMinutes(Math.floor(seconds / 60));
        }
      }
      if (seconds === 0) {
        if (minutes === 0) {
          history.push("/thankyou");
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <h6 className="timer">
      {(minutes < 10 ? "0" : "") + minutes}:
      {(seconds % 60 < 10 ? "0" : "") + (seconds % 60)}
    </h6>
  );
}

export default Countdown2;
