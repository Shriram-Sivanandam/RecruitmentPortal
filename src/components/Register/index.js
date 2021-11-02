import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./register.css";
function Register() {
  const answerRef = useRef();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [showEndBtn, setEndBtn] = useState(false);
  const [answersArray, setAnswersArray] = useState([]);

  function nextQues() {
    // answersArray.splice(currentQuestion, 0, answerRef.current.value);
    // answersArray = [...answersArray, answerRef.current.value];
    // answersArray.concat([answerRef.current.value]);
    setAnswersArray([...answersArray, answerRef.current.value]);
    // setUserAnswer("");
    answerRef.current.value = "";

    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === 6) {
      setShowNextBtn(false);
      setEndBtn(true);
    }
  }

  console.log(currentQuestion)

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
    <div className="container registerPage " style={{ width: "100vw", height: "100vh" }}>
          <h1 className="testing">Hello</h1>
          <h1 className="testing2">Hello</h1>
          <h1 className="testing3">Technical</h1>
      <h1 className="heading">Lets Get Started</h1>
      <div class="steps-form">
      <div class="steps-row setup-panel">
          {[0,1,2,3,4,5,6].map((key) => {
              return(
                  <>
                  { key < currentQuestion ?
                    <div class="steps-step" >
                <a href="#step-9" type="button" className="btn btn-indigo active btn-circle">{key+1}</a>
               
              </div> 
                  
                
                : 
                <div class="steps-step" >
                <a href="#step-9" type="button" className="btn btn-indigo btn-circle">{key+1}</a>
               
              </div>
            
            }
            </>
                

              )
             

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
          <input
            ref={answerRef}
            className="inputField"
            placeholder="Enter Your Name"
          />
        </div>
      </div>
      <div className="my-5">
        {/* <button className="btn btn-primary bg-dark px-4">Next</button> */}
        {showNextBtn ? (
          <div className="row my-5">
            <div className="">
              <button
                type="button"
                className="btn btn-primary  bg-dark"
                onClick={nextQues}
                style={{ backgroundColor: "#5E72E4" }}
              >
                Next Question
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {showEndBtn ? (
            <Link to="/">
              <div className="row my-5">
                <div className="ml-auto">
                  <button
                    type="button"
                    class="btn btn-primary bg-dark"
                    style={{ backgroundColor: "#5E72E4" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Link>
          ) : (
            ""
          )}

        <div></div>
      </div>
    </div>
  );
}

export default Register;
