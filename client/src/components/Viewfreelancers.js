import React, { useState, useEffect } from "react"
// import { useAuth } from "react-auth"
import { useJobs } from "../hooks"

import "../styles/viewfreelancers.css"

export default props => {
  // const { profile } = useAuth()
  const { viewpost, view } = useJobs()

  // useEffect(() => {
  //   viewpost(restname)
  // }, [])

  return (
    <div className="viewfreelancers">
      <h4>
        Below are jobs that you have posted in the past and the freelancers that
        showed an interest in working them!
      </h4>
      <div className="jobs">
        <h5>view.restname</h5>
        <h6>view.jobdesc</h6>
        <h6>view.pay</h6>
      </div>
    </div>
  )
}
