import { TextField } from "@material-ui/core";
import React from "react";
import Nav from "../Nav/Nav";
import signup_illustration from "../../assets/signup_illustration.svg";

function Signup() {
  return (
    <>
      <Nav />
      <div className="container my-3 ">
        <div className="row my-auto">
          <div className="col my-auto">
            <img
              src={signup_illustration}
              alt="signup_illustration"
              style={{ width: "500px" }}
              className="img-fluid"
            />
          </div>
          <div className="col">
            <h6>SIGN UP </h6>
            <form>
              <div className="container">
                <div className="row header">
                  <h4 className="mx-auto my-auto headertext">
                    Sign up for STC Recruitments
                  </h4>
                </div>
                <div className="row bottom">
                  <div className="container mx-auto my-auto">
                    <div className="row mt-3">
                      <h6 className="mx-auto headertext1">Sign up</h6>
                    </div>

                    <div className="row mb-3">
                      <TextField
                        className="input mx-auto"
                        color="default"
                        label="Name"
                        variant="filled"
                        placeholder=""
                        type="text"
                      />
                    </div>

                    <div className="row mb-3">
                      <TextField
                        className="input mx-auto"
                        color="default"
                        label="Registration Number"
                        variant="filled"
                        placeholder=""
                        type="text"
                      />
                    </div>
                    <div className="row my-3">
                      <TextField
                        className="input mx-auto"
                        label="Email-Id"
                        variant="filled"
                        placeholder=""
                        type="email"
                      />
                    </div>
                    <div className="row mx-auto my-3">
                      <h4 className="headertext mx-auto">Select Domain(s)</h4>
                    </div>
                    <div className="row mx-auto my-3">
                      <div class="form-check form-check-inline ml-lg-5 pl-lg-5">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          <h5 className="headertext2">Technical</h5>
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineCheckbox2">
                          <h5 className="headertext2">Management</h5>
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
                          <h5 className="headertext2">Design</h5>
                        </label>
                      </div>
                    </div>
                    <div className="row mx-auto my-3">
                      <h4 className="headertext mx-auto">Select Time Slot</h4>
                    </div>
                    <div className="row mx-auto my-3">
                      <div class="form-check form-check-inline ml-lg-5 pl-lg-5">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox4"
                          value="option4"
                        />
                        <label class="form-check-label" for="inlineCheckbox4">
                          <h5 className="headertext2">7:00 PM</h5>
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox5"
                          value="option5"
                        />
                        <label class="form-check-label" for="inlineCheckbox5">
                          <h5 className="headertext2">8:00 PM</h5>
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox6"
                          value="option6"
                        />
                        <label class="form-check-label" for="inlineCheckbox6">
                          <h5 className="headertext2">9:00 PM</h5>
                        </label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <h6 className="mx-auto headertext1">
                        Already have an account ?{" "}
                        <a className="signup" href="/signup">
                          <span>Login</span>
                        </a>
                      </h6>
                    </div>
                    <div className="row">
                      <button
                        type="button"
                        className="btn btn-light mx-auto my-2"
                      >
                        <h6>SIGN UP</h6>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
