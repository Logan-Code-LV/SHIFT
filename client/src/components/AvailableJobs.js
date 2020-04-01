import React, { useState, useEffect } from "react"
import { useAuth } from "react-auth"
import { useJobs } from "../hooks"

import "../styles/viewfreelancers.css"

export default props => {
  const { profile } = useAuth()
  const { viewpost, view, getId } = useJobs(profile.username)

  return (
    <div className="jobposts">
      <h3>Select a job:</h3>
      <div className="viewfreelancers">
        {view.map(item => (
          <div className="onejob">
            <h2 className="jobname">{item.restname}</h2>
            <h3 className="jobdesc">Position: {item.jobdesc}</h3>
            <h3 className="jobpay">Pay: ${item.pay} an hour</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
