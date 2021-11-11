import React, { useState, useRef } from "react";
import Nav2 from "../Nav/Nav2";
import "./ManagementQuiz.css";
import { Link } from "react-router-dom";
import Group45 from '../../assets/Group45.svg'
import axios from 'axios'
import {  toast } from "react-toastify";
import toastError from "../ToastError";
function ManagementQuiz() {
  const answerRef = useRef();
  // const [userAnswer, setUserAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [showEndBtn, setEndBtn] = useState(false);
  const [answersArray, setAnswersArray] = useState([]);
  // var answersArray = [];

  function nextQues() {
    // answersArray.splice(currentQuestion, 0, answerRef.current.value);
    // answersArray = [...answersArray, answerRef.current.value];
    // answersArray.concat([answerRef.current.value]);
    setAnswersArray([...answersArray, answerRef.current.value]);
    // setUserAnswer("");
    answerRef.current.value = "";
    
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === 3) {
      setShowNextBtn(false);
      setEndBtn(true);
    }
  }
  console.log(answersArray);

  const managementQuiz = async () => {
    console.log(answersArray);
    await axios.post('http://localhost:3000/student/mgmt_quiz',{
      
        "answer1":answersArray[0],
        "answer2":answersArray[1],
        "answer3":answersArray[2],
        "answer4":answersArray[3],
        "answer5":answerRef.current.value
    
    }).then((response) => {
      console.log(response.data)
      console.log("success")
      toast.success("Successfuly Registered");

    }).catch((err) => {
      console.log(err)
      toastError(err);
    })
  }


  const questionBank = [
    "What is the shortcut for adding Auto Layout in Figma?1",
    "What is the shortcut for adding Auto Layout in Figma?2",
    "What is the shortcut for adding Auto Layout in Figma?3",
    "What is the shortcut for adding Auto Layout in Figma?4",
    "What is the shortcut for adding Auto Layout in Figma?5",
  ];

  return (
    <>
      <Nav2 />
      <div className="container  p-5" style={{ backgroundColor:"#FFF5F1" , width:"100vw" , height:"100vh" }}>
      
        {/* <div className="row my-5">
          <div className="managementQuesInfo">
            <h4>
              Question:<span> {currentQuestion + 1}/10</span>
            </h4>
          </div>
          <div className="managementTimeInfo">
            <h4>
              Time remaining:<span> 17:35</span>
            </h4>
          </div>
        </div> */}
        <div className="managementQBox container">
        <div className="d-flex justify-content-between">
            <img src={Group45} alt="logo" className="logo" />
            <div>
              <h5 className="completedText">
                Total Test Completed - {((currentQuestion + 1) / 5) * 100}%
              </h5>
              <div className="bar">
                <div
                  style={{ width: `${((currentQuestion + 1) / 5) * 100}%` }}
                  className="completedbar"
                ></div>
              </div>
            </div>
          </div>
          <div className="w-100 my-2 " style={{backgroundColor:"#E0E0E0", padding:"1px"}} >

</div>
        <div className="d-flex justify-content-between">
            <h5 style={{ color:"#7A7A7A" }}> {10 -  currentQuestion - 1  } questions to go</h5>
            <div className="logo">
              Time to Go : 20:00{" "}
            </div>
            
          </div>
          {/* <div className="row my-1">
            <b>
              <h3>Question {currentQuestion + 1}</h3>
            </b>
          </div> */}
          <div class="form-group">
            <label className="managementQues" for="managementAnswer">
            <span style={{ color:"#7A7A7A" }} >Q{currentQuestion + 1}: </span>{questionBank[currentQuestion]}
            </label>
            <textarea
              ref={answerRef}
              // value={userAnswer}
              // onChange={(e) => setUserAnswer(e.target.value)}
              class="form-control"
              id="managementAnswer"
              rows="10"
            ></textarea>
          </div>
          {showNextBtn ? (
            <div className="row my-5">
              <div className="ml-auto">
                <button
                  type="button"
                  class="btn btn-primary"
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
            <Link to="/thankyou">
              <div className="row my-5">
                <div className="ml-auto">
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ backgroundColor: "#5E72E4" }}
                    onClick={() => {
                      setAnswersArray([...answersArray, answerRef.current.value]);
                      managementQuiz()

                    }}
                  >
                    End Test
                  </button>
                </div>
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default ManagementQuiz;
