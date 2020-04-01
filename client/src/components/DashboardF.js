import React, { useState } from "react"
import { usePost } from "../hooks"

import Viewjobs from "./Viewjobs"

import "../styles/dashboardr.css"

export default props => {
  // const [restname, setRestname] = useState("")
  // const [jobdesc, setJobdesc] = useState("")
  // const [pay, setPay] = useState("")
  // const { createJob } = usePost()

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   createJob({ restname, jobdesc, pay }).then(resp => {
  //     props.history.push("/Viewfreelancers")
  //   })
  // }

  return (
    <div className="dashboardr">
      <h1>Restaurant Dashboard</h1>
      <div className="components">
        <Viewjobs />
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
