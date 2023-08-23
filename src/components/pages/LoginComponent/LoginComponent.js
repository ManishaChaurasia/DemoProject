import React, { Component, useState } from "react";
import './Logincomponent.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
const LoginComponent = () => {
    const [email , setEmail]= useState("");
    const [password , setPassword]= useState("");
    const [allEntry , setAllEntry]= useState([]);
    const submitForm = (e)=>{
        e.preventDefault()
        const newEntry = {email:email, password:password};
        setAllEntry(...allEntry, [newEntry]);
        console.log(newEntry);
     }
    
  return (
    <>
      <form className="py-5" action="" onSubmit={submitForm}>
        <div className="py-2">
          <label  className="form-label" htmlFor="email"> Email:</label>
          <input id="email" type="text" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value) } />
        </div>

        <div>
          <label className="form-label" htmlFor="password"> Password:</label>
          <input type="password" name="password" autoComplete="off" value={password} onChange={(e) => setPassword (e.target.value) }/>
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
