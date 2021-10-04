import React from "react";

function ManagementQuiz() {
  return (
    <div>
      <div className="quizInfo">
        <div className="questionInfo">
          <h5>
            Question: <span className="questionNo">4/10</span>
          </h5>
        </div>
        <div className="timeInfo">
          <h5>
            Question: <span className="timeRemaining">17:35</span>
          </h5>
        </div>
        <div className="questionBox">
          <h3>Question 4:</h3>
          <p className="question">
            What is the shortcut for adding Auto Layout in Figma?
          </p>
          <textarea placeholder="Type your answer here" type="text" rows="6" />
          <button className="btn btn-primary">Next Question</button>
        </div>
      </div>
    </div>
  );
}

export default ManagementQuiz;
