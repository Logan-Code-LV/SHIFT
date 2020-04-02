import React, { useState } from "react"
import { usePost } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Viewjobs from "./Viewjobs.js"
import SelectedJobs from "./SelectedJobs.js"

import "../styles/dashboardf.css"

export default props => {
  return (
    <div className="dashboardf">
      <h1>Restaurant Dashboard</h1>
      <br />
      <p>
        Please select a positon below that you would be interested in working.
        The correspondiong restaurant will be notified of your interest and will
        contact you shortly!
      </p>
      <div className="dashboardfcomponents">
        <SelectedJobs />
        <Viewjobs />
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
