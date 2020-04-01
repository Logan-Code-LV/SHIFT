import React, { useState, useEffect } from "react"
import { useAuth } from "react-auth"
import { useJobs } from "../hooks"

import "../styles/viewfreelancers.css"

export default props => {
  const { profile } = useAuth()
  const { viewpost, view, getId } = useJobs(profile.username)

  return (
    <div className="Rprofile">
      <h1>
        Below are jobs that you have posted in the past and the freelancers that
        showed an interest in working them!
      </h1>
      {view.map(item => (
        <div>
          <h3>{item.restname}</h3>
          <h5>{item.jobdesc}</h5>
          <h5>${item.pay} per hour</h5>
        </div>
      ))}
    </div>
  )
}
