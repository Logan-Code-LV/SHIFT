import React, { useState, useEffect } from "react"
import { useAuth } from "../../lib/react-auth-new.js"
import { useJobs } from "../../hooks"
import { usePost, useJobs } from "../../hooks"
import { BrowserRouter as Link } from "react-router-dom"

import "../../styles/viewfreelancers.css"

export default (props) => {
  const [restname, setRestname] = useState("")
  const [jobdesc, setJobdesc] = useState("")
  const [pay, setPay] = useState("")
  const [deadline, setDeadline] = useState("")

  const { createJob } = usePost()
  const { profile } = useAuth()
  const { view, restId } = useJobs(profile.username)
  console.log(view)
  return (
    <div className="jobposts">
      <h3>Job Posts:</h3>
      <Link to="/interestedfreelancers">
        <div className="viewfreelancers">
          {view.map((item, i) => (
            <div key={"job" + i} className="onejob">
              <h4 className="jobname">{item.restname}</h4>
              <h5 className="jobdesc">Position: {item.jobdesc}</h5>
              <h5 className="jobpay">Pay: ${item.pay} an hour</h5>
            </div>
          ))}
        </div>
      </Link>
    </div>
  )
  console.log(view)
}
