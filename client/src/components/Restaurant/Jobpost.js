import React, { useState } from "react"
import { usePost, useJobs } from "../../hooks"
import { useAuth } from "react-auth"

export default props => {
  const [restname, setRestname] = useState("")
  const [jobdesc, setJobdesc] = useState("")
  const [pay, setPay] = useState("")
  // const [job_date, setJob_date] = useState("")
  const [deadline, setDeadline] = useState("")
  const { createJob } = usePost()
  const { profile } = useAuth()
  const { restId, get } = useJobs(profile.username)

  function handleSubmit(e) {
    e.preventDefault()
    createJob({ restname, jobdesc, pay, restId, deadline }).then(resp => {
      get(restId)
    })
  }
  console.log(restId)

  return (
    <div className="register">
      <h4>Get your SHIFT covered below</h4>
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
        {/* <br></br>
        <input
          type="text"
          value={job_date}
          onChange={e => setJob_date(e.target.value)}
          placeholder="What date will the shift take place?"
        ></input> */}
        <br></br>
        <input
          type="datetime-local"
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          placeholder="What is the latest time that you need the shift to confirm the shift is covered?"
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
