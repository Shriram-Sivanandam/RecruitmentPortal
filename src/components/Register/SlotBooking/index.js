import React, {useState , useEffect} from 'react'
import LetsGetStarted from '../../../assets/letsgo.svg'
import {
    DateChoose,
    TimeSlot,
  } from "../FormField";
  import { useAuth } from "../../../contexts/AuthContext";
import { auth, db } from "../../../firebase";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import toastError from "../../ToastError";
import upArrow from "../../../assets/upArrow.svg";
import downArrow from "../../../assets/downArrow.svg";

function SlotBooking() {
    const [dates, setDates] = useState([]);
  const [day, setDay] = useState([]);
  const [time, setTime] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [fulldates, setFullDates] = useState([]);
  const [token,setToken] = useState("")
  const [answersArray, setAnswersArray] = useState([]);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [showEndBtn, setEndBtn] = useState(false);
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
  }, [answersArray]);

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
      if (currentQuestion === 1) {
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
          console.log(z)
          await axios
            .post("http://localhost:3000/student/apti_test", {
              test_id: fulldates[z].test_id,
            }).then(() => {
              console.log("hogya assign");
              toast.success("Successfuly Registered")})
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
        <DateChoose
          day={day}
          dates={dates}
          setValue={setValue}
          setError={setError}
        />
      ),
      2: <TimeSlot time={time} minutes={minutes} setValue={setValue} />,
  }

  const questionBank = [
       "1. Choose a preferred date for your aptitude test.",
    "2. Choose a preferred time slot for your aptitude test.",
  ]


  const {currentUser} = useAuth();
  // console.log(currentUser)
  if (currentUser){
    currentUser.getIdToken().then(async (response) => {
      await setToken(response)
      // console.log(token)
    })

  }
    return (
        <div  className=" registerPage container "
        style={{ width: "100vw", height: "100vh" }}>

             
      <div className="heading mx-auto  ">
        {/* <div> */}
        <h1 className="heading mb-5  mx-auto ">Lets Get Started  <img className="  " src={LetsGetStarted} alt="watermark" /></h1>

        {/* </div> */}
      
     


      </div>
      <div class="steps-form ">
        <div class="steps-row setup-panel mobilebar  ">
          {[0, 1].map((key) => {
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
                   
                    slotBooking()
                
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
    )
}

export default SlotBooking
