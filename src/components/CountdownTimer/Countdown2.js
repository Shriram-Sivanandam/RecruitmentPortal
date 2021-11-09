import React from "react";
import { useState, useEffect } from "react";

function Countdown2() {
  const initialMinute = 0;
  const initialSeconds = 10;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>
        {minutes}:{seconds}
      </h1>
    </div>
  );
}

export default Countdown2;
