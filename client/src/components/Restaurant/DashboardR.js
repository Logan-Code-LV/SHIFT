import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { usePost } from "../../hooks"

import Jobpost from "./Jobpost"
import Viewfreelancers from "./Viewfreelancers"

import "../../styles/dashboardr.css"

export default props => {
  return (
    <div className="dashboardr">
      <h1>Restaurant Dashboard</h1>
      <div className="dashboardrcomponents">
        <div className="freelancers">
          <Viewfreelancers props={props} />
        </div>
        <div className="jobpost">
          <Jobpost props={props} />
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
  )
}
