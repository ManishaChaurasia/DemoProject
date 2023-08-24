import React, { Component, useState } from "react";
import './Logincomponent.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useSearchParams
  } from "react-router-dom";
const LoginComponent = () => {
    const [email , setEmail]= useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [password , setPassword]= useState("");
    const [errorPasswordMessage , setErrorPasswordMessage] = useState('');
    const [allEntry , setAllEntry]= useState([]);
    const submitForm = (e)=>{
        e.preventDefault()
        const newEntry = {email:email, password:password};
        setAllEntry(...allEntry, [newEntry]);
        console.log(newEntry);
     }

const handleEmailChange = (event) =>{
    setEmail(event.target.value);
    if(!validateEmail(email)){
        
        setErrorMessage('Please Enter a Valid email address');
    }
    else{
        setErrorMessage('');
    }
}
//email
const validateEmail = (email) =>{
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    
};
    
//password
const handlePasswordChange = (event)=>{
    console.log(password)
   if (event.target.value != '12345'){
       setErrorPasswordMessage('Password must be "12345" ');
   }
   else{
       setErrorPasswordMessage('');
   }
setPassword(event.target.value);
};
const validatePassword = (password)=>{
    return password === '12345';

};


  return (
    <>
      <form className="py-5" action="" onSubmit={submitForm}>
        <div className="py-2">
          <label  className="form-label" htmlFor="email"> Email:</label>
          <input id="email" type="text" name="email" autoComplete="off" value={email} onChange={handleEmailChange} />
          {errorMessage && <p className="error-message text-danger">{errorMessage}</p>}
        </div>

        <div>
          <label className="form-label" htmlFor="password"> Password:</label>
          <input type="password" name="password" autoComplete="off" value={password} onChange={handlePasswordChange} />
          {errorPasswordMessage && <p className="error-password text-danger">{errorPasswordMessage}</p>}
        </div>

       <Link to="/thankyou">
       <button className="btn btn-primary btn-lg mt-3" type="submit">
          Login
        </button>
       </Link>
       
      </form>
    </>
  );
};
 
export default LoginComponent;
