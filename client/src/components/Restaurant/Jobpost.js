import React, { useState } from "react"
import { usePost, useJobs } from "../../hooks"
import { useAuth } from "../../lib/react-auth-new.js"

export default (props) => {
  const [restname, setRestname] = useState("")
  const [jobdesc, setJobdesc] = useState("")
  const [pay, setPay] = useState("")
  const [deadline, setDeadline] = useState("")

  const { createJob } = usePost()
  const { profile } = useAuth()
  const { restId } = useJobs(profile.username)

  function handleSubmit(e) {
    console.log(restId)
    e.preventDefault()
    createJob({ restname, jobdesc, pay, deadline, restId })
    // .then((resp) => {
    //   // get(restId)
    //   console.log(restname)
  }

  return (
    <div className="register">
      <h4>Get your SHIFT covered below</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={restname}
          onChange={(e) => setRestname(e.target.value)}
          placeholder="Restaurant Name"
        />{" "}
        <br></br>
        <input
          type="text"
          value={jobdesc}
          onChange={(e) => setJobdesc(e.target.value)}
          placeholder="Job Description"
        />
        <br></br>
        <input
          type="text"
          value={pay}
          onChange={(e) => setPay(e.target.value)}
          placeholder="Pay"
        ></input>
        <br></br>
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          placeholder="What is the latest time that you need the shift to
          confirm the shift is covered?"
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
