import React from 'react'

function Questions({question , index }) {
    return (
        <div className="quizbox container my-3" style={{ width: "65vw" }}>
        <div className="row my-1">
          <b>
            <h5>Question {index + 1}</h5>
          </b>
        </div>
        <div className="row my-3">
          <h5>
           {question}
          </h5>
        </div>
        <div className="col">
          <div className="row my-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Ctrl + A
              </label>
            </div>
          </div>
          <div className="row my-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Shift + A
              </label>
            </div>
          </div>
          <div className="row my-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label class="form-check-label" for="flexRadioDefault3">
                Tab + A
              </label>
            </div>
          </div>
          <div className="row my-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label class="form-check-label" for="flexRadioDefault4">
                Alt + A
              </label>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Questions
