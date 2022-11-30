import React, { useState } from "react";
import "./RealEstate.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [sigupDetails, setSignDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  async function onSubmit(data) {
    const { email, password, confirmPassword } = sigupDetails;
    // console.log(data);

    axios
      .post("http://localhost:8000/api/users/signup", {
        email: email,
        password: password,
      })
      .then((res) => navigate("/"))
      .catch((err) => alert("Email already exist"));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="login" id="logid">
          <img
            id="logo-signup"
            className="signup-items"
            alt="logo"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/88975523945059.5632b7d5654ae.png"
          />
          <span id="credential-signup" className="login-items">
            Create New Account
          </span>
          <input
            type="email"
            placeholder="         Email-id"
            className="signup-items"
            {...register("email", {
              required: "Please Enter Your Email!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please Enter A Valid Email!",
              },
            })}
            onChange={(e) =>
              setSignDetails({ ...sigupDetails, email: e.target.value })
            }
            value={sigupDetails.email}
            id="mailId"
          />

          {errors.email && <p className="error">* {errors.email.message}</p>}

          <input
            type="password"
            placeholder="         Password"
            className="signup-items"
            {...register("password", {
              required: "Please Enter Your Password",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long!",
              },
            })}
            onChange={(e) =>
              setSignDetails({ ...sigupDetails, password: e.target.value })
            }
            value={sigupDetails.password}
            id="pass-signup"
          />

          {errors.password && (
            <p className="error">* {errors.password.message}</p>
          )}

          <input
            type="password"
            placeholder="         Confirm Password"
            className="signup-items"
            {...register("confirmPassword", {
              required: "Please Confirm Your Password",
              validate: (match) => {
                const password = getValues("password");
                return match === password || "Passwords should match!";
              },
            })}
            onChange={(e) =>
              setSignDetails({
                ...sigupDetails,
                confirmPassword: e.target.value,
              })
            }
            value={sigupDetails.confirmPassword}
            id="confirmpass-signup"
          />

          {errors.confirmPassword && (
            <p className="error">* {errors.confirmPassword.message}</p>
          )}

          <button id="signup-btn" type="Submit" className="signup-items">
            Sign Up
          </button>
        </div>
        <Link to="/" id="signinlinktag">
          <p className="extra-info">
            <span>Sign In</span>
          </p>
        </Link>
      </div>
    </form>
  );
}

export default Signup;
