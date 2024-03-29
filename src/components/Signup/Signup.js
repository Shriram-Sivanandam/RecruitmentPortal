import { TextField } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import Nav from "../Nav/Nav";
import signup_illustration from "../../assets/signup_illustration.svg";
import { useAuth } from "../../contexts/AuthContext";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      // db.collection("users")
      //   .add({
      //     emailId: emailRef.current.value,
      //   })
      //   .then(() => {})
      //   .catch((error) => {
      //     setError(error.message);
      //   });
      // history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

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
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
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
                        id="email"
                        ref={emailRef}
                        className="input mx-auto"
                        color="default"
                        label="Email-Id"
                        variant="filled"
                        placeholder=""
                        type="email"
                      />
                    </div>
                    <div className="row my-3">
                      <TextField
                        id="password"
                        ref={passwordRef}
                        className="input mx-auto"
                        label="Password"
                        variant="filled"
                        placeholder=""
                        type="password"
                      />
                    </div>
                    <div className="row my-3">
                      <TextField
                        id="password-confirm"
                        ref={passwordConfirmRef}
                        className="input mx-auto"
                        label="Confirm Password"
                        variant="filled"
                        placeholder=""
                        type="password"
                      />
                    </div>
                    <div className="row mx-auto my-3">
                      <h4 className="headertext mx-auto">Select Domain(s)</h4>
                    </div>
                    <div className="row mx-auto my-3">
                      <div className="form-check form-check-inline ml-lg-5 pl-lg-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          for="inlineCheckbox1"
                        >
                          <h5 className="headertext2">Technical</h5>
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          for="inlineCheckbox2"
                        >
                          <h5 className="headertext2">Management</h5>
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label
                          className="form-check-label"
                          for="inlineCheckbox3"
                        >
                          <h5 className="headertext2">Design</h5>
                        </label>
                      </div>
                    </div>
                    <div className="row mx-auto my-3">
                      <h4 className="headertext mx-auto">Select Time Slot</h4>
                    </div>
                    <div className="row mx-auto my-3">
                      <div className="form-check form-check-inline ml-lg-5 pl-lg-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox4"
                          value="option4"
                        />
                        <label
                          className="form-check-label"
                          for="inlineCheckbox4"
                        >
                          <h5 className="headertext2">7:00 PM</h5>
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox5"
                          value="option5"
                        />
                        <label
                          className="form-check-label"
                          for="inlineCheckbox5"
                        >
                          <h5 className="headertext2">8:00 PM</h5>
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox6"
                          value="option6"
                        />
                        <label
                          className="form-check-label"
                          for="inlineCheckbox6"
                        >
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
                        disabled={loading}
                        type="submit"
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
