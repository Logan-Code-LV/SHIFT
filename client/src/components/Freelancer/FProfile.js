import React, { useState, useEffect } from "react"
import { useAuth } from "../../lib/react-auth-new"
import { useProfilefree } from "../../hooks"

export default props => {
  const { profile } = useAuth()
  const { fprofile, free } = useProfilefree()

  useEffect(() => {
    fprofile(profile.username)
    console.log(profile.username)
  }, [])

  return (
    <div className="Fprofile">
      <h1>SHIFT</h1>
      <h3>{free.firstname}</h3>
      <h3>{free.lastname}</h3>
      <h3>{free.jobposition}</h3>
      <h3>{free.qualifications}</h3>
    </div>
  )
}
