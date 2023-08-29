import React, { Component, useState } from "react";
import "./Logincomponent.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  // const [allEntry , setAllEntry]= useState([]);
  const navigate = useNavigate();
  const [emptyError, setEmptyError] = useState("");
  // const submitForm = (e)=>{
  //     e.preventDefault()
  //     const newEntry = {email:email, password:password};
  //     setAllEntry(...allEntry, [newEntry]);
  //     console.log(newEntry);
  //  }

  const handleEmailChange = (event) => {
    setEmptyError("");
    setEmail(event.target.value);
    if (!validateEmail(email)) {
      setErrorMessage("Please Enter a Valid email address");
    } else {
      setErrorMessage("");
    }
  };
  //email
  const validateEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //password
  const handlePasswordChange = (event) => {
    setEmptyError("");
    if (event.target.value != "12345") {
      setErrorPasswordMessage('Password must be "12345" ');
    } else {
      setErrorPasswordMessage("");
    }
    setPassword(event.target.value);
  };
  const validatePassword = (password) => {
    return password === "12345";
  };
  //local storage
  const submitDetails = (e) => {
    e.preventDefault();
    if (email == "" && password == "") {
      setEmptyError("Please Filled Both details");
    } else if (email != "" && password == "") {
      setErrorPasswordMessage("Please Filled the password");
    } else if (email == "" && password != "") {
      setErrorMessage("Please fill the email");
    } else {
      if (validateEmail(email) && validatePassword(password)) {
        const userDetails = { email, password };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        navigate("/thankyou");
      }
    }
  };

  return (
    <>
      <form className="py-5" action="" onSubmit={submitDetails}>
        <p className="text-danger">{emptyError}</p>
        <div className="py-2">
          <label className="form-label" htmlFor="email">
            {" "}
            Email:
          </label>
          <input
            id="email"
            type="text"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleEmailChange}
          />
          {errorMessage && (
            <p className="error-message text-danger">{errorMessage}</p>
          )}
        </div>

        <div>
          <label className="form-label" htmlFor="password">
            {" "}
            Password:
          </label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handlePasswordChange}
          />
          {errorPasswordMessage && (
            <p className="error-password text-danger">{errorPasswordMessage}</p>
          )}
        </div>

        <button className="btn btn-primary btn-lg mt-3" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginComponent;
