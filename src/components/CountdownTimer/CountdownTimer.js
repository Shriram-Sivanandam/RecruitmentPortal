import React from "react";
import { useState, useEffect } from "react";
import './CountdownTimer.css'

function Countdown2() {
  const initialMinute = 10;
  const initialSeconds = 0;
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(600);
  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds > 0) {
        // if (seconds < 11 ){
        //   setSeconds(`0${seconds-1}`)
        // }else{
          setSeconds(seconds - 1);
          setMinutes( Math.floor(seconds / 60 )  );

        // }
        
      }
      // if (seconds === 0) {
      //   if (minutes === 0) {
      //     clearInterval(timer);
      //   } else {
      //     setMinutes((seconds / 60)  );
      //     // setSeconds(seconds % 60 );
      //   }
      // }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1 className="timer">
        {  minutes - 1}:{seconds % 60}
      </h1>
    </div>
  );
}

export default Countdown2;