import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function timeLeft() {
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;
    var ISTTime = new Date(
      currentTime.getTime() + (ISTOffset + currentOffset) * 60000
    );
    var hoursIST = ISTTime.getHours();
    var minutesIST = ISTTime.getMinutes();
    var secondsIST = ISTTime.getSeconds();

    setHours(19 - hoursIST);
    setMinutes(60 - minutesIST);
    setSeconds(60 - secondsIST);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      timeLeft();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>
        {hours}:{minutes}:{seconds}
      </h1>
    </div>
  );
}

export default CountdownTimer;
