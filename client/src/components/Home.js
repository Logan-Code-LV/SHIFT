import React, { useState } from "react"
import { useRegister } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { useAuth } from "../lib/react-auth-new.js"

import Restregister from "./Restaurant/Restregister.js"
import Freeregister from "./Freelancer/Freeregister"
import Freelogin from "./Freelancer/Freelogin"
import Restlogin from "./Restaurant/Restlogin.js"

import "../assets/shiftoversize.jpg"

import "../styles/home.css"

export default (props) => {
  return (
    <div className="Home.js">
      {/* <div className="mainheader">
          <a href="#mastercontainer">Home</a>
          <a href="#logomap">About Us</a>
          <a href="#menu">Register</a>
          <a href="#gallery">Login</a>
        </div> */}
      <div className="backgroundimage">
        <div className="main">
          <h1 className="logo">SHIFT</h1>
          <h4 className="tagline">"We've got you covered!"</h4>
        </div>
      </div>
      <div className="container">
        <div className="body">
          <p className="tagline2">
            SHIFT is designed to match qualified freelance workers with
            businesses that need them.
          </p>
          <div className="logins">
            <Freelogin props={props} />
            <Restlogin props={props} />
          </div>
          <br />
          <h6 className="registerspot"> Sign up below </h6>
          <div className="registerarea">
            <h5>
              <Link to="/freeregister">Registration (Freelance Workers)</Link>
            </h5>
            <h5>
              <Link to="/restregister">Registration (Restaurants)</Link>
            </h5>
          </div>
        </div>
      </div>
      <ul className="home-box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
