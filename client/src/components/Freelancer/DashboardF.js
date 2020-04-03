import React, { useState } from "react"
import { usePost } from "../../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { useJobs } from "../../hooks"
import { useAuth } from "react-auth"

import Viewjobs from "./Viewjobs.js"
import SelectedJobs from "./SelectedJobs.js"

import "../../styles/dashboardf.css"

export default props => {
  const { profile } = useAuth()
  const { viewpost, view, getId } = useJobs(profile.username)

  return (
    <div className="dashboardf">
      <h1>Freelance Dashboard</h1>
      <br />
      <p>
        Please select a positon below that you would be interested in working.
        SHIFT will notify the restaurant of your availability and will message
        you soon.
      </p>
      <div className="dashboardfcomponents">
        <Viewjobs props={props} />
        <SelectedJobs props={props} />
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