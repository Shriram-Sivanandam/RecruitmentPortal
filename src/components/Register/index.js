import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Name,
  RegNo,
  Email,
  PhoneNo,
  Password,
  DomainChoose,
  DateChoose,
  TimeSlot,
} from "./FormField";
import "./register.css";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastError from "../ToastError";
// import upArrow from "../../assets/upArrow.svg";
// import downArrow from "../../assets/downArrow.svg";
import previousArrow from "../../assets/previousArrow.svg";
import nextArrow from "../../assets/nextArrow.svg";
import LetsGetStarted from "../../assets/letsgo.svg";
function Register() {
  // const token = <Constants />
  // const { token } = Constants();
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [dates, setDates] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [day, setDay] = useState([]);
  const [time, setTime] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [fulldates, setFullDates] = useState([]);
  const { login } = useAuth();

  const [token, setToken] = useState("");
  const { currentUser } = useAuth();
  // console.log(currentUser)
  if (currentUser) {
    currentUser.getIdToken().then(async (response) => {
      await setToken(response);
      // console.log(token)
    });
  }
  // const answerRef = useRef();
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [showEndBtn, setEndBtn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [answersArray, setAnswersArray] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const { signup } = useAuth();
  // const [timeset, setTimeSet] = useState(false);
  const [disabled, setDisabled] = useState(false);
  console.log(answersArray);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const EnterFunction = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      nextQues();
    }
  };

  // useEffect(() => {
  //   // console.log("hello");
  //   axios.get("/student/test").then((response) => {
  //     console.log(response.data);
  //     // const d1 = response.data.split("T")
  //     // const d2 = d1[1].split("")
  //     const date = new Date(response.data[1].date_time);
  //     console.log("date", date.getDate());

  //     if (dates.length !== 0) {
  //       for (let i = 0; i < response.data.length; i++) {
  //         const date = new Date(response.data[i].date_time);
  //         // console.log(date);
  //         if (dates.indexOf(date) === -1) {
  //           if (fulldates !== response.data) {
  //             setFullDates(response.data);
  //           }

  //           // console.log(date[0]);
  //           // const d = date.split(" ")
  //           if (dates.indexOf(date.getDate()) === -1) {
  //             day.push(days[date.getDay()]);
  //             dates.push(date.getDate());
  //           }

  //           // console.log(days[date.getDay()]);

  //           if (answersArray[6]?.day === days[date.getDay()]) {
  //             // time.push(date.getHours());
  //             if (time.indexOf(date.getHours()) === -1) {
  //               setTime((previousTime) => [...previousTime, date.getHours()]);
  //             }
  //             if (minutes.indexOf(date.getMinutes()) === -1) {
  //               setMinutes((previousTime) => [
  //                 ...previousTime,
  //                 date.getMinutes(),
  //               ]);
  //             }

  //             // minutes.push(date.getMinutes());
  //           } else {
  //             console.log(days[date.getDay()]);
  //           }
  //         }
  //       }
  //     }
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [answersArray[6]]);

  useEffect(() => {
    if (currentQuestion === 5) {
      if (
        answersArray[5]?.includes("DESIGN") &&
        answersArray[5]?.length === 1
      ) {
        setDisabled(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answersArray[5]]);
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

      if (currentQuestion < 6) {
        setShowNextBtn(true);
        setEndBtn(false);
      }
      if (currentQuestion === 6) {
        setShowNextBtn(false);
        setEndBtn(true);
      }
    } else {
      if (error === null) {
        setError("Please enter valid value");
        toastError("Please enter valid value");
      } else {
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
          .post("/student/register", {
            email: answersArray[2],
            password: answersArray[4],
            name: answersArray[0],
            regno: answersArray[1].toUpperCase(),
            phone_no: answersArray[3],
            domains: answersArray[5],
          })
          .then(() => {
            console.log("success");
            console.log(token);
            login(answersArray[2], answersArray[4]).then(() => {
              if (
                answersArray[5]?.includes("DESIGN") &&
                answersArray[5]?.length === 1
              ) {
                setDisabled(true);
                toast.success("You have successfully registered");
                history.push("/quiz-dashboard");
              } else {
                slotBooking().then(() => {
                  history.push("/quiz-dashboard");
                });
              }
            });

            // slotBooking()
          })
          .catch((err) => {
            toastError(error.response.data);
            console.log(err.message);
          });
      } else {
        toastError(error.response.data);
      }
    } catch (err) {
      toastError(error.response.data);
      console.log(err);
    }
  };

  console.log(new Date(fulldates[1]?.date_time).getDay());

  const slotBooking = async () => {
    // const timeslot = answersArray[7].split(" ")
    // const date = new Date(`${answersArray[6].date} ${answersArray[6].month} 2021 ${timeslot[0]}`)
    // console.log(date)
    // const timeslot = `2021-11-${answersArray[6].date}T${answersArray[7].time -12}:`
    // const date = dates.indexOf(answersArray[6].date);

    for (let z = 0; z < fulldates?.length; z++) {
      try {
        const date = new Date(fulldates[z]?.date_time);
        // console.log("days =>" , days[date.getDay()])
        // console.log(date.getHours())
        // console.log(date.getMinutes())
        if (
          days[date.getDay()] === answersArray[6].day &&
          date.getHours() === answersArray[7].time
        ) {
          console.log("hello");
          console.log(z);
          console.log(fulldates[z].test_id);
          await axios
            .post("/student/apti_test", {
              test_id: fulldates[z].test_id,
            })
            .then(() => {
              console.log("hogya assign");
              toast.success("Successfuly Registered");
            })
            .catch((err) => {
              toastError(error.response.data);
              console.log(err.message);
            });
        } else {
          console.log("test");
        }
      } catch (err) {
        toastError(error.response.data);
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

  console.log(disabled);

  const components = {
    1: (
      <Name
        setValue={setValue}
        setError={setError}
        placeholder="Enter your name"
      />
    ),
    2: (
      <RegNo
        setValue={setValue}
        setError={setError}
        placeholder="Enter your Registration Number"
        value={value}
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
        disabled={disabled}
      />
    ),
    8: (
      <TimeSlot
        time={time}
        minutes={minutes}
        setValue={setValue}
        disabled={disabled}
      />
    ),
  };

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
      className=" registerPage container "
      style={{ width: "100vw", height: "100vh" }}
    >
      <img className="mx-auto letsgo" src={LetsGetStarted} alt="lets go" />

      <div className="heading mx-auto  ">
        <h1 className="headingTop mb-5  mx-auto">Lets Get Started </h1>
      </div>

      <div className="steps-form ">
        <div className="steps-row setup-panel mobilebar  ">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((key) => {
            return (
              <>
                {key - 1 < currentQuestion ? (
                  <div className="steps-step mr-3">
                    <a
                      href="#step-9"
                      type="button"
                      className="btn btn-indigo active btn-circle"
                    >
                      {key + 1}
                    </a>
                  </div>
                ) : (
                  <div className="steps-step">
                    <div type="button" className="btn btn-indigo btn-circle">
                      {key + 1}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="my-5 question">
          <span style={{ color: "#7A7A7A" }}></span>
          {questionBank[currentQuestion]}
        </h3>
        <div onKeyDown={(e) => EnterFunction(e)}>
          {components[currentQuestion + 1]}
        </div>
      </div>
      <div className="my-5">
        {showNextBtn ? (
          <div className=" buttonsRegister">
            <button
              type="button"
              className="btn btn-primary border-dark  bg-dark mb-5"
              onClick={nextQues}
              style={{ backgroundColor: "#5E72E4", borderColor: "#5E72E4" }}
            >
              Next {">"}
            </button>
            <div>
              {currentQuestion !== 0 ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();

                    // nextQues();
                    console.log(currentQuestion);
                    setCurrentQuestion(currentQuestion - 1);
                    console.log(currentQuestion);
                  }}
                  className="arrows py-1 px-2 "
                >
                  {<img src={previousArrow} alt="down" />}
                </button>
              ) : null}

              <button
                onClick={(e) => {
                  e.preventDefault();
                  nextQues();
                  // if (error !== null) {
                  //   setCurrentQuestion(currentQuestion + 1);
                  // }
                }}
                className="arrows ml-2 p-1"
              >
                {<img className="px-1" src={nextArrow} alt="up" />}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {showEndBtn ? (
          // <Link to="/">
          <div className="row my-5">
            <div className="mr-auto">
              {/* <Link to="/login"> */}
              <button
                type="button"
                className="btn btn-primary bg-dark mb-5 ml-3"
                style={{ backgroundColor: "#5E72E4" }}
                onClick={(e) => {
                  e.preventDefault();

                  nextQues();
                  console.log("hello");

                  setCurrentQuestion(7);
                  console.log(answersArray);

                  if (error === null) {
                    studentRegister().then(() => {
                      console.log("1 complete");
                      console.log(token);
                      slotBooking();
                    });
                    setTimeout(() => {
                      history.push("/quiz-dashboard");
                    }, 5000);
                  }
                }}
              >
                Submit
              </button>

              {/* </Link> */}
            </div>
            <div className="">
              <button
                onClick={(e) => {
                  e.preventDefault();

                  // nextQues();
                  console.log(currentQuestion);
                  setCurrentQuestion(currentQuestion - 1);
                  console.log(currentQuestion);
                  if (currentQuestion < 8) {
                    setShowNextBtn(true);
                    setEndBtn(false);
                  }
                }}
                className="arrows py-1 px-2 "
              >
                {<img src={previousArrow} alt="down" />}
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
