import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Name,
  Email,
  PhoneNo,
  Password,
  DomainChoose,
  DateChoose,
  TimeSlot,
} from "./FormField";
import "./register.css";
import { useAuth } from "../../contexts/AuthContext";
import { auth, db } from "../../firebase";
import Constants from "../constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastError from "../ToastError";
import upArrow from "../../assets/upArrow.svg";
import downArrow from "../../assets/downArrow.svg";
import { array } from "yup";
function Register() {
  // const token = <Constants />
  const { token } = Constants();
  const [dates, setDates] = useState([]);
  const [day, setDay] = useState([]);
  const [time, setTime] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [fulldates, setFullDates] = useState([]);

  // const [token,setToken] = useState("")
  // const {currentUser} = useAuth();
  // // console.log(currentUser)
  // if (currentUser){
  //   currentUser.getIdToken(true).then(async (response) => {
  //     await setToken(response)
  //     // console.log(token)
  //   })

  // }
  const answerRef = useRef();
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [showEndBtn, setEndBtn] = useState(false);
  const [answersArray, setAnswersArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const [timeset , setTimeSet] = useState(false)

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    // console.log("hello");
    axios.get("http://localhost:3000/student/test").then((response) => {
      console.log(response.data);
      // const d1 = response.data.split("T")
      // const d2 = d1[1].split("")
      const date = new Date(response.data[1].date_time);
      console.log("date", date.getDate());

      if (dates !== []) {
        for (let i = 0; i < response.data.length; i++) {
          const date = new Date(response.data[i].date_time);
          // console.log(date);
          if (dates.indexOf(date) === -1) {
            setFullDates(response.data);
            // console.log(date[0]);
            // const d = date.split(" ")
            day.push(days[date.getDay()]);
            dates.push(date.getDate());

            // console.log(days[date.getDay()]);

           

            if (answersArray[6]?.day === days[date.getDay()]) {
             
              // time.push(date.getHours());
              setTime((previousTime) => [...previousTime , date.getHours()] )
              setMinutes((previousTime) => [...previousTime , date.getMinutes()])

              // minutes.push(date.getMinutes());
            } else {
              console.log(days[date.getDay()]);
            }
          }
        }
      }
    });
  }, [answersArray[6]]);
  // })

  // for (let i = 0; i < fulldates.lengthlength; i++) {
  //   const date = new Date(fulldates[i].date_time);
    
  //     if (answersArray[6].day === days[date.getDay()] ) {
  //       // time.push(date.getHours());
  //       setTime((previousTime) => [...previousTime , date.getHours()] )
  //       minutes.push(date.getMinutes());
  //     } else {
  //       console.log(days[date.getDay()]);
  //     }
  //   }
  


  // useEffect(() => {
  //   if (dates !== []) {
  //     for (let i = 0; i < fulldates.lengthlength; i++) {
  //       const date = new Date(fulldates[i].date_time);
        
  //         if (answersArray[6].day === days[date.getDay()]) {
  //           // time.push(date.getHours());
  //           setTime((previousTime) => [...previousTime , date.getHours()] )
  //           minutes.push(date.getMinutes());
  //         } else {
  //           console.log(days[date.getDay()]);
  //         }
  //       }
  //   }

  // } , [answersArray])

  // console.log("dates", dates);
  // console.log("day", day);

  // console.log("time", time);
  // console.log("minutes", minutes);

  function nextQues() {
    // answersArray.splice(currentQuestion, 0, answerRef.current.value);
    // answersArray = [...answersArray, answerRef.current.value];
    // answersArray.concat([answerRef.current.value]);
    // console.log(value)
    // console.log(error)
    if (value !== null) {
      // setAnswersArray([...answersArray, value]);
      answersArray[currentQuestion] = value;
      setValue(null);
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion === 6) {
        setShowNextBtn(false);
        setEndBtn(true);
        
      }
    } else {
      if (error === null) {
        console.log(error);
        setError("Pls Enter Valid Value");
        toastError("Pls Enter Valid Value");
      } else {
        console.log(error);
        toastError(error);
      }
    }

    if (error !== null) {
      setError(null);
    }

    // setUserAnswer("");
    // answerRef.current.value = "";
  }

  //  const studentRegister = async () => {
  //   await axios.post('http://localhost:3001/student/register', {
  //     name: answersArray[0],
  //     regno: answersArray[1],
  //     phone_no:answersArray[3],
  //     domains: answersArray[5]
  //  }
  //   )
  // }

  const studentRegister = async () => {
    try {
      if (error === null) {
        await axios
          .post("http://localhost:3000/student/register", {
            email: answersArray[2],
            password: answersArray[4],
            name: answersArray[0],
            regno: answersArray[1],
            phone_no: answersArray[3],
            domains: answersArray[5],
          })
          .then(() => {
            console.log("success");
           
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        toastError(error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(new Date(fulldates[1]?.date_time).getDay())
  

  const slotBooking = async () => {
    // const timeslot = answersArray[7].split(" ")
    // const date = new Date(`${answersArray[6].date} ${answersArray[6].month} 2021 ${timeslot[0]}`)
    // console.log(date)
    // const timeslot = `2021-11-${answersArray[6].date}T${answersArray[7].time -12}:`
    // const date = dates.indexOf(answersArray[6].date);

    for (let z = 0; z < fulldates?.length; z++) {
      try{
        const date = new Date(fulldates[z]?.date_time);
        // console.log("days =>" , days[date.getDay()])
        // console.log(date.getHours())
        // console.log(date.getMinutes())
        if (
          days[date.getDay()] === answersArray[6].day && date.getHours() === answersArray[7].time
        ) {
          console.log("hello")
          await axios
            .post("http://localhost:3000/student/apti_test", {
              test_id: fulldates[z].test_id,
            })
            .then(() => {
              console.log("hogya assign");
              toast.success("Successfuly Registered");
  
            })
            .catch((err) => {
              console.log(err.message);
            });
        }else{
          console.log("test")
        }
      }catch(err) {
        console.log(err.message);
      }

      }
     

    // try{
    //   await axios.post("http://localhost:3000/student/register" , {
    //     time_id : fulldates?[date].test_id
    //   }).then((response) => {
    //     console.log("register")
    //   }).catch(err) {

    // }
  };

  const components = {
    1: (
      <Name
        setValue={setValue}
        setError={setError}
        placeholder="Enter your name"
      />
    ),
    2: (
      <Name
        setValue={setValue}
        setError={setError}
        placeholder="Enter your Registration Number"
      />
    ),
    3: (
      <Email
        setValue={setValue}
        setError={setError}
        error={error}
        placeholder="Enter Your Email"
      />
    ),
    4: (
      <PhoneNo
        setValue={setValue}
        setError={setError}
        placeholder="Enter your Phone Number"
      />
    ),
    5: (
      <Password
        setValue={setValue}
        setError={setError}
        placeholder="Enter your Password"
      />
    ),
    6: <DomainChoose value={value} setValue={setValue} setError={setError} />,
    7: (
      <DateChoose
        day={day}
        dates={dates}
        setValue={setValue}
        setError={setError}
      />
    ),
    8: <TimeSlot time={time} minutes={minutes} setValue={setValue} />,
  };

  //   console.log(error)

  //   console.log(currentQuestion)

  console.log(answersArray);

  const questionBank = [
    "1. Heyy, what’s your name?",
    "2. How do you identify yourself in VIT?",
    "3. Drop your VIT Email ID",
    "4. Let’s have a talk, shall we?",
    "5. Shhh... no one else needs to know...Enter your password",
    "6. Which Domain(s) interests you the most?",
    "7. Choose a preferred date for your aptitude test.",
    "8. Choose a preferred time slot for your aptitude test.",
  ];

  return (
    <div
      className="container registerPage "
      style={{ width: "100vw", height: "100vh" }}
    >
      <h1 className="heading mb-5">Lets Get Started</h1>
      <div class="steps-form">
        <div class="steps-row setup-panel mobilebar">
          {[0, 1, 2, 3, 4, 5, 6].map((key) => {
            return (
              <>
                {key < currentQuestion ? (
                  <div class="steps-step mr-3">
                    <a
                      href="#step-9"
                      type="button"
                      className="btn btn-indigo active btn-circle"
                    >
                      {key + 1}
                    </a>
                  </div>
                ) : (
                  <div class="steps-step">
                    <div type="button" className="btn btn-indigo btn-circle">
                      {key + 1}
                    </div>
                  </div>
                )}
              </>
            );
          })}
          {/*        
        <div class="steps-step">
          <a href="#step-10" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
          
        </div>
        <div class="steps-step">
          <a href="#step-11" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
          
        </div> */}
        </div>
      </div>

      <div>
        <h3 className="my-5">
          <span style={{ color: "#7A7A7A" }}></span>
          {questionBank[currentQuestion]}
        </h3>
        <div>
          {/* <input
            ref={answerRef}
            className="inputField"
            placeholder="Enter Your Name"
          /> */}
          {components[currentQuestion + 1]}
        </div>
      </div>
      <div className="my-5">
        {/* <button className="btn btn-primary bg-dark px-4">Next</button> */}
        {showNextBtn ? (
          // <div className="row my-5">
          <div className=" buttonsRegister">
            <button
              type="button"
              className="btn btn-primary  bg-dark mb-5"
              onClick={nextQues}
              style={{ backgroundColor: "#5E72E4" }}
            >
              Next Question
            </button>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                 
                  setCurrentQuestion(currentQuestion + 1);
                }}
                className="arrows mr-2 py-1 px-2"
              >
                <img src={upArrow} alt="up" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (currentQuestion !== 0) {
                    setCurrentQuestion(currentQuestion - 1);
                  }
                }}
                className="arrows py-1 px-2 "
              >
                <img src={downArrow} alt="down" />
              </button>
            </div>
          </div>
        ) : (
          // </div>
          ""
        )}
        {showEndBtn ? (
          // <Link to="/">
          <div className="row my-5">
            <div className="ml-auto">
              <button
                type="button"
                class="btn btn-primary bg-dark"
                style={{ backgroundColor: "#5E72E4" }}
                onClick={(e) => {
                  e.preventDefault();
                 
                  nextQues()
                  setCurrentQuestion(7);
                  console.log(answersArray)
                   studentRegister().then(() => {
                    console.log("1 complete");
                    slotBooking();
                  });
                }}
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          // </Link>
          ""
        )}

        <div></div>
      </div>
    </div>
  );
}

export default Register;
