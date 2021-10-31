import React, { useState, useRef } from "react";
import Nav2 from "../Nav/Nav2";
import "./ManagementQuiz.css";
import { Link } from "react-router-dom";

function ManagementQuiz() {
  const answerRef = useRef();
  const [userAnswer, setUserAnswer] = useState("");
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
    console.log(answersArray);
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === 8) {
      setShowNextBtn(false);
      setEndBtn(true);
    }
  }

  const questionBank = [
    "What is the shortcut for adding Auto Layout in Figma?1",
    "What is the shortcut for adding Auto Layout in Figma?2",
    "What is the shortcut for adding Auto Layout in Figma?3",
    "What is the shortcut for adding Auto Layout in Figma?4",
    "What is the shortcut for adding Auto Layout in Figma?5",
    "What is the shortcut for adding Auto Layout in Figma?6",
    "What is the shortcut for adding Auto Layout in Figma?7",
    "What is the shortcut for adding Auto Layout in Figma?8",
    "What is the shortcut for adding Auto Layout in Figma?9",
    "What is the shortcut for adding Auto Layout in Figma?10",
  ];

  return (
    <>
      <Nav2 />
      <div className="container">
        <div className="row my-5">
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
        </div>
        <div className="managementQBox container">
          <div className="row my-1">
            <b>
              <h3>Question {currentQuestion + 1}</h3>
            </b>
          </div>
          <div class="form-group">
            <label className="managementQues" for="managementAnswer">
              {questionBank[currentQuestion]}
            </label>
            <textarea
              ref={answerRef}
              // value={userAnswer}
              // onChange={(e) => setUserAnswer(e.target.value)}
              class="form-control"
              id="managementAnswer"
              rows="5"
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
