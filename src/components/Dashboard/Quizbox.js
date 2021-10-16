import React, { useState } from "react";
import Nav2 from "../Nav/Nav2";
import "./Quizbox.css";
import { Link } from "react-router-dom";

function Quizbox() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [showEndBtn, setEndBtn] = useState(false);
  var answersArray = [];

  const questionBank = [
    {
      id: "1",
      questionText: "What is the shortcut for adding Auto Layout in Figma1?",
      answerOptions: [
        { optionText: "opt 11", optionSelected: 1 },
        { optionText: "opt 21", optionSelected: 2 },
        { optionText: "opt 31", optionSelected: 3 },
        { optionText: "opt 41", optionSelected: 4 },
      ],
    },
    {
      id: "2",
      questionText: "What is the shortcut for adding Auto Layout in Figma2?",
      answerOptions: [
        { optionText: "opt 12", optionSelected: 1 },
        { optionText: "opt 22", optionSelected: 2 },
        { optionText: "opt 32", optionSelected: 3 },
        { optionText: "opt 42", optionSelected: 4 },
      ],
    },
    {
      id: "3",
      questionText: "What is the shortcut for adding Auto Layout in Figma3?",
      answerOptions: [
        { optionText: "opt 16", optionSelected: 1 },
        { optionText: "opt 27", optionSelected: 2 },
        { optionText: "opt 38", optionSelected: 3 },
        { optionText: "opt 49", optionSelected: 4 },
      ],
    },
    {
      id: "4",
      questionText: "What is the shortcut for adding Auto Layout in Figma4?",
      answerOptions: [
        { optionText: "opt 14", optionSelected: 1 },
        { optionText: "opt 24", optionSelected: 2 },
        { optionText: "opt 34", optionSelected: 3 },
        { optionText: "opt 44", optionSelected: 4 },
      ],
    },
    {
      id: "5",
      questionText: "What is the shortcut for adding Auto Layout in Figma4?",
      answerOptions: [
        { optionText: "opt 14", optionSelected: 1 },
        { optionText: "opt 24", optionSelected: 2 },
        { optionText: "opt 34", optionSelected: 3 },
        { optionText: "opt 44", optionSelected: 4 },
      ],
    },
    {
      id: "6",
      questionText: "What is the shortcut for adding Auto Layout in Figma4?",
      answerOptions: [
        { optionText: "opt 14", optionSelected: 1 },
        { optionText: "opt 24", optionSelected: 2 },
        { optionText: "opt 34", optionSelected: 3 },
        { optionText: "opt 44", optionSelected: 4 },
      ],
    },
    {
      id: "7",
      questionText: "What is the shortcut for adding Auto Layout in Figma4?",
      answerOptions: [
        { optionText: "opt 14", optionSelected: 1 },
        { optionText: "opt 24", optionSelected: 2 },
        { optionText: "opt 34", optionSelected: 3 },
        { optionText: "opt 44", optionSelected: 4 },
      ],
    },
    {
      id: "8",
      questionText: "What is the shortcut for adding Auto Layout in Figma4?",
      answerOptions: [
        { optionText: "opt 14", optionSelected: 1 },
        { optionText: "opt 24", optionSelected: 2 },
        { optionText: "opt 34", optionSelected: 3 },
        { optionText: "opt 44", optionSelected: 4 },
      ],
    },
    {
      id: "9",
      questionText: "What is the shortcut for adding Auto Layout in Figma4?",
      answerOptions: [
        { optionText: "opt 14", optionSelected: 1 },
        { optionText: "opt 24", optionSelected: 2 },
        { optionText: "opt 34", optionSelected: 3 },
        { optionText: "opt 44", optionSelected: 4 },
      ],
    },
    {
      id: "10",
      questionText: "What is the shortcut for adding Auto Layout in Figma4?",
      answerOptions: [
        { optionText: "opt 14", optionSelected: 1 },
        { optionText: "opt 24", optionSelected: 2 },
        { optionText: "opt 34", optionSelected: 3 },
        { optionText: "opt 44", optionSelected: 4 },
      ],
    },
  ];

  function handleOptionClick(optionSelected) {
    answersArray.push(optionSelected);
    console.log(answersArray);
  }

  function nextQues() {
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === 8) {
      setShowNextBtn(false);
      setEndBtn(true);
    }
  }

  return (
    <>
      <Nav2 />
      <div className="container">
        <div className="row my-5">
          <div className="mr-auto">
            <h4 style={{ fontWeight: "600" }}>
              {" "}
              Question:
              <span style={{ color: "#5E72E4", whiteSpace: "nowrap" }}>
                {currentQuestion + 1}/10
              </span>
            </h4>
          </div>
          <div className="ml-auto">
            <h4 style={{ fontWeight: "600" }}>
              {" "}
              Time remaining :{" "}
              <span style={{ color: "#23BE7B", whiteSpace: "nowrap" }}>
                {" "}
                20:00{" "}
              </span>
            </h4>
          </div>
        </div>
        <div className="quizbox container">
          <div className="row my-1">
            <b>
              <h3>Question {currentQuestion + 1}</h3>
            </b>
          </div>
          <div className="row my-3">
            <h5>{questionBank[currentQuestion].questionText}</h5>
          </div>
          <div className="col">
            {questionBank[currentQuestion].answerOptions.map((answerOption) => (
              <div
                onClick={() => handleOptionClick(answerOption.optionSelected)}
                className="row my-2"
              >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    {answerOption.optionText}
                  </label>
                </div>
              </div>
            ))}
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

export default Quizbox;
