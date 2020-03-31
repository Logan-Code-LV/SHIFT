import React, { useState, useEffect } from "react"
// import { useAuth } from "react-auth"
import { useJobs } from "../hooks"

export default props => {
  // const { profile } = useAuth()
  const { viewpost, view } = useJobs()

  // useEffect(() => {
  //   viewpost(restname)
  // }, [])

  return (
    <div className="Rprofile">
      <h1>SHIFT</h1>
      <h3>{view.restname}</h3>
      <h5>{view.jobdesc}</h5>
      <h5>{view.pay}</h5>
    </div>
  )
}
