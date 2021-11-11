import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
//import letsgo svg from assests
import letsgo from "../../assets/letsgo.svg";
import star from "../../assets/star.svg";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email.current.value, password.current.value);
      if (email.current.value === "1234@1234.com")
        history.push("/admin-dashboard");
      else history.push("/quiz-dashboard");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    // <div className="Login">
    //   {/* <div className="image-wrapper">
    //     <img className="background-image" src={squares} />
    //   </div> */}
    //   <h2 className="login__heading">Log In</h2>
    //   {error && <alert variant="danger">{error}</alert>}
    //   <form className="form" onSubmit={handleSubmit}>
    //     <label className="login__label">Email</label>
    //     <input className="login__input" type="email" ref={emailRef} required />
    //     <label className="login__label">Password</label>
    //     <input
    //       className="login__input"
    //       type="password"
    //       ref={passwordRef}
    //       required
    //     />
    //     <button disabled={loading} className="login__btn" type="submit">
    //       Log In
    //     </button>
    //   </form>
    // <div className="mt">
    //   <Link className="custom" to="/forgot-password">
    //     Forgot Password?
    //   </Link>
    // </div>

    <div className="loginPage container ">
      <img className="mx-auto letsgo2" src={letsgo} alt="lets go" />
      <img className="mx-auto star" src={star} alt="star" />

      <h1 className="headingLogin mb-5">Log in</h1>
      <div>
        {error && <toastError error={error} />}
        <label className="mt-3">Enter your VIT Email Id</label>
        <input
          className="inputField my-2"
          placeholder="Enter your Email"
          ref={email}
        />
        <label className="mt-4">Password</label>
        <input
          type="password"
          className="inputField my-2"
          placeholder="Enter your Password"
          ref={password}
        />
        <button
          className="btn btn-primary bg-dark border-dark  mt-5 mb-4"
          onClick={handleSubmit}
          disabled={loading}
        >
          Submit
        </button>
        <div className="mt">
          <Link className="heading " to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
        <div className="login__signUpLink mt-2">
          Need an account?{" "}
          <Link className="heading" to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
