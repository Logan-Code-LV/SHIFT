import React, { useState } from "react"
import { useRegister } from "../hooks"

export default props => {
  const { create } = useRegister()

  return (
    <div className="Rprofile">
      <h1>SHIFT</h1>
      {create.map(profile => (
        <p>
          <strong>{profile.name}:</strong>
          <strong>{profile.website}</strong>
        </p>
      ))}
    </div>
  )
}
