import React from "react";
import Nav2 from "../Nav/Nav2";
import "./ManagementQuiz.css";

function ManagementQuiz() {
  return (
    <>
      <Nav2 />
      <div className="container">
        <div className="row my-5">
          <div className="managementQuesInfo">
            <h4>
              Question:<span> 4/10</span>
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
              <h3>Question 4</h3>
            </b>
          </div>
          <div class="form-group">
            <label className="managementQues" for="managementAnswer">
              What is the shortcut for adding Auto Layout in Figma?
            </label>
            <textarea
              class="form-control"
              id="managementAnswer"
              rows="5"
            ></textarea>
          </div>
          <div className="row my-5">
            <div className="ml-auto">
              <button type="button" class="btn btn-primary">
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagementQuiz;
