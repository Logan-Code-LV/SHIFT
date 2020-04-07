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

export default props => {
  return (
    <div className="main">
      <div className="top">
        <div className="mainheader">
          <a href="#mastercontainer">Home</a>
          <a href="#logomap">About Us</a>
          <a href="#menu">Register</a>
          <a href="#gallery">Login</a>
        </div>
        <div className="container">
          <div className="body">
            <h1 className="logo">SHIFT</h1>
            <p>
              SHIFT is designed to match qualified freelance workers with
              businesses that need them.
            </p>
            <div className="logins">
              <Freelogin props={props} />
              <Restlogin props={props} />
            </div>
            <br />
            <h6 className="registerspot"> New here? - Sign up below </h6>
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
        <ul className="box-area">
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
      {/* <div className="backgroundimage">
        <img
          className="img-responsive"
          src="../assets/shiftoversize.jpg.jpg"
          alt="logo"
        />
      </div> */}
    </div>
  )
}
