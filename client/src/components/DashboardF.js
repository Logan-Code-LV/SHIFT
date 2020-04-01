import React, { useState } from "react"
import { usePost } from "../hooks"

import Viewjobs from "./Viewjobs.js"
import SelectedJobs from "./SelectedJobs.js"

import "../styles/dashboardr.css"

export default props => {
  const [restname, setRestname] = useState("")
  const [jobdesc, setJobdesc] = useState("")
  const [pay, setPay] = useState("")
  const { createJob } = usePost()

  function handleSubmit(e) {
    e.preventDefault()
    createJob({ restname, jobdesc, pay }).then(resp => {
      props.history.push("/Viewfreelancers")
    })
  }

  return (
    <div className="dashboardr">
      <h1>Freelancer Dashboard</h1>
      <div className="dashboardrcomponents">
        <div className="freelancers">
          <Viewjobs />
          <SelectedJobs />
        </div>
      </div>
      <ul class="box-area">
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
