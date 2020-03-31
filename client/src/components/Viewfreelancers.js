import React, { useState, useEffect } from "react"
import { useAuth } from "react-auth"
import { useJobs } from "../hooks"
import { Link } from "react-router-dom"

export default props => {
  const { profile } = useAuth()
  const { viewpost, view } = useJobs()

  useEffect(() => {
    viewpost(profile.username)
    console.log(view.restname)
  }, [])

  return (
    <div className="Rprofile">
      <h1>SHIFT</h1>
      <h3>{view.restname}</h3>
      <h5>{view.jobdesc}</h5>
      <h5>{view.pay}</h5>
    </div>
  )
}
