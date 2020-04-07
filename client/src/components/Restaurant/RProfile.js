import React, { useState, useEffect } from "react"
import { useAuth } from "../../lib/react-auth-new"
import { useProfile } from "../../hooks"
import { Link } from "react-router-dom"

export default props => {
  const { profile } = useAuth()
  const { rprofile, rest } = useProfile()

  useEffect(() => {
    rprofile(profile.username)
    console.log(profile.username)
  }, [])

  return (
    <div className="Rprofile">
      <h1>Your Profile</h1>
      <h3>{rest.name}</h3>
      <Link>
        <h5>{rest.website}</h5>
      </Link>
    </div>
  )
}
