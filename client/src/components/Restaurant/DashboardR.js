import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { usePost } from "../../hooks"

import Jobpost from "./Jobpost"
import Viewfreelancers from "./Viewfreelancers"

// import "../../styles/dashboardr.css"

export default props => {
  return (
    <div>
      <h1>Restaurant Dashboard</h1>
      <div className="dashboardrcomponents">
        <div className="jobpost">
          <Jobpost props={props} />
        </div>
        <div className="freelancers">
          <Viewfreelancers props={props} />
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
