import React from "react";
import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
import toastError from "../ToastError";

function Countdown2({  answersArray }) {
  // const initialMinute = 10;
  // const initialSeconds = 0;
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(60);
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
          // submitQuestions().then(() => {
            // history.push("/thankyou");
          axios
      .post("/student/score", {
        answers: answersArray,
      })
      .then((response) => {
        toast.success("Answers Registered")
        history.push("/thankyou");

        console.log(response.data);
      })
      .catch((err) => {
        toastError(err.response.data);
        console.log(err);
      });
            
          

         
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h6 className="timer">
      {(minutes < 10 ? "0" : "") + minutes}:
      {(seconds % 60 < 10 ? "0" : "") + (seconds % 60)}
    </h6>
  );
}

export default Countdown2;
