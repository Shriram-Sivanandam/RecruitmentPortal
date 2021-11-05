import React, { useState } from "react";

function TakeQuizBtn() {
  const [message, setMessage] = useState("");

  // function enterQuiz() {
  //   var currentTime = new Date();
  //   var currentOffset = currentTime.getTimezoneOffset();
  //   var ISTOffset = 330;
  //   var ISTTime = new Date(
  //     currentTime.getTime() + (ISTOffset + currentOffset) * 60000
  //   );
  //   var hoursIST = ISTTime.getHours();
  //   var minutesIST = ISTTime.getMinutes();

  //   if (hoursIST === 19 && minutesIST <= 5) {
  //     setMessage("You can start you quiz now"); // here we need to route in to the page where the quiz is happening
  //   } else {
  //     setMessage("Your slot is not now. Please try again later.");
  //   }

  //   console.log(hoursIST, minutesIST);
  // }
  return (
    <div>
      <h1>{message}</h1>
      {/* <btn onClick={enterQuiz}>Start Quiz</btn> */}
    </div>
  );
}

export default TakeQuizBtn;
