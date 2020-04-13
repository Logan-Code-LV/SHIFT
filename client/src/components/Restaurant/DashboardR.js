import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { usePost } from "../../hooks"
import { useAuth } from "../../lib/react-auth-new.js"
import Jobpost from "./Jobpost"
import Viewfreelancers from "./Viewfreelancers"
import ViewJobPost from "./ViewJobPost"

import "../../styles/dashboardr.css"

export default (props) => {
  const { signout } = useAuth()

  function handleLogout(e) {
    e.preventDefault()

    signout().then((resp) => {
      props.history.push("/")
    })
  }

  return (
    <div>
      <div className="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h1>Restaurant Dashboard</h1>

      <div className="dashboardrcomponents">
        <div className="jobpost">
          <Jobpost props={props} />
        </div>
        <div className="freelancers">
          <Viewfreelancers props={props} />
        </div>
      </div>
      <div>
        <ViewJobPost props={props} />
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
  )
}
