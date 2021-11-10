import React, { useState, useEffect } from "react";
import Nav2 from "../Nav/Nav2";
import "./Quizbox.css";
import { Redirect, Link } from "react-router-dom";
import Group45 from "../../assets/Group45.svg";
import Options from "./Options";
import axios from "axios";
import Countdown2 from "../CountdownTimer/CountdownTimer";

function Quizbox() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOption, setCurrentOption] = useState(null);
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [showEndBtn, setEndBtn] = useState(false);
  // var answersArray = [];
  const [answersArray, setAnswersArray] = useState([]);
  const [questionBank, setQuestionBank] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    console.log("hello");
    // setLoading(true);

    axios
      .get("http://localhost:3000/student/start_test")
      .then((response) => {
        console.log(response.data);
        if (
          response.data === "INACTIVE TEST" ||
          response.data === "CANNOT GIVE TEST"
        ) {
          setStatus("Given");
        } else {
          setQuestionBank(response.data.question);
          if (startTime === 0) {
            setStartTime(response.data.start_time);
          }
        }

        // setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/student/score", {
        answers: answersArray,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const optionsForm = {
    Option1: "A",
    Option2: "B",
    Option3: "C",
    Option4: "D",
  };

  // const questionBank = [
  //   {
  //     id: "1",
  //     questionText: "What is the shortcut for adding Auto Layout in Figma1?",
  //     answerOptions: [
  //       { optionText: "opt 11", optionSelected: 1 },
  //       { optionText: "opt 21", optionSelected: 2 },
  //       { optionText: "opt 31", optionSelected: 3 },
  //       { optionText: "opt 41", optionSelected: 4 },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     questionText: "What is the shortcut for adding Auto Layout in Figma2?",
  //     answerOptions: [
  //       { optionText: "opt 12", optionSelected: 1 },
  //       { optionText: "opt 22", optionSelected: 2 },
  //       { optionText: "opt 32", optionSelected: 3 },
  //       { optionText: "opt 42", optionSelected: 4 },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     questionText: "What is the shortcut for adding Auto Layout in Figma3?",
  //     answerOptions: [
  //       { optionText: "opt 16", optionSelected: 1 },
  //       { optionText: "opt 27", optionSelected: 2 },
  //       { optionText: "opt 38", optionSelected: 3 },
  //       { optionText: "opt 49", optionSelected: 4 },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     questionText: "What is the shortcut for adding Auto Layout in Figma4?",
  //     answerOptions: [
  //       { optionText: "opt 14", optionSelected: 1 },
  //       { optionText: "opt 24", optionSelected: 2 },
  //       { optionText: "opt 34", optionSelected: 3 },
  //       { optionText: "opt 44", optionSelected: 4 },
  //     ],
  //   },
  //   {
  //     id: "5",
  //     questionText: "What is the shortcut for adding Auto Layout in Figma4?",
  //     answerOptions: [
  //       { optionText: "opt 14", optionSelected: 1 },
  //       { optionText: "opt 24", optionSelected: 2 },
  //       { optionText: "opt 34", optionSelected: 3 },
  //       { optionText: "opt 44", optionSelected: 4 },
  //     ],
  //   },
  //   {
  //     id: "6",
  //     questionText: "What is the shortcut for adding Auto Layout in Figma4?",
  //     answerOptions: [
  //       { optionText: "opt 14", optionSelected: 1 },
  //       { optionText: "opt 24", optionSelected: 2 },
  //       { optionText: "opt 34", optionSelected: 3 },
  //       { optionText: "opt 44", optionSelected: 4 },
  //     ],
  //   },
  //   {
  //     id: "7",
  //     questionText: "What is the shortcut for adding Auto Layout in Figma4?",
  //     answerOptions: [
  //       { optionText: "opt 14", optionSelected: 1 },
  //       { optionText: "opt 24", optionSelected: 2 },
  //       { optionText: "opt 34", optionSelected: 3 },
  //       { optionText: "opt 44", optionSelected: 4 },
  //     ],
  //   },
  //   {
  //     id: "8",
  //     questionText: "What is the shortcut for adding Auto Layout in Figma4?",
  //     answerOptions: [
  //       { optionText: "opt 14", optionSelected: 1 },
  //       { optionText: "opt 24", optionSelected: 2 },
  //       { optionText: "opt 34", optionSelected: 3 },
  //       { optionText: "opt 44", optionSelected: 4 },
  //     ],
  //   },
  //   {
  //     id: "9",
  //     questionText: "What is the shortcut for adding Auto Layout in Figma4?",
  //     answerOptions: [
  //       { optionText: "opt 14", optionSelected: 1 },
  //       { optionText: "opt 24", optionSelected: 2 },
  //       { optionText: "opt 34", optionSelected: 3 },
  //       { optionText: "opt 44", optionSelected: 4 },
  //     ],
  //   },
  //   {
  //     id: "10",
  //     questionText: "What is the shortcut for adding Auto Layout in Figma4?",
  //     answerOptions: [
  //       { optionText: "opt 14", optionSelected: 1 },
  //       { optionText: "opt 24", optionSelected: 2 },
  //       { optionText: "opt 34", optionSelected: 3 },
  //       { optionText: "opt 44", optionSelected: 4 },
  //     ],
  //   },
  // ];

  function handleOptionClick(optionSelected) {
    // answersArray.push(optionSelected);
    // console.log(answersArray);
    setCurrentOption(optionSelected);
  }

  function nextQues() {
    setCurrentQuestion(currentQuestion + 1);
    setAnswersArray([...answersArray, currentOption]);
    // answersArray.push(currentOption);
    // console.log(answersArray);

    if (currentQuestion === 8) {
      setShowNextBtn(false);
      setEndBtn(true);
    }
  }

  console.log(answersArray);

  return (
    <>
      {/* <Nav2 /> */}
      {status === "Given" ? (
        <Redirect to="/quiz-dashboard" />
      ) : (
        <div className="container quizpage  p-5 ">
          {/* <div className="row my-5">
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
        </div> */}
          <div className="quizbox container">
            <div className="d-flex justify-content-between">
              <img className="logo" src={Group45} alt="logo" />
              <div>
                <h5 className="completedText">
                  Total Test Completed - {((currentQuestion + 1) / 10) * 100}%
                </h5>
                <div className="bar">
                  <div
                    style={{ width: `${((currentQuestion + 1) / 10) * 100}%` }}
                    className="completedbar"
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="w-100 my-2 "
              style={{ backgroundColor: "#E0E0E0", padding: "1px" }}
            ></div>
            {/* <div className="row my-1">
            <b>
              <h3>Question {currentQuestion + 1}</h3>
            </b>
          </div> */}
            <div className="d-flex justify-content-between">
              <h5 style={{ color: "#7A7A7A" }}>
                {" "}
                {10 - currentQuestion - 1} questions to go
              </h5>
              <div className="logo">
                Time to Go : <Countdown2 />{" "}
              </div>
            </div>
            {questionBank !== [] ? (
              <>
                <div className=" my-3 ">
                  <h5>
                    {" "}
                    <span style={{ color: "#7A7A7A" }}>
                      Q{currentQuestion + 1}:
                    </span>{" "}
                    {questionBank[currentQuestion]?.Question}
                  </h5>
                </div>
                <div className="col">
                  {/* {questionBank[currentQuestion].answerOptions.map((answerOption) => ( */}

                  {/* // <div
              //   onClick={() => handleOptionClick(answerOption.optionSelected)}
              //   className="row my-2"
              // >
              //   <div class="form-check">
              //     <input
              //       class="form-check-input"
              //       type="radio"
              //       name="flexRadioDefault"
              //       id="flexRadioDefault1"
              //     />
              //     <label class="form-check-label" for="flexRadioDefault1">
              //       {answerOption.optionText}
              //     </label>
              //   </div>
              // </div> */}
                  <div
                    onClick={() =>
                      handleOptionClick(questionBank[currentQuestion].Option1)
                    }
                  >
                    <Options
                      currentOption={currentOption}
                      option={optionsForm["Option1"]}
                      text={questionBank[currentQuestion]?.Option1}
                    />
                  </div>
                  <div
                    onClick={() =>
                      handleOptionClick(questionBank[currentQuestion].Option2)
                    }
                  >
                    <Options
                      currentOption={currentOption}
                      option={optionsForm["Option2"]}
                      text={questionBank[currentQuestion]?.Option2}
                    />
                  </div>
                  <div
                    onClick={() =>
                      handleOptionClick(questionBank[currentQuestion].Option3)
                    }
                  >
                    <Options
                      currentOption={currentOption}
                      option={optionsForm["Option3"]}
                      text={questionBank[currentQuestion]?.Option3}
                    />
                  </div>
                  <div
                    onClick={() =>
                      handleOptionClick(questionBank[currentQuestion].Option4)
                    }
                  >
                    <Options
                      currentOption={currentOption}
                      option={optionsForm["Option4"]}
                      text={questionBank[currentQuestion]?.Option4}
                    />
                  </div>

                  {/* // ))} */}
                </div>
              </>
            ) : null}

            {showNextBtn ? (
              <div className="row my-5">
                <div className="ml-auto">
                  <button
                    type="button"
                    className="btn btn-primary"
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
                      className="btn btn-primary"
                      style={{ backgroundColor: "#5E72E4" }}
                      onClick={handleSubmit}
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
      )}
    </>
  );
}

export default Quizbox;
