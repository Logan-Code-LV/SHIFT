import React, { useState } from "react"
import { usePost, useJobs } from "../hooks"
import { useAuth } from "react-auth"

export default props => {
  const [restname, setRestname] = useState("")
  const [jobdesc, setJobdesc] = useState("")
  const [pay, setPay] = useState("")
  const { createJob } = usePost()
  const { profile } = useAuth()
  const { restId } = useJobs(profile.username)

  function handleSubmit(e) {
    e.preventDefault()
    createJob({ restname, jobdesc, pay, restId })
    // .then(resp => {
    //   props.history.push("/Viewfreelancers")
  }

  return (
    <div className="register">
      <h4>Post your job below to get Your SHIFT Covered</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={restname}
          onChange={e => setRestname(e.target.value)}
          placeholder="Restaurant Name"
        />{" "}
        <br></br>
        <input
          type="text"
          value={jobdesc}
          onChange={e => setJobdesc(e.target.value)}
          placeholder="Job Description"
        />
        <br></br>
        <input
          type="text"
          value={pay}
          onChange={e => setPay(e.target.value)}
          placeholder="Pay"
        ></input>
        <br></br>
        <button type="submit">Submit Job</button>
      </form>
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
