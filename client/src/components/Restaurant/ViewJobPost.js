import React, { useState, useEffect } from "react"
import { useAuth } from "../../lib/react-auth-new.js"
import { useJobs } from "../../hooks"
import "../../styles/viewfreelancers.css"
export default (props) => {
  const { profile } = useAuth()
  const { view } = useJobs(profile.username)
  return (
    <div className="jobposts">
      <h3>Job Post History:</h3>
      <div className="jobposthistory">
        {view.map((item, i) => (
          <div key={"job" + i} className="onejob">
            <h4 className="jobname">{item.restname}</h4>
            <h5 className="jobdesc">Position: {item.jobdesc}</h5>
            <h5 className="jobpay">Pay: ${item.pay} an hour</h5>
          </div>
        ))}
      </div>
    </div>
  )
}
