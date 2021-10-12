import React, { useState } from "react";
import Nav2 from "../Nav/Nav2";
import "./Quizbox.css";

function Quizbox() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  var answers = [];

  const questionBank = [
    {
      id: "1",
      questionText: "What is the shortcut for adding Auto Layout in Figma1?",
      answerOptions: [
        { optionText: "opt 11", isCorrect: false },
        { optionText: "opt 21", isCorrect: false },
        { optionText: "opt 31", isCorrect: true },
        { optionText: "opt 41", isCorrect: false },
      ],
    },
    {
      id: "2",
      questionText: "What is the shortcut for adding Auto Layout in Figma2?",
      answerOptions: [
        { optionText: "opt 12", isCorrect: false },
        { optionText: "opt 22", isCorrect: false },
        { optionText: "opt 32", isCorrect: true },
        { optionText: "opt 42", isCorrect: false },
      ],
    },
    {
      id: "3",
      questionText: "What is the shortcut for adding Auto Layout in Figma3?",
      answerOptions: [
        { optionText: "opt 16", isCorrect: false },
        { optionText: "opt 27", isCorrect: false },
        { optionText: "opt 38", isCorrect: true },
        { optionText: "opt 49", isCorrect: false },
      ],
    },
    {
      id: "4",
      questionText: "What is the shortcut for adding Auto Layout in Figma4?",
      answerOptions: [
        { optionText: "opt 14", isCorrect: false },
        { optionText: "opt 24", isCorrect: false },
        { optionText: "opt 34", isCorrect: true },
        { optionText: "opt 44", isCorrect: false },
      ],
    },
  ];

  function nextQues() {
    setCurrentQuestion(currentQuestion + 1);
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
              <div className="row my-2">
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
        </div>
      </div>
    </>
  );
}

export default Quizbox;
